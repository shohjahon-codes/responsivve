import React from "react";
import { SecondaryButton as StyledSecondaryButton } from "./style";

export const SecondaryButton = ({
  children,
  onClick,
  type = "button",
  ...res
}) => {
  return (
    <StyledSecondaryButton {...res} type={type} onClick={onClick}>
      {children}
    </StyledSecondaryButton>
  );
};
