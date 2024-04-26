import { Box, Stack, Typography } from "@mui/material";

import two_phone from "../utilities/image/two_phone.png";

const Sale = () => {
  return (
    <Box sx={{ bgcolor: "white", height: "70vh", pt: "2%" }}>
      <Box sx={{ bgcolor: "#EEEEEE", borderRadius: "10px", height: "50vh" }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column" sx={{ pl: "5%", pt: "7%" }}>
            <Typography variant="h6" fontWeight={400}>
              GALAXY SALE IS LIVE NOW
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              GALAXY S24 | S24+
            </Typography>
            <Typography variant="subtitle1" fontWeight={300}>
              Get up to $1,000 in trade-in credit from participating <br />{" "}
              carriers. Terms apply.
            </Typography>
          </Stack>
          <img src={two_phone} height={500} style={{ marginTop: "-30px" }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Sale;
