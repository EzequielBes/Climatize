import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCity } from "@/pages/api/hello";

export function Clima() {
  const [racity, setCity] = useState();
  const [cidade, setcidade] = useState<string>();
  const [garantia, setgarantia] = useState();

  function fazerCidade(event: any) {
    setcidade(event.target.value);
  }

  async function handleCity() {
    setgarantia((await getCity(cidade)).data);
    console.log(garantia);
  }

  useEffect(() => {
    handleCity;
  }, [fazerCidade]);

  return (
    <Box>
      <Flex>
        <Box>
          <Text fontFamily={"poppins"}>Clima: {}</Text>
          <Box w="50vw" h="40vh" bg="teal.200" borderRadius={20} boxShadow="lg">
            <Flex
              flexDir={"column"}
              h="80%"
              justify={"center"}
              align={"center"}
            >
              <img src="" />
              imagem aqui
              <Text>{racity}</Text>
            </Flex>
            <Flex w="30%" margin={"0 auto"} h="0%" align={"center"}>
              <FormControl>
                <Input
                  type="text"
                  name="cidade"
                  bg={"white"}
                  onChange={fazerCidade}
                />
                <Button onClick={handleCity}>enviar </Button>
              </FormControl>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
