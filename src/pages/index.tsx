import { FaCloudMoonRain } from "react-icons/fa6";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Clima } from "@/components/Clima";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box w="100vw" h="100vh">
      <Box w="80vw" margin="0 auto">
        <Flex h="15vh" w="100%" align={"center"}>
          <Text borderBottom={"1px solid black"}>Climatize</Text>
          <Icon
            color={"yellow"}
            ml="10"
            fontSize={24}
            justifyContent={"center"}
          >
            <FaCloudMoonRain />
          </Icon>
        </Flex>
        <Clima />
      </Box>
    </Box>
  );
}
