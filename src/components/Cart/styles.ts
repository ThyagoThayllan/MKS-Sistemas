import { css, styled } from "styled-components";

export const Container = styled.div`
  height: 95vh;
  width: 400px;
  background-color: ${(props) => props.theme.color.blue1};
  position: fixed;
  right: 0;
  top: 0;
  border: 2px solid ${(props) => props.theme.color.black};
  margin-right: -6px;
  border-radius: 8px;
  overflow: hidden;

  ${css`
    @media (max-width: 1024px) {
      width: 75%;
    }
  `}
`;

export const Bag = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-size: 25px;

    ${css`
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    `}
  }

  button {
    background-color: ${(props) => props.theme.color.black};
    border: 0;
    color: ${(props) => props.theme.color.white};
    align-self: center;
    padding: 0.5rem 0.75rem;
    font-weight: bold;
    border-radius: 50%;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const Selecionados = styled.div`
  width: 100%;
  min-height: 350px;
  max-height: 350px;
  display: flex;
  flex-flow: column;
  gap: 10px;
  overflow-y: auto;
  padding-top: 10px;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
  }
`;

export const Total = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: absolute;
  bottom: 0;
  padding-bottom: 105px;

  ${css`
    @media (max-width: 1024px) {
      margin-bottom: -20px;
    }
  `}

  h1 {
    font-size: 28px;

    ${css`
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    `}
  }

  span {
    font-weight: 700;
    font-size: 28px;

    ${css`
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    `}
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  background-color: ${(props) => props.theme.color.black};
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 0;
  transition: all 0.2s;

  ${css`
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  `}

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
