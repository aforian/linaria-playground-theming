
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { styled } from '@linaria/react';

import { theming } from './themes';
import { css } from '@linaria/core';

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;

  ${theming(theme => ({
    color: theme.colors.primary,
  }))};
`;

const title2 = css`
  font-family: sans-serif;
  font-size: 48px;

  ${theming(theme => ({
    color: theme.colors.primary,
  }))};
`;

const PrimaryText = styled.div`
  padding: 20px;

  ${theming(theme => ({
    color: theme.colors.primary,
    backgroundColor: theme.colors.background,
  }))};
`;

const SecondaryText = styled(PrimaryText)`
  ${theming(theme => ({
    color: theme.colors.background,
    backgroundColor: theme.colors.primary,
  }))};
`;

const Box = styled.div`
  height: ${(props) => props.recSize}px;
  width: ${(props) => props.recSize}px;

  ${theming(theme => ({
    backgroundColor: theme.colors.primary,
  }))};
`;

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const [recSize, setSize] = React.useState(48);

  return (
    <div className={`class-name-theme ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      <button onClick={() => setTheme(nextTheme)}>
        Change to {nextTheme} mode
      </button>
      <Title>Class Names</Title>
      <h1 className={title2}>Class Names</h1>
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
  );
};

export default App;
