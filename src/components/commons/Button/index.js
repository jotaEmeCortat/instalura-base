import styled, {css} from 'styled-components';
import get from 'lodash/get'
import {TextStyleVariantsMap} from '../../foundation/Text/index';
import {breakpointsMedia} from '../../../theme/utils/breakpointsMedia';


// GET()  https://lodash.com/docs/4.17.15#get
const ButtonGhost = css`
  color:${function(props){
    return get(props.theme, `colors.${props.variant}.contrastText`)
  }};
  background-color:transparent;
`;

const ButtonDefault = css `
  background-color:${function(props){
    return get(props.theme, `colors.${props.variant}.color`)
  }};
  color:${function(props){
    return get(props.theme, `colors.${props.variant}.contrastText`)
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }

   //breakpoints https://xstyled.dev/docs/enhanced-styled-components/
${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
    ${TextStyleVariantsMap.paragraph1}
    `,
    lg: css`
     /* From lg breakpoint */
    `
  })
}
`;