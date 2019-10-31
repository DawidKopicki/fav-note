import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

configure(require.context('../src', true, /\.stories\.js$/), module);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
