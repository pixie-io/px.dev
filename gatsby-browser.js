import { createMuiTheme } from '@material-ui/core';

const React = require('react');
const { MuiThemeProvider } = require('@material-ui/core/styles');

const theme = createMuiTheme({});

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <MuiThemeProvider theme={theme}>
    {element}
  </MuiThemeProvider>
);

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);
  return false;
};
