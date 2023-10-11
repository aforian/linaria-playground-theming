import * as React from 'react';
import { styled } from '@linaria/react';
import { themes, useTheme, withTheme } from '../themes';

const Title = withTheme(styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`);

const PrimaryText = withTheme(styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`);

function App() {
  const { theme, updateTheme } = useTheme();
  const nextTheme = theme.name === 'light' ? 'dark' : 'light';

  return (
    <div>
      <button onClick={() => updateTheme(nextTheme)}>
        Change to {nextTheme} mode
      </button>
      <div>
        <Title>React Context with styled</Title>
        <PrimaryText>
          This text is the primary color
        </PrimaryText>
      </div>
    </div>
  )
}

export default App;
