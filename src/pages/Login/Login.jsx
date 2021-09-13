import React from 'react';
// {useState}
import styled from 'styled-components';

const Login = () =>{

	// const getView = () => {

	// };
	return(
		<ContainerMain>
			<ContainerButtons>
				<button>Log in</button>
				<button>Sign Up</button>
			</ContainerButtons>
			<form>
				<div>
					<input type="text"/>
				</div>
			</form>
		</ContainerMain>
	);
};

const ContainerMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContainerButtons = styled.section`

`;

export default Login;