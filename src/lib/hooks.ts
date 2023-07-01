import { useState, useEffect } from "react";

interface Messages {
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

export function useMessages() {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [pageNum, setPageNum] = useState(0);

  const loadMessages = async () => {
    const res = await fetch(
      `https://qa.corider.in/assignment/chat?page=${pageNum}`
    );
    const msgs = await res.json();
    setMessages((prevMsgs) => [...prevMsgs, ...msgs.chats]);
    setPageNum((prevVal) => prevVal + 1);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return { messages, loadMessages };
}
