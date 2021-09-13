import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeSmile, Edit } from "styled-icons/boxicons-regular";
import { Alarm, CalendarEvent, Bell } from "styled-icons/bootstrap";
import logNotorium from "../../assets/LogoNotorium.png";
import ChangoProfile from "../../assets/Chango profile.png";

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
            <Bell />
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
            <HomeSmile />
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
            <HomeSmile />
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
  background: #f8faff;
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
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 2rem;
  a:nth-child(1) {
    margin-top: 0;
  }
  .menu-items {
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    margin-top: 4rem;
    svg {
      height: 3rem;
      color: #9f9f9f;
    }
    span {
      font-size: 1.6rem;
      color: #9f9f9f;
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
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
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
      color: #9f9f9f;
    }
  }
`;

export default SideNav;
