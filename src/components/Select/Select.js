import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;

  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;

const NativeSelect = styled.select`
  position: absolute;

  width: 100%;
  height: 100%;
  opacity: 0;
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: 8px 10px 8px 16px;

  background-color: ${COLORS.transparentGray15};
  color: inherit;

  font-size: ${16 / 16}rem;
  line-height: 19px;
`;

const StyledIcon = styled(Icon)`
  margin-left: 10px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <StyledIcon id="chevron-down" />
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
