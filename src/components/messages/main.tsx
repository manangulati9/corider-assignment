import { Flex } from "@chakra-ui/react";
import SendBubble from "./sendBubble";
import ReceiveBubble from "./receiveBubble";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

export default function () {
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

  return (
    <Flex
      grow={1}
      direction="column-reverse"
      overflowY={"auto"}
      id="scrollableDiv"
    >
      <InfiniteScroll
        dataLength={15}
        next={loadMessages}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        inverse={true}
        hasMore={true}
        loader={<h4 style={{ display: "none" }}>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {messages.map((msg) => {
          if (msg.sender.self) {
            return <SendBubble message={msg.message} key={msg.id} />;
          }
          return (
            <ReceiveBubble
              message={msg.message}
              img={msg.sender.image}
              key={msg.id}
            />
          );
        })}
      </InfiniteScroll>
    </Flex>
  );
}
