import { List } from "@chakra-ui/layout";
import MenuItem from "./menuItem";

const AppLeftMenu = ({ data }) => {
  return (
    <List spacing={2}>
      {data.map((item) => (
        <MenuItem item={item} />
      ))}
    </List>
  );
};

export default AppLeftMenu;
