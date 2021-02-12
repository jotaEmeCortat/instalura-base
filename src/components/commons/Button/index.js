import styled, {css} from 'styled-components';
import get from 'lodash/get'

/* GET()  https://lodash.com/docs/4.17.15#get */
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
  ${function(props){
    if(props.ghost){
      return ButtonGhost
    }
    return ButtonDefault
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;