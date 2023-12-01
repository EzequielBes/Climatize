import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box w="100vw" h="100vh">
      <Box w="80vw" margin="0 auto">
        <Flex h="15vh" w="100%" align={"center"}>
          <Text borderBottom={"1px solid black"}>Climatize</Text>
        </Flex>
      </Box>
    </Box>
  );
}
