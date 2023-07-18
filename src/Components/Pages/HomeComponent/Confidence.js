import React from "react";
import { ProductState } from "../ContextPage/Context";
import { Box, Container, Typography } from "@mui/material";

const Confidence = () => {
  const {
    state: { confidence },
  } = ProductState();
  console.log(confidence);
  return (
    <div
      style={{
        background: "#f6f2ef",
        paddingTop: "3%",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          fontSize: {
            xs: "33px",
            md: "40px",
          },
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        Buy with Confidence
      </Typography>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {confidence.map((x) => {
            return (
              <Box
                key={x.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    xs: "space-between",
                  },
                  width: {
                    xs: "45%",
                    md: "22%",
                  },
                }}
              >
                <div
                  style={{
                    fontSize: "25px",
                    width: {
                      xs: "25%",
                      md: "20%",
                    },
                  }}
                >
                  {x.image}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "70%",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      width: "100%",
                      fontWeight: "700",
                      fontSize: {
                        md: "20px",
                        xs: "18px",
                      },
                    }}
                  >
                    {x.name}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    {x.writeup}
                  </Typography>
                </div>
              </Box>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Confidence;
