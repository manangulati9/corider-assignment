"use client";

import Header from "@/components/header";
import Messages from "@/components/messages/main";
import Reply from "@/components/reply";
import { useMessages } from "@/lib/hooks";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const { messages, loadMessages, tripData } = useMessages();

  return (
    <Flex
      bgColor="background"
      flexDirection="column"
      height="100vh"
      width="100vw"
    >
      <Header tripData={tripData} />
      <Messages messages={messages} loadMessages={loadMessages} />
      <Reply />
    </Flex>
  );
}
