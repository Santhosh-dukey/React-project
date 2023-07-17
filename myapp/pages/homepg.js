import React, { useContext } from "react";
import LevelLogoActive from "@/components/LevelLogoActive";
import LevelLogoNonActive from "@/components/LevelLogoNonActive";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import { MyContext } from "@/context/MyContext";



export default function Homepg() {
  const { levelUp } = useContext(MyContext);
  const router = useRouter();
  return (
    <>
      <Layout>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            margin: "auto",
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              bgcolor: "#fff",
              alignItems: "center",
            }}
          >
            {/* --------- Level 1 start --------- */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                onClick={() => {
                  router.push("/gamingpg");
                }}
              >
                <LevelLogoActive level={"Level 1"} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "160px",
                  // bgcolor: "palegreen",
                  borderTop: "2px black dashed",
                  borderRight: "2px black dashed",
                  marginTop: "50px",
                }}
              ></Box>
            </Box>
            {/* --------- Level 2 start --------- */}
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "160px",
                  // bgcolor: "palegreen",
                  borderTop: "2px black dashed",
                  borderLeft: "2px black dashed",
                  marginTop: "50px",
                  marginLeft: "100px",
                }}
              ></Box>
              <Box
                onClick={() => {
                  router.push("/gamingpg");
                }}
              >
                {levelUp ? (
                  <LevelLogoActive level={"Level 2"} />
                ) : (
                  <LevelLogoNonActive level={"Level 2"} />
                )}
              </Box>
            </Box>

            {/* --------- Level 3 start --------- */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
               
              >
                {"2"===levelUp ? (
                  <LevelLogoActive level={"Level 3"} />
                ) : (
                  <LevelLogoNonActive level={"Level 3"} />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "160px",
                  // bgcolor: "palegreen",
                  borderTop: "2px black dashed",
                  borderRight: "2px black dashed",
                  marginTop: "50px",
                }}
              ></Box>
            </Box>
            {/* --------- Level 4 start --------- */}

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "160px",
                  // bgcolor: "palegreen",
                  borderTop: "2px black dashed",
                  borderLeft: "2px black dashed",
                  marginTop: "50px",
                  marginLeft: "100px",
                }}
              ></Box>
              <Box
               
              >
                {"3"===levelUp ? (
                  <LevelLogoActive level={"Level 4"} />
                ) : (
                  <LevelLogoNonActive level={"Level 4"} />
                )}
              </Box>
            </Box>

            {/* --------- Level 5 start --------- */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
               
              >
                {"4"===levelUp ? (
                  <LevelLogoActive level={"Level 5"} />
                ) : (
                  <LevelLogoNonActive level={"Level 5"} />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "160px",
                  // bgcolor: "palegreen",
                  borderTop: "2px black dashed",
                  borderRight: "2px black dashed",
                  marginTop: "50px",
                }}
              ></Box>
            </Box>
          </Box>
        </Stack>
      </Layout>
    </>
  );
}

