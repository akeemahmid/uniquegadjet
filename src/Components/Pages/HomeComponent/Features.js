import React from "react";
import { Container, Box } from "@mui/material";
import { ProductState } from "../ContextPage/Context";
import { useState, useEffect } from "react";
const Features = () => {
  const {
    state: { featuresArray },
  } = ProductState();

  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(2);
  const [items, setItems] = useState(featuresArray);

  const fetchItems = () => {
    setItems(featuresArray);
    setLoading(false);
  };
  useEffect(() => {
    fetchItems();
  }, [value]);
  console.log(fetchItems);
  if (loading) {
    <h2>loading</h2>;
  } else {
    const { head, writeup, image, id } = items[value];
    console.log(writeup);
    return (
      <div
        style={{
          marginTop: "3%",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: " center",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              key={id}
              sx={{
                width: {
                  xs: "100%",
                  md: "45%",
                },
                overflow: "hidden",
                height: {
                  xs: "350px",
                  md: "350px",
                },
                borderRadius: "15px",
              }}
              className="down"
            >
              <img
                src={image}
                alt={head}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                textAlign: "left",
                width: {
                  xs: "100%",
                  md: "50%",
                },
              }}
            >
              {items.map((item, index) => {
                return (
                  <div
                    className={`features ${index === value && "active"}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      textAlign: "left",
                    }}
                    onClick={() => {
                      setValue(index);
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        marginBottom: "3%",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontWeight: "500",
                          fontSize: "20px",
                        }}
                      >
                        {item.numbers}
                      </span>
                      &nbsp; &nbsp;
                      <p
                        style={{
                          display: "inline-block",
                          fontWeight: "600",
                          fontSize: "25px",
                        }}
                      >
                        {" "}
                        {item.head}
                      </p>
                    </div>

                    <div
                      className="writeup"
                      style={{
                        textAlign: "center",
                        marginBottom: "2%",
                      }}
                    >
                      {item.writeup}
                    </div>
                  </div>
                );
              })}
            </Box>
          </Box>
        </Container>
      </div>
    );
  }
};

export default Features;
