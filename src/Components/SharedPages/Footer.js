import React from "react";
import { Box, Typography } from "@mui/material";
import { ProductState } from "../Pages/ContextPage/Context";
import Identity from "./Identity";

const Footer = () => {
  const {
    state: { footera, footerb, footerc, footerd },
  } = ProductState();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          border: "1px solid black",
          borderRight: "0",
          borderLeft: "0",
          flexWrap: "wrap",
          background: "#f6f2ef",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRight: {
              xs: "0",
              md: "1px solid black",
            },
            paddingLeft: "10px",
            width: {
              xs: "45%",
              md: "25%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              margin: "3% 0",
            }}
          >
            Shop
          </Typography>
          {footera.map((x) => (
            <Typography
              key={x.id}
              sx={{
                marginBottom: "1.5%",
              }}
            >
              {x.text}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRight: {
              xs: "0",
              md: "1px solid black",
            },
            paddingLeft: "10px",
            width: {
              xs: "45%",
              md: "25%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              margin: "3% 0",
            }}
          >
            Support
          </Typography>
          {footerb.map((x) => (
            <Typography
              key={x.id}
              sx={{
                marginBottom: "1.5%",
              }}
            >
              {x.text}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRight: {
              xs: "0",
              md: "1px solid black",
            },
            paddingLeft: "10px",
            width: {
              xs: "45%",
              md: "25%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              margin: "3% 0",
            }}
          >
            offers
          </Typography>
          {footerc.map((x) => (
            <Typography
              key={x.id}
              sx={{
                marginBottom: "1.5%",
              }}
            >
              {x.text}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",

            paddingLeft: "10px",
            width: {
              xs: "45%",
              md: "25%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              margin: "3% 0",
            }}
          >
            Sustainability
          </Typography>
          {footerd.map((x) => (
            <Typography
              key={x.id}
              sx={{
                marginBottom: "1.5%",
              }}
            >
              {x.text}
            </Typography>
          ))}
        </Box>
      </Box>

      <Identity />
    </div>
  );
};

export default Footer;
