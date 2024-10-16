import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../config/mui-config";

export const LogoLink = styled(Link)`
  max-width: 100px;
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    max-width: 220px;
  }
`;
