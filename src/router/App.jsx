import React from 'react';
//useState
import styled from 'styled-components';
import SideNav from '../components/Generics/SideNav';
// import Login from '../pages/Login/Login'
import Calendar from '../pages/Calendar';
function App() {
	//props

	// const [viewSide, setViewSide]= useState(false);
	// const handleView = () => {
	// 	setViewSide(!viewSide);
	// };
	return (
		<ContainerMain>
			<SideNav/>
			{/*<Routing {...props} />*/}
			{/*<Login />*/}
			<Calendar />
		</ContainerMain>
	);
}

const ContainerMain = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 20% 80%;
`;

export default App;
