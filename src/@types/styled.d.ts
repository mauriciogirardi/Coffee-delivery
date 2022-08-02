import "styled-components";
import { lightTheme } from "../styles/themes/light";

type LightTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends LightTheme {}
}
