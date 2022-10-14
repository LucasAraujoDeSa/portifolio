import React, { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface props {
  children?: ReactNode;
}

export const Container: React.FC<props> = ({ children }: props) => {
  return <StyledContainer>{children}</StyledContainer>;
};
