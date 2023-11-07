import { css } from "styled-components";
import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 0.875rem;
  overflow: hidden;
  border-radius: 8px;
  width: calc(25% - 15px);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${props => css`
    @media (max-width: 768px) {
      width:  75%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width:  40%;
    }
  `}
`;

export const Image = styled.img`
  width: auto;
  height: 138px;
`;

export const Description = styled.div`
  font-weight: 400;
  margin-top: 15px;
  line-height: 1.2;
  display: flex;
  width: 100%;
  flex-flow: column;
  gap: 10px;
  padding: 0 1rem;
  height: 100%;

  h2 {
    font-weight: 400;
    font-size: 16px;
    width: 124px;
    height: 38px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  p {
    font-size: 10px;
    font-weight: 300;
  }
`;

export const Price = styled.h3`
  font-size: 15px;
  background-color: ${(props) => props.theme.color.gray};
  font-weight: bold;
  border-radius: 5px;
  color: ${(props) => props.theme.color.white};
  display: flex;
  height: 26px;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.color.blue1};
  padding: 7px;
  border: 0;
  color: ${(props) => props.theme.color.white};
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 14px;
  transition: all 0.2s;
  text-transform: uppercase;

  span {
    font-weight: 600;
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.blue2};
  }
`;
