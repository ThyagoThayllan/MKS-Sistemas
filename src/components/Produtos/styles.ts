import { styled, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  gap: 15px;
  flex-wrap: wrap;

  ${css`
    @media (max-width: 1024px) {
      width: 100%;
    }
  `}
`;
