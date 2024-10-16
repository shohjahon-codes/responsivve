import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Rating, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../data/product-data";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  background: #fff;
  position: relative;
  width: 100%;
  img {
    border-radius: 10px;
  }
  div {
    div {
      display: flex;
      gap: 10px;
     
    }
  }
  b {
    color: #618c78;
    font-size: 36px;
  }
`;

export const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  return (
    <Container>
      <CardWrapper>
        <div>
          <h1>{product.title}</h1>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"8px"}
            mb={"20px"}
          >
            <Rating value={product.raiting} precision={0.5} />
          </Stack>
          <Box display={"flex"} gap={"20px"}>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <img width={"180px"} height={"200px"} src={product.img} alt="" />
              <img width={"180px"} height={"200px"} src={product.img} alt="" />
              <img width={"180px"} height={"200px"} src={product.img} alt="" />
            </Box>
            <img width={"600px"} height={"620px"} src={product.img} alt="" />

            <Box>
              <div>
                <span>
                  <p>Цена:</p>
                  <b>{product.price}T</b>
                  <p>
                    <span>Размер: </span>
                    {product.size}sm
                  </p>
                  <Link>Перейти к описанию</Link>
                </span>
                <span>
                  <p>В рассрочку</p>
                  <b>{product.instalment.price}T</b>
                  <p>
                    <span>Размер: </span>
                    {product.size}sm
                  </p>
                  <Link>Подробнее о рассрочке</Link>
                </span>
              </div>
            </Box>
          </Box>
        </div>
      </CardWrapper>
    </Container>
  );
};
