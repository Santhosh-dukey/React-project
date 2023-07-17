import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LevelLogoActive({ level }) {
  return (
    <>
      <Stack direction={"column"} sx={{ width: "110px", gap: 2, cursor: "pointer",}}>
        <Box 
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "5px",
            justifyContent: "center",
            bgcolor: "#ffb3ff",
            width: "100%",
            borderRadius: "50%"
          }}
        >
          <Image src={require("../assests/LevelLogoActive.png")} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "#39275",
            justifyContent: "center",
          }}
        >
          <Typography>{level}</Typography>
        </Box>
      </Stack>
    </>
  );
}
