import { Box } from "@mui/material";

import { Header, Trending, Deals, Popular, Sale, Blog } from "./index";

const Feed = () => {
  return (
    <Box sx={{ bgcolor: "lightblue" }}>
      <Header />
      <Trending />
      <Deals />
      <Popular />
      <Sale />
      <Blog />
    </Box>
  );
};

export default Feed;
