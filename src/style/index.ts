/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
