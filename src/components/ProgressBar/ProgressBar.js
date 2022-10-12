/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES_STYLES = {
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
    "--padding": "0",
  },
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--padding": "0",
  },
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);

  padding: var(--padding);
  border-radius: var(--border-radius);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressMask = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;

  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const sizeVariables = SIZES_STYLES[size];
  const cappedValue = value < 0 ? 0 : value > 100 ? 100 : value;

  return (
    <Wrapper
      style={sizeVariables}
      role="progressbar"
      aria-valuenow={cappedValue}
    >
      <VisuallyHidden>Progress: {cappedValue}%</VisuallyHidden>
      <ProgressMask>
        <Progress value={value} />
      </ProgressMask>
    </Wrapper>
  );
};

export default ProgressBar;
