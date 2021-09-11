import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../../components/Generics/NavBar';
import { Button } from '../../components/Generics/Button';
import welcomeImage from '../../assets/WelcomeImage.png';

export const Home = () => {
	return (
		<Container>
			<NavBar/>
			<div className='welcome-section'>
				<div className='welcome-desc'>
					<h2>La mejor forma de organizarte está con <span>Notorium.</span></h2>
					<div className='welcome-info'>
						<p>¿Te resulta dificil organizar tu tiempo o equipo de trabajo?</p>
						<p><span>¡No más!</span>Organiza, planea, administra, agenda y muchas cosas más a través de nuestro producto en sus diferentes modalidades.</p>
					</div>
					<Button text='Conoce más' href=''/>
				</div>
				<img className='welcome-image' src={welcomeImage}/>
			</div>
		</Container>
	);
};

const Container = styled.div`
padding:  3rem 5rem;
height: 100vh;

.welcome-section{
	display: grid;
	grid-template-columns: 60% 30%;
	align-items: center;
	gap: 10rem;
	.welcome-desc{
		h2{
			font-size: 6rem;
		}
		span{
			color: #2100FF;
			font-weight: 600;
		}
		.welcome-info{
			padding: 3rem 0rem;
			width: 55rem;
			p{
				padding: 1rem 0;
				font-size: 1.7rem;
			}
			span {
				font-size: 3rem;
			}
		}
	}
}

.welcome-image{
width: 45rem;
}
`;

export default Home;
