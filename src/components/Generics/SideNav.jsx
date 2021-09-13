import React,{useState} from 'react';
import styled from 'styled-components';
import logNotorium from '../../assets/LogoNotorium.png';
import ChangoProfile from '../../assets/Chango profile.png';
import {HomeSmile, Edit} from 'styled-icons/boxicons-regular';
import {Alarm, CalendarEvent, Bell} from 'styled-icons/bootstrap';

const SideNav = () => {
	const [optionSelected, setOptionSelected]= useState(0);
	const handleView = (numberView)=>{
		setOptionSelected(numberView);
	};
	return(
		<ContainerSideMain>
			<header>
				<img src={logNotorium} alt="Logo" title='Notorium'/>
				<h1>NOTORIUM</h1>
			</header>
			<CardUser>
				<img src={ChangoProfile} alt=""/>
				<div className='user-information'>
					<h1>Javier Macaco</h1>
					<span>@Macaquinho</span>
				</div>
			</CardUser>
			<CardItems>
				<div className={optionSelected === 0 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(0)}>
					<div>
						<HomeSmile />
					</div>
					<div>
						<span>Inicio</span>
					</div>
				</div>
				<div className={optionSelected === 1 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(1)}>
					<div>
						<Edit />
					</div>
					<div>
						<span>Notas</span>
					</div>
				</div>
				<div className={optionSelected === 2 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(2)}>
					<div>
						<Alarm />
					</div>
					<div>
						<span>Pomodoros</span>
					</div>
				</div>
				<div className={optionSelected === 3 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(3)}>
					<div>
						<CalendarEvent />
					</div>
					<div>
						<span>Horarios</span>
					</div>
				</div>
				<div className={optionSelected === 4 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(4)}>
					<div>
						<Bell />
					</div>
					<div>
						<span>Recordatorios</span>
					</div>
				</div>
				<div className={optionSelected === 5 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(5)}>
					<div>
						<HomeSmile />
					</div>
					<div>
						<span>Recordatorios</span>
					</div>
				</div>
			</CardItems>
			<CardItems>
				<div className={optionSelected === 6 ? 'menu-items active' : 'menu-items' } onClick={()=> handleView(6)}>
					<div>
						<HomeSmile />
					</div>
					<div>
						<span>Preferencias</span>
					</div>
				</div>
			</CardItems>
		</ContainerSideMain>
	);
};

const ContainerSideMain = styled.main`
  background: #F8FAFF;
  height: 100vh;
  padding: 2rem;
  header{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1{
      font-size: 2.5rem;
    }
    img{
      height: 3rem;
      width: 3rem;
      object-fit: contain;
      margin-right: 1rem;
    }
  }
`;

const CardItems = styled.section`
  margin-top: 3rem;
  background: #FFFFFF;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 2rem;
  div:nth-child(1){
    margin-top: 0;
  }
  .menu-items{
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    margin-top: 4rem;
    svg{
      height: 3rem;
      color: #9F9F9F;
    }
    span{
      font-size: 1.6rem;
      color: #9F9F9F;
    }
    div:nth-child(2){
      display: flex;
      align-items: center;
    }
  }
  .active{
    svg{
      color: black;
    }
    span{
      color: black;
    }
  }
`;

const CardUser = styled.div`
  display: flex;
  margin-top: 3rem;
  background: #FFFFFF;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 2rem;
  align-items: center;
  img{
    height: 6rem;
    width: 6rem;
    object-fit: contain;
  }
  .user-information{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    h1{
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    span{
      font-size: 1.4rem;
      color: #9F9F9F;
    }
  }
`;

export default SideNav;