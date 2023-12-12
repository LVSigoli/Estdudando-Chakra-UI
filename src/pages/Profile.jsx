import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { warning } from "framer-motion";

export default function Profile() {
  return (
    <Tabs mt={"40px"} p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.200" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.200" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon}></ListIcon>
              Email: MyEmail@mailto.com
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={ChatIcon}></ListIcon>
              Lorem ipsum dolor sit amet consectetur,
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={StarIcon}></ListIcon>
              Lorem ipsum dolor sit amet consectetur,
            </ListItem>
          </List>
        </TabPanel>{" "}
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>{" "}
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>{" "}
          <List>
            <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>{" "}
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>{" "}
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>{" "}
          <List>
            <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>{" "}
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
