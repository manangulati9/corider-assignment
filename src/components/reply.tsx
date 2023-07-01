import { Button, Flex, Input } from "@chakra-ui/react";
import Image from "next/image";
import paperclip from "../../public/assets/paperclip.svg";
import send from "../../public/assets/send-03.svg";
import Attachments from "./attachments";
import { useState } from "react";

export default function () {
  const [toggle, setToggle] = useState(false);

  return (
    <Flex py="0.5rem" px="1rem" alignItems="center">
      <Flex gap="1rem" flex={1} borderRadius="0.5rem" py="0.69rem" px="0.75rem">
        <Input placeholder="Reply to @Rohit Yadav" variant="unstyled" />
        <Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {toggle && <Attachments />}
            <Button
              onClick={() => setToggle(!toggle)}
              rounded="full"
              variant="unstyled"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={paperclip} alt="paperclip" />
            </Button>
          </Flex>
          <Button
            rounded="full"
            variant="unstyled"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={send} alt="send" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
