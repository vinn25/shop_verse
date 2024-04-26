import { Box } from "@mui/material";

import { Navbar, Feed, Footer } from "./components/index";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box px={10}>
        <Feed />
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
