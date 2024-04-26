import {
  AppBar,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";

import styled from "@emotion/styled";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: "none", backgroundColor: "white" }}
    >
      <StyledToolbar>
        <Link href="/" sx={{ textDecoration: "none", pl: "5%" }}>
          <Typography variant="h5" fontWeight="bold" color="black">
            ShopVerse
          </Typography>
        </Link>

        <List>
          <ListItem sx={{ gap: "80px" }}>
            <ListItemText>
              <Link href="#about" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="black">
                  About
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link href="#shop" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="black">
                  Shop
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link href="#category" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="black">
                  Categories
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link href="#help" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="black">
                  Help
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
        </List>

        <List>
          <ListItem sx={{ gap: "20px", pr: "17%" }}>
            <InputBase
              placeholder="Search for 'Phones' "
              sx={{
                width: "250px",
                height: "40px",
                backgroundColor: "#D9D9D9",
                p: "3%",
                px: "20px",
                borderRadius: "20px",
              }}
            />
            <IconButton>
              <FavoriteBorderIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton>
              <ShoppingBagIcon sx={{ color: "black" }} />
            </IconButton>
          </ListItem>
        </List>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
