import { useState, useEffect } from "react";

export interface Messages {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

export interface TripData {
  from: string;
  to: string;
  name: string;
}

export function useMessages() {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const [tripData, setTripData] = useState<TripData>();

  const loadMessages = async () => {
    const res = await fetch(
      `https://qa.corider.in/assignment/chat?page=${pageNum}`
    );
    const data = await res.json();
    setMessages((prevMsgs) => [...prevMsgs, ...data.chats]);
    const newTripData = {
      from: data.from,
      to: data.to,
      name: data.name,
    };
    setTripData(newTripData);
    setPageNum((prevVal) => prevVal + 1);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return { messages, loadMessages, tripData };
}
