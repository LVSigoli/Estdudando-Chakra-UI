import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

const btn_styles = {
  bg: "purple.400",
  color: "white",
  ":hover": {
    bg: "purple.200",
  },
};

export default function NavBar() {
  return (
    <Flex as="nav" p="10px" alignItems={"center"} mb={"50px"}>
      {"  "}
      <Spacer />

      <HStack spacing={"20px"}>
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@petads.dev.edu.br</Text>
        <Button sx={btn_styles}>Logout</Button>
      </HStack>
    </Flex>
  );
}
