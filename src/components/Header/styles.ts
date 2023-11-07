import { css } from "styled-components";
import { styled } from "styled-components";

export const Head = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.color.blue1};
  display: flex;
  padding: 28px 65px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${(props) => props.theme.color.white};

  ${props => css`
    padding: 1rem 2rem;
  `}
`;

export const Logo = styled.div`
  display: flex;
  gap: 5px;
  cursor: default;

  ${(props) => css`
    @media (max-width: 1024px) {
      align-items: center;
    }
  `}

  h1 {
    font-weight: 600;
    font-size: 40px;

    ${(props) => css`
      @media (max-width: 1024px) {
        font-size: 32px;
      }
    `}
  }
  p {
    margin-top: 17.5px;
    font-size: 20px;

    ${(props) => css`
      @media (max-width: 1024px) {
        font-size: 16px;
        margin-top: 0;
      }
    `}
  }
`;

export const Carrinho = styled.button`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  gap: 15px;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 0;
  transition: all 0.2s;

  p {
    color: ${(props) => props.theme.color.black};
    font-weight: bold;
    font-size: ${(props) => props.theme.font_size.lg};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
