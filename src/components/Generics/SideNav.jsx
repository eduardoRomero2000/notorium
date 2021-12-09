import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeSmile, Edit, Dumbbell } from "styled-icons/boxicons-regular";
import { Alarm, Bell } from "styled-icons/bootstrap";
// import { Settings } from "styled-icons/feather";
import logNotorium from "../../assets/LogoNotorium.png";
import ChangoProfile from "../../assets/Macaco navideno.png";
import Palette from "../../styles/palette";

const SideNav = () => {
  const locationMenu = window.location.pathname;

  return (
    <ContainerSideMain>
      <header>
        <img src={logNotorium} alt="Logo" title="Notorium" />
        <h1>NOTORIUM</h1>
      </header>
      <CardUser>
        <img src={ChangoProfile} alt="" />
        <div className="user-information">
          <h1>Javier Macaco</h1>
          <span>@Macaquinho</span>
        </div>
      </CardUser>
      <CardItems>
        <Link
          className={
            locationMenu === "/home" ? "menu-items active" : "menu-items"
          }
          to="/home"
        >
          <div>
            <HomeSmile />
          </div>
          <div>
            <span>Inicio</span>
          </div>
        </Link>
        <Link
          className={
            locationMenu === "/notes" ? "menu-items active" : "menu-items"
          }
          to="/notes"
        >
          <div>
            <Edit />
          </div>
          <div>
            <span>Notas</span>
          </div>
        </Link>
        <Link
          className={
            locationMenu === "/pomodoros" ? "menu-items active" : "menu-items"
          }
          to="/pomodoros"
        >
          <div>
            <Alarm />
          </div>
          <div>
            <span>Pomodoros</span>
          </div>
        </Link>
        <Link
          className={
            locationMenu === "/rutinas" ? "menu-items active" : "menu-items"
          }
          to="/rutinas"
        >
          <div>
            <Dumbbell />
          </div>
          <div>
            <span>Rutinas</span>
          </div>
        </Link>
        <Link
          className={
            locationMenu === "/reminders" ? "menu-items active" : "menu-items"
          }
          to="/reminders"
        >
          <div>
            <Bell />
          </div>
          <div>
            <span>Recordatorios</span>
          </div>
        </Link>
      </CardItems>
      {/* <CardItems>
        <Link
          className={
            locationMenu === "/preferences" ? "menu-items active" : "menu-items"
          }
          to="/preferences"
        >
          <div>
            <Settings />
          </div>
          <div>
            <span>Preferencias</span>
          </div>
        </Link>
      </CardItems> */}
    </ContainerSideMain>
  );
};

const ContainerSideMain = styled.main`
  background: ${Palette.backgroundSide};
  height: 100vh;
  padding: 2rem;
  header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.5rem;
    }
    img {
      height: 3rem;
      width: 3rem;
      object-fit: contain;
      margin-right: 1rem;
    }
  }
`;

const CardItems = styled.section`
  margin-top: 3rem;
  background: ${Palette.white};
  box-shadow: ${Palette.shadow};
  border-radius: 18px;
  padding: 2rem;
  a:nth-child(1) {
    padding-top: 0;
  }
  .menu-items {
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    padding-top: 4rem;
    svg {
      height: 3rem;
      color: ${Palette.gray};
    }
    span {
      font-size: 1.6rem;
      color: ${Palette.gray};
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
    }
  }
  .active {
    svg {
      color: black;
    }
    span {
      color: black;
    }
  }
`;

const CardUser = styled.div`
  display: flex;
  margin-top: 3rem;
  background: ${Palette.white};
  box-shadow: ${Palette.shadow};
  border-radius: 18px;
  padding: 2rem;
  align-items: center;
  img {
    height: 6rem;
    width: 6rem;
    object-fit: contain;
  }
  .user-information {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    h1 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    span {
      font-size: 1.4rem;
      color: ${Palette.gray};
    }
  }
`;

export default SideNav;
