import React from 'react';
/* import styled from 'styled-components'; */
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/Footer';


export default function Home(){
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu/>
      <Footer/>
    </div>
  )
};
