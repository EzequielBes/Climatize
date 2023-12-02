import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCity } from "@/pages/api/hello";
import { setConfig } from "next/config";

export function Clima() {
  const [racity, setCity] = useState();
  const [cidade, setcidade] = useState("");
  const [garantia, setgarantia] = useState();

  const [cityName, setCityName] = useState("...");
  const [cityTemp, setTempCity] = useState();
  const [cityDesc, setCityDesc] = useState();
  const [iconPadrao, setIconPadrao] = useState();

  const [sendConfi, setSendConf] = useState(false);

  function fazerCidade(event: any) {
    setcidade(event.target.value);
  }

  async function handleCity() {
    if (await getCity(cidade)) {
      setConfig(true);
      setgarantia((await getCity(cidade)).data);
      if (garantia !== undefined) {
        setCityName(garantia.name);
        setTempCity(garantia.main.temp);
        setCityDesc(garantia.weather[0].description);
        setIconPadrao(garantia.weather[0].icon);
      }
    }
  }

  return (
    <Box>
      <Flex>
        <Box>
          <Text fontFamily={"poppins"}>Clima: {cityName} </Text>
          <Box w="50vw" h="40vh" bg="teal.200" borderRadius={20} boxShadow="lg">
            <Flex
              flexDir={"column"}
              h="80%"
              justify={"center"}
              align={"center"}
            >
              <Text fontFamily={"poppins"} fontSize={30}>
                {Math.round(cityTemp / 10)} graus
              </Text>
              <Text fontSize={14} fontFamily={"poppins"}>
                Descrição:{cityDesc}{" "}
              </Text>
              <img src={`http://openweathermap.org/img/wn/${iconPadrao}.png`} />
            </Flex>

            <Flex w="30%" margin={"0 auto"} h="0%" align={"center"}>
              <FormControl display={"flex"}>
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
