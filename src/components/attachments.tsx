import { Flex } from "@chakra-ui/react";
import camera from "../../public/assets/camera-02.svg";
import video from "../../public/assets/video.svg";
import doc from "../../public/assets/Document.svg";
import Image from "next/image";
import corner from "../../public/assets/Corner.svg";

export default function () {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      position="absolute"
      width="10rem"
      bottom="4.5rem"
    >
      <Flex
        px="1rem"
        py="0.75rem"
        gap="1rem"
        borderRadius="full"
        bgColor="primary"
        boxShadow="0px -1px 8px 0px rgba(0, 0, 0, 0.05)"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={camera} alt="" loading="eager" />
        <Image src={video} alt="" loading="eager" />
        <Image src={doc} alt="" loading="eager" />
      </Flex>
      <Image src={corner} alt="" />
    </Flex>
  );
}
