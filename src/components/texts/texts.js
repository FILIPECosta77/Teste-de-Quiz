import styled, { css } from "styled-components";

export const StyledText = styled.h3`
  ${({ type }) => {
    switch (type) {
      case "01":
        return css`
          font-size: 1.5rem;
          font-weight: 700;
        `;
      case "02":
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
      default:
        return css`
          font-size: 1.5rem;
          font-weight: 700;
        `;
    }
  }}
`;
