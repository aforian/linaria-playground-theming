import * as React from 'react';
import { css } from '@linaria/core';

const themeLight = css`
  --colors-primary: navy;
  --colors-background: lightgrey;
`;

const themeDark = css`
  --colors-primary: lightskyblue;
  --colors-background: black;
`;

const styleTitle = css`
  font-family: sans-serif;
  font-size: 48px;
  color: var(--colors-primary);
`;

const stylePrimaryText = css`
  padding: 20px;
  color: var(--colors-primary);
  background-color: var(--colors-background);
`;

function App() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <div>
      <button onClick={() => setTheme(nextTheme)}>
        Change to {nextTheme} mode
      </button>
      <div className={theme === 'light' ? themeLight : themeDark}>
        <h1 className={styleTitle}>CSS Variables only</h1>
        <div className={stylePrimaryText}>
          This text is the primary color
        </div>
      </div>
    </div>
  )
}

export default App;
