import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const WRAPPER_SIZE_STYLES = {
  small: {
    "--border-width": "1px",
    "--font-size": `${14 / 16}rem`,
  },
  large: {
    "--border-width": "2px",
    "--font-size": `${21 / 16}rem`,
  },
};

const INPUT_SIZE_STYLES = {
  small: {
    "--padding": "4px 0 4px 24px",
  },
  large: {
    "--padding": "8px 0 8px 32px",
  },
};

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width}px;

  border-bottom: var(--border-width) solid ${COLORS.black};
  font-size: var(--font-size);

  &:focus-within {
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  pointer-events: none;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: ${(props) => props.size};
`;

const StyledInput = styled.input`
  padding: var(--padding);
  font-size: inherit;
  border: none;

  color: inherit;
  font-weight: 700;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  :focus {
    outline: none;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const wrapperSizeVariables = WRAPPER_SIZE_STYLES[size];
  const inputSizeVariables = INPUT_SIZE_STYLES[size];

  return (
    <Wrapper width={width} style={wrapperSizeVariables}>
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
      />
    </Wrapper>
  );
};

export default IconInput;
