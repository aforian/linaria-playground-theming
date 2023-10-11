import { css } from "linaria";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, themes } from "./themes";
import ContextWithStyled from './context-with-styled';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ContextWithStyled />
      </div>
    </ThemeProvider>
  );
};

export default App;
