import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeSmile, Edit, Dumbbell } from "styled-icons/boxicons-regular";
import { Alarm, CalendarEvent, Bell } from "styled-icons/bootstrap";
import { Settings } from "styled-icons/feather";
import logNotorium from "../../assets/LogoNotorium.png";
import ChangoProfile from "../../assets/Chango profile.png";
import Palette from "../../styles/palette";

const SideNav = () => {
  const [pathName, setPathName] = useState("/inicio");

  const handlePathName = (name) => {
    setPathName(name);
  };

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
            pathName === "/inicio" ? "menu-items active" : "menu-items"
          }
          onClick={() => handlePathName("/inicio")}
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
          className={pathName === "/notes" ? "menu-items active" : "menu-items"}
          to="/notes"
          onClick={() => handlePathName("/notes")}
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
            pathName === "/pomodoros" ? "menu-items active" : "menu-items"
          }
          onClick={() => handlePathName("/pomodoros")}
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
            pathName === "/schedules" ? "menu-items active" : "menu-items"
          }
          onClick={() => handlePathName("/schedules")}
          to="/schedules"
        >
          <div>
            <CalendarEvent />
          </div>
          <div>
            <span>Horarios</span>
          </div>
        </Link>
        <Link
          className={
            pathName === "/rutinas" ? "menu-items active" : "menu-items"
          }
          onClick={() => handlePathName("/rutinas")}
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
            pathName === "/reminders" ? "menu-items active" : "menu-items"
          }
          onClick={() => handlePathName("/reminders")}
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
      <CardItems>
        <Link
          className={
            pathName === "/preferences" ? "menu-items active" : "menu-items"
          }
          onClick={() => handlePathName("/preferences")}
          to="/preferences"
        >
          <div>
            <Settings />
          </div>
          <div>
            <span>Preferencias</span>
          </div>
        </Link>
      </CardItems>
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
