import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export function Clima() {
  const [city, setCity] = useState("Sp");

  return (
    <Box>
      <Flex>
        <Box>
          <Text>Clima: {city}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
