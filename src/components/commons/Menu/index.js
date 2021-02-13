import React from 'react';
import Logo from '../../../assets/Logo/logoLight.js';
import Text from '../../foundation/Text/index.js';
import { Button } from '../Button/index.js';
import { MenuWrapper } from './styles/MenuWrapper.js';

export default function Menu(){
  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    },
  ];

  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link)=>{
          return(
            <li key={link.url}>
              <Text tag='a' variant='smallestException' href={link.url}>{link.text}</Text>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
};
