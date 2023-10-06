import { css } from "linaria";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import CSSVarsWithStyledApp from './css-vars-with-styled';
import CSSVarsOnly from './css-vars-only';
import CSSVarsMixed from './css-vars-mixed';

const App = () => {
  return (
    <div>
      <CSSVarsOnly />
      <hr />
      <CSSVarsWithStyledApp />
      <hr />
      <CSSVarsMixed />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
