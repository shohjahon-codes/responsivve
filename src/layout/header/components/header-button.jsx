import { IconButton, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { UserIcon } from "../../../assets/icons/user-icon";
import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";

const CustomIconButton = styled(IconButton)`
  color: #1d1d1d;
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const HeaderButton = () => {
  return (
    <Stack direction={"row"} gap={"20px"}>
      <CustomIconButton>
        <UserIcon />
      </CustomIconButton>
      <CustomIconButton>
        <UserIcon />
      </CustomIconButton>
      <CustomIconButton>
        <UserIcon />
      </CustomIconButton>
    </Stack>
  );
};
