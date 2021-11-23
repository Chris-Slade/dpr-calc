import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Router } from "@reach/router";
import { addPrefetchExcludes, Head, Root, Routes } from "react-static";
import "./app.css";
import theme from "./theme";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Head>
        <title>DPR Calculator</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router type="hash">
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </ThemeProvider>
    </Root>
  );
}

export default App;
