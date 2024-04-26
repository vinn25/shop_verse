import { Box, Fab, Link, Stack, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box pb={5} sx={{ bgcolor: "white" }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column" spacing={5}>
          <Typography variant="h4" fontWeight={600}>
            ShopVerse
          </Typography>
          <Typography variant="subtitle2">
            @ 2024 Shopverse All Rights Reserved
          </Typography>
          <Stack direction="row" spacing={2}>
            <Fab
              color="grey"
              aria-label="add"
              sx={{
                "&:hover": { backgroundColor: "#FF6347", color: "white" },
              }}
              disableRipple
            >
              <FacebookIcon />
            </Fab>
            <Fab
              color="grey"
              aria-label="add"
              sx={{ "&:hover": { backgroundColor: "#FF6347", color: "white" } }}
              disableRipple
            >
              <InstagramIcon />
            </Fab>
            <Fab
              color="grey"
              aria-label="add"
              sx={{ "&:hover": { backgroundColor: "#FF6347", color: "white" } }}
              disableRipple
            >
              <XIcon />
            </Fab>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={10}>
          <Stack direction="column" textAlign="right">
            <Link
              href="#download"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Download
              </Typography>
            </Link>
            <Link
              href="#windows"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Windows
              </Typography>
            </Link>
            <Link
              href="#mac os"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Mac OS
              </Typography>
            </Link>
            <Link
              href="#android"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Android
              </Typography>
            </Link>
            <Link href="#ios" sx={{ textDecoration: "none", color: "black" }}>
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                iOS
              </Typography>
            </Link>
          </Stack>
          <Stack direction="column" textAlign="right">
            <Link
              href="#resources"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Resources
              </Typography>
            </Link>
            <Link href="#about" sx={{ textDecoration: "none", color: "black" }}>
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                About
              </Typography>
            </Link>
            <Link href="#shop" sx={{ textDecoration: "none", color: "black" }}>
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Shop
              </Typography>
            </Link>
            <Link
              href="#categories"
              sx={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Categories
              </Typography>
            </Link>
            <Link href="#help" sx={{ textDecoration: "none", color: "black" }}>
              <Typography
                variant="h6"
                fontWeight={300}
                sx={{ "&:hover": { fontWeight: "400" } }}
              >
                Help
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
