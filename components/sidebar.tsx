import { Box, Divider } from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import AppLeftMenu from "./appLeftMenu";

const navMenuItems = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/music",
  },
];

const musicMenuItems = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/createPlaylist",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlistItems = new Array(20).fill(1).map((_, index) => {
  const name = `Test Playlist ${index + 1}`;
  const route = `/playlist/${name.toLowerCase().replaceAll(" ", "")}`;
  return {
    name,
    route,
  };
});

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <AppLeftMenu data={navMenuItems} />
        </Box>
        <Box marginY="20px">
          <AppLeftMenu data={musicMenuItems} />
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <AppLeftMenu data={playlistItems} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
