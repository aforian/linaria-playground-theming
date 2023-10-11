import { css } from "linaria";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import CSSVars from './css-vars';
import ClassNamesApp from './class-names';
import ReactContext from './react-context';

const App = () => {
  return (
    <div>
      <CSSVars />
      <hr />
      <ClassNamesApp />
      <hr />
      <ReactContext />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
