/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointsName) => css`
      @media screen and (min-width:${breakpoints[breakpointsName]}px){
        ${cssByBreakpoints[breakpointsName]};
      }
    `);
}
