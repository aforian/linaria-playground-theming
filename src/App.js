import { css } from "linaria";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import CSSVars from './css-vars';
import ReactContext from './react-context';

const App = () => {
  return (
    <div>
      <CSSVars />
      <ReactContext />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
