import React from "react";
import styled from "styled-components";
import { Filter } from "styled-icons/bootstrap";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import es from "dayjs/locale/es";
import Card from "../../components/Inicio/Card";
import Palette from "../../styles/palette";
import "react-calendar/dist/Calendar.css";
import Wrapper from "../../components/Generics/Wrapper";
import {notes, reminders} from "../../mocks/notes.json";

dayjs.locale(es);

const Beginning = () => {
  const valueDate = new Date();
  return (
    <Wrapper>
      <ContainerMain>
        <Header>
          <div>
            <Filter />
            <p>Filtro</p>
          </div>
          <h4>¿Qué haremos hoy?</h4>
        </Header>
        <NotesContainer>
          <h1>Inicio</h1>
          <ContainerCards>
            {notes.map((note) => (
              <Card title={note.title} description={note.description} time={note.time} />
            ))}
          </ContainerCards>
          <hr />
        </NotesContainer>
        <RemindersContainer>
          <h1>Recordatorios</h1>
          <div className="grid-2">
            <div className="calendar-container">
              <h5>Calendario</h5>
              <div className="calendar-custom">
                <Calendar value={valueDate} />
              </div>
            </div>
            <div className="cards-container">
              <header className="days">
                <div className="date-now">
                  <p className="name-day">
                    {dayjs().format("dddd").substr(0, 3)}
                  </p>
                  <p className="number-day">{dayjs().format("D")}</p>
                </div>
                <div className="numbers-reminders">
                  <p>4 recordatorios</p>
                </div>
              </header>
              <div className="container-items">
                {reminders.map((reminder) => (
                  <Card title={reminder.title} description={reminder.description} time={reminder.time} />
                ))}
              </div>
            </div>
          </div>
        </RemindersContainer>
      </ContainerMain>
    </Wrapper>
  );
};

const ContainerMain = styled.main`
  display: grid;
  grid-template-rows: 60px 215px calc(100% - (60px + 215px));
  margin: 1rem;
  background: ${Palette.backgroundCards};
  box-shadow: ${Palette.shadow};
  border-radius: 18px;
  padding: 0 2rem;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 2rem;
  }
  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const NotesContainer = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
  }
  hr {
    margin-top: 4rem;
    height: 1px;
    background-color: ${Palette.grayLight};
    border: none;
  }
`;

const ContainerCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  margin-top: 1rem;
`;

const RemindersContainer = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .calendar-container {
      height: 100%;
      margin-top: 2rem;
      display: flex;
      padding: 1rem;
      flex-direction: column;
      border-right: 1px solid ${Palette.grayLight};
      h5 {
        font-size: 1.4rem;
      }
      .calendar-custom {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        .react-calendar {
          border: none;
          width: 100%;
        }
      }
    }
    .cards-container {
      .days {
        display: grid;
        grid-template-columns: 15% 85%;
        .date-now {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          border-right: 1px solid ${Palette.grayLight};
          .name-day {
            text-transform: capitalize;
            color: ${Palette.blueColor};
            font-size: 1.4rem;
            font-weight: bold;
          }
          .number-day {
            font-size: 1.4rem;
            font-weight: bold;
            color: ${Palette.blueColor};
          }
        }
        .numbers-reminders {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          p {
            font-size: 1.3rem;
            font-weight: bold;
          }
        }
      }
      .container-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 2rem;
      }
    }
  }
`;

export default Beginning;
