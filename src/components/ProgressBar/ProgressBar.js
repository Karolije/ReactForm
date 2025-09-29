import React from "react";
import { Wrapper, Filler } from "./ProgressBar.styled";

const ProgressBar = ({ percent }) => (
  <Wrapper>
    <Filler percent={percent} />
  </Wrapper>
);

export default ProgressBar;
