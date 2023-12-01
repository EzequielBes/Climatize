import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export function Clima() {
  const [city, setCity] = useState("Sp");

  return (
    <Box>
      <Flex>
        <Box>
          <Text fontFamily={"poppins"}>Clima: {city}</Text>
          <Box w="50vw" h="40vh" bg="teal.200" borderRadius={20} boxShadow="lg">
            <Flex
              flexDir={"column"}
              h="80%"
              justify={"center"}
              align={"center"}
            >
              <img src="" />
              imagem aqui
              <Text>Temperatura aqui</Text>
            </Flex>
            <Flex w="30%" margin={"0 auto"} h="0%" align={"center"}>
              <Input type="text" name="cidade" bg={"white"} />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
