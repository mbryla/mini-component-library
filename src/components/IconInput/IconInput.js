import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const WRAPPER_SIZE_STYLES = {
  small: {
    "--font-size": `${14 / 16}rem`,
  },
  large: {
    "--font-size": `${21 / 16}rem`,
  },
};

const INPUT_SIZE_STYLES = {
  small: {
    "--border-width": "1px",
    "--padding": "4px 0 4px 24px",
  },
  large: {
    "--border-width": "2px",
    "--padding": "8px 0 8px 36px",
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;

  font-size: var(--font-size);
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  width: ${(props) => props.size};

  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`;

const StyledInput = styled.input`
  width: ${(props) => props.width}px;
  padding: var(--padding);

  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  outline-offset: 2px;

  color: inherit;
  font-weight: 700;
  font-size: inherit;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const wrapperSizeVariables = WRAPPER_SIZE_STYLES[size];
  const inputSizeVariables = INPUT_SIZE_STYLES[size];

  return (
    <Wrapper style={wrapperSizeVariables}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon
        id={icon}
        strokeWidth={size === "small" ? 1 : 2}
        size={size === "small" ? 14 : 18}
      />
      <StyledInput
        type="text"
        placeholder={placeholder}
        style={inputSizeVariables}
        width={width}
      />
    </Wrapper>
  );
};

export default IconInput;
