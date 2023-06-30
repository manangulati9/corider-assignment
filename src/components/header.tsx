import { Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import back from "../../public/assets/Back.svg";
import edit from "../../public/assets/edit-05.svg";
import imgGroup from "../../public/assets/image_group.svg";
import dots from "../../public/assets/dots-vertical.svg";

export default function () {
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      pt="1.25rem"
      px="1rem"
      pb="1rem"
      borderBottomWidth={1}
      borderColor="border"
    >
      <Flex
        alignItems="center"
        gap="0.75rem"
        alignSelf="stretch"
        textColor="secondary"
      >
        <Image src={back} alt="back" />
        <Text flexGrow={1} fontWeight={700} fontSize="1.5rem">
          Trip 1
        </Text>
        <Image src={edit} alt="edit" />
      </Flex>
      <Flex alignItems="center" gap="0.75rem" justifyContent="space-between">
        <Flex gap="1rem">
          <Image src={imgGroup} alt="imgGroup" loading="eager" />
          <Container textColor="gray.100">
            <Flex gap="0.5rem" alignItems="center">
              <Text>From</Text>
              <Text textColor="secondary" fontWeight={700} fontSize="1.25rem">
                IGI Airport, T3
              </Text>
            </Flex>
            <Flex gap="0.5rem" alignItems="center">
              <Text>To</Text>
              <Text textColor="secondary" fontWeight={700} fontSize="1.25rem">
                Sector 28
              </Text>
            </Flex>
          </Container>
        </Flex>
        <Image src={dots} alt="dots" />
      </Flex>
    </Flex>
  );
}