import * as React from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

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

const PrimaryText = styled.div`
  padding: 20px;
  color: var(--colors-primary);
  background-color: var(--colors-background);
`;

const SecondaryText = styled(PrimaryText)`
  padding: 20px;
  color: var(--colors-background);
  background-color: var(--colors-primary);
`;

const Box = styled.div`
  background-color: var(--colors-primary);
  height: ${(props) => props.recSize}px;
  width: ${(props) => props.recSize}px;
`;

function App() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const [recSize, setSize] = React.useState(48);

  return (
    <div>
      <button onClick={() => setTheme(nextTheme)}>
        Change to {nextTheme} mode
      </button>
      <div className={theme === 'light' ? themeLight : themeDark}>
        <h1 className={styleTitle}>CSS Variables mixed</h1>
        <PrimaryText>
          This text is the primary color
        </PrimaryText>
        <SecondaryText>
          This text is the secondary color
        </SecondaryText>
        <button
          onClick={() => {
            setSize((prev) => prev + 5);
          }}
        >
          +1 Size
        </button>
        <Box recSize={recSize}>{recSize}</Box>
      </div>
    </div>
  )
}

export default App;
