import { css } from "styled-components";
import { styled } from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  border-radius: 8px;
  font-size: 0.75rem;

  ${css`
    @media (max-width: 1024px) {
      flex-flow: column;
      padding-bottom: 2.5rem;
    }
  `}
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;

  ${css`
    width: 75px;
    height: 75px;
  `}
`;

export const Title = styled.div`
  width: 115px;
  font-size: 14px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;

  ${css`
    @media (max-width: 1024px) {
      font-size: 16px;
      width: 100%;
      text-align: center;
    }
  `}
`;

export const Quantidade = styled.div`
  flex: 1;
  text-align: center;

  ${css`
    @media (max-width: 1024px) {
    }
  `}

  p {
    font-size: 10px;

    ${css`
      @media (max-width: 1024px) {
        display: none;
      }
    `}
  }
  span {
    font-size: 15px;
    position: relative;
    display: flex;
    gap: 5px;

    ${css`
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        position: absolute;
        bottom: 15px;
        left: 30px;
        line-height: 1.3;
      }
    `}
  }
`;

export const Price = styled.div`
  font-size: 15px;
  font-weight: bold;
  flex: 1;
  text-align: center;

  ${css`
    @media (max-width: 1024px) {
      line-height: 1;
      position: absolute;
      bottom: 15px;
      right: 30px;
      background-color: ${(props) => props.theme.color.gray};
      color: ${(props) => props.theme.color.white};
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
    }
  `}
`;

export const Sub = styled.button`
  background: transparent;
  border: 0;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
export const Som = styled.button`
  background: transparent;
  border: 0;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const X = styled.button`
  position: absolute;
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  align-self: center;
  padding: 0.25rem;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  right: 0;
  margin-right: -5px;
  margin-top: -80px;
  border: 0;

  ${css`
    margin-right: 0;
    margin-top: 0;
    top: 0;
    right: 5px;
    font-size: 25px;
    text-transform: lowercase;
    color: ${(props) => props.theme.color.black};
    background-color: transparent;
  `}

  &:hover {
    cursor: pointer;
  }
`;
