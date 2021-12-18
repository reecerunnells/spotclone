import { ListItem, LinkBox, LinkOverlay, ListIcon } from "@chakra-ui/layout";
import NextLink from "next/link";

const MenuItem = ({ item }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" key={item.name}>
      <LinkBox>
        <NextLink href={item.route} passHref>
          <LinkOverlay>
            {item.icon && (
              <ListIcon as={item.icon} color="white" marginRight="20px" />
            )}
            {item.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
