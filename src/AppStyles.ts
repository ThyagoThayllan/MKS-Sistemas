import { styled, createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        
        ${(props) => css`
          @media (max-width: 1024px) {
            font-size: 0.875rem;
          }
        `}
    }
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${(props) => props.theme.color.white};
    }
    body, button, input, span, h1, h2, h3 {
        font-size: 1rem;
    }
`;

export const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.color.white};

  ${(props) => css`
    @media (max-width: 1024px) {
      height: 100%;
    }
  `}
`;