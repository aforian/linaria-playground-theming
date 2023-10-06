import * as React from 'react'
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

const themeLight = css`
  /* --colors-primary: navy; */
  --colors-primary: deeppink;
  --colors-background: lightgrey;
`;

const themeDark = css`
  /* --colors-primary: lightskyblue; */
  --colors-primary: lightpink;
  --colors-background: black;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: var(--colors-primary);
`;

const PrimaryText = styled.div`
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
        <Title>Theme provider test</Title>
        <PrimaryText>This text is the primary color</PrimaryText>
      </div>
    </div>
  )
}

export default App
