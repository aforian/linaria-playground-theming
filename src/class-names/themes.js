export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: 'navy',
      background: 'lightgrey',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      primary: 'lightskyblue',
      background: 'black',
    },
  },
};

export const theming = cb =>
  Object.keys(themes).reduce((acc, name) => Object.assign(acc, {
    [`.theme-${name} &`]: cb(themes[name]),
  }), {});