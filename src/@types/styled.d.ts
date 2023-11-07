import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;

      gray: string;

      blue1: string;
      blue2: string;
    };
    font_size: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
