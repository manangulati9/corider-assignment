import { Flex, Input } from "@chakra-ui/react";
import Image from "next/image";
import paperclip from "../../public/assets/paperclip.svg";
import send from "../../public/assets/send-03.svg";

export default function () {
  return (
    <Flex px="0.5rem" py="1rem" alignItems="center">
      <Flex gap="1rem" flex={1} borderRadius="0.5rem" px="0.69rem" py="0.75rem">
        <Input placeholder="Reply to @Rohit Yadav" variant="flushed" />
        <Image src={paperclip} alt="paperclip" />
        <Image src={send} alt="send" />
      </Flex>
    </Flex>
  );
}
