import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth={"270px"}>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderRadius={"16px"} borderTop={"8px"} borderColor={"blueviolet"} bg={"white"}>
            <CardHeader>
              <Flex>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Spacer />
                <Box>
                  {" "}
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by:{task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <Divider borderColor={"gray.200"}></Divider>
            <CardBody>
              <Text color={"gray.500"}>{task.description}</Text>
            </CardBody>
            <Divider borderColor={"gray.200"}></Divider>
            <CardFooter>
              <HStack>
                <Button variant={"ghost"} leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
