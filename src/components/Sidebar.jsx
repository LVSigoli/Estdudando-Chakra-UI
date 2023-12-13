import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Heading, Spacer, flexbox, Center } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Heading as="h3" color={"white"} fontSize={"28px"} marginBottom={"20px"}>
        {" "}
        Chakra Tasks
      </Heading>

      <List
        color="white"
        fontSize={"1em"}
        spacing={{ base: 0, lg: 4, xl: 4 }}
        display={"flex"}
        flexDir={{ base: "row", lg: "column", xl: "column" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <ListItem>
          <NavLink to="/">
            <ListIcon as={CalendarIcon} color={"white"} />
            Dashboard
          </NavLink>
        </ListItem>{" "}
        <ListItem>
          <NavLink to="/create">
            <ListIcon as={EditIcon} color={"white"} />
            New Task
          </NavLink>
        </ListItem>{" "}
        <ListItem>
          <NavLink to="/profile">
            <ListIcon as={AtSignIcon} color={"white"} />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </>
  );
}
