import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export const btn_styles = {
  bg: "purple.400",
  color: "white",
  ":hover": {
    bg: "purple.200",
  },
};

export default function NavBar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully loged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };
  return (
    <Flex as="nav" p="10px" alignItems={"center"} mb={"50px"}>
      {"  "}
      <Spacer />

      <HStack spacing={"20px"}>
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@petads.dev.edu.br</Text>
        <Button onClick={showToast} sx={btn_styles}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
