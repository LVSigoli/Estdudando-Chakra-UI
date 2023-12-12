import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize={"1.2em"} spacing={4}>
      <ListItem>
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>{" "}
      <ListItem>
        <NavLink to="/create">New Task</NavLink>
      </ListItem>{" "}
      <ListItem>
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
}
