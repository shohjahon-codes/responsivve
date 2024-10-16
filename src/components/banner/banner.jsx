import { Box, Container, Stack } from "@mui/material";
import banner from "../../assets/banner.png";
import React from "react";
import { theme } from "../../config/mui-config";
import styled from "@emotion/styled";
import { SecondaryButton } from "../secondary-button/secondary-button";

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 130%;
  color: #f9f9f9;
  max-width: 524px;
  margin-bottom: 32px;
`;

export const Banner = () => {
  return (
    <Box py={"97px"} bgcolor={theme.palette.primary.main}>
      <Container maxWidth={"xs"}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Box>
            <Title>Новая коллекция ковров Venetta</Title>
            <SecondaryButton
              sx={{ display: { xs: "none", md: "inline-block" } }}
            >
              Смотреть все
            </SecondaryButton>
          </Box>
          <Stack gap={`40px`} direction={"row"}>
            <Box maxWidth={"303px"}>
              <img src={banner} alt="img" />
            </Box>
            <Box maxWidth={"303px"}>
              <img src={banner} alt="img" />
            </Box>
          </Stack>
          <SecondaryButton sx={{ display: { xs: "inline-block", md: "none" } }}>
            Смотреть все
          </SecondaryButton>
        </Stack>
      </Container>
    </Box>
  );
};
