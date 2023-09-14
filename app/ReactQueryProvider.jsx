"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, StyledEngineProvider } from "@mui/material/styles";
import { Global, css } from "@emotion/react";

const fonts = {
  fontFamily: "Questrial, sans-serif",
};

const theme = createTheme({
  typography: {
    fontFamily: "Questrial, sans-serif",
  },
});

const queryClient = new QueryClient();
export const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
          `}
        />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};
