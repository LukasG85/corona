import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import CountrySelector from "./components/CountrySelector";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GetImage } from "./components/GetImage";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <GetImage />
      <CountrySelector />
    </div>
  );
}

export default App;
