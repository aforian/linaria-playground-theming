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

const SecondaryText = withTheme(styled(PrimaryText)`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
`)

const Box = withTheme(styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${(props) => props.recSize}px;
  width: ${(props) => props.recSize}px;
  color: ${({ theme }) => theme.colors.background};
`);

function App() {
  const { theme, updateTheme } = useTheme();
  const nextTheme = theme.name === 'light' ? 'dark' : 'light';
  const [recSize, setSize] = React.useState(48);

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
