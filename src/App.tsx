import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Providers } from "./context";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme } from "./styles/themes/light";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Providers>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Providers>
      <GlobalStyles />
    </ThemeProvider>
  );
}
