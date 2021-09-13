import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export const NavBar = () => {
	const [optionSelected, setOptionSelected]= useState(0);
	const handleView = (numberView)=>{
		setOptionSelected(numberView);
	};
	return (
		<ContainerNavBar>
			<header>
				<h1 className="title">Notorium</h1>
			</header>
			<Nav>
				<div className={optionSelected === 0 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(0)}>
					<span>Inicio</span>
				</div>
				<div className={optionSelected === 1 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(1)}>
					<span>Productos</span>
				</div>
				<div className={optionSelected === 2 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(2)}>
					<span>Soporte</span>
				</div>
				<div className={optionSelected === 3 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(3)}>
					<span>Contacto</span>
				</div>
				<div className={optionSelected === 4 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(4)}>
					<span>Iniciar Sesión</span>
				</div>
				<Button text='Regístrate' href='/register'/>
			</Nav>
		</ContainerNavBar>
	);
};

const ContainerNavBar = styled.div`
display: grid;
grid-template-columns: 20% 80%;
padding: 0 1rem;
align-items: center;
h1{
	font-size: 3.25rem;
	color: #2100FF;
	font-weight: 600;
}
`;
const Nav = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
column-gap: 5rem;
.menu-items{
    cursor: pointer;
    span{
      font-size: 1.6rem;
      color: #201140;
    }
  }
  .active{
    span{
      color: #3662FF;
    }
	}
`;


