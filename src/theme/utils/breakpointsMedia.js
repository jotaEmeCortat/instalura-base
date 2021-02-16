import {breakpoints} from "../index";
import {css} from 'styled-components';

export function breakpointsMedia(cssByBreakpoints){
  const breakpointsNames = Object.keys(cssByBreakpoints);
  console.log(breakpointsNames)
  return breakpointsNames.map((breakpointsName)=>{
    return css`
      @media screen and (min-width:${breakpoints[breakpointsName]}px){
        ${cssByBreakpoints[breakpointsName]};
      }
    `
  })
};