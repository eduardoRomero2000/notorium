import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import Palette from "../../styles/palette";
import Wrapper from "../../components/Generics/Wrapper";
import Card from "../../components/Inicio/Card";
import {reminders} from "../../mocks/notes.json";

const Reminders = () => {
  return (
    <Wrapper>
      <ContainerMain>
        <header>
          <h1>RECORDATORIOS</h1>
        </header>
        <Grid>
          <div className="calendar">
            <Calendar />
          </div>
          <div className="reminders">
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
            {reminders.map((reminder) => (
              <Card title={reminder.title} description={reminder.description} time={reminder.time} mb />
            ))}
          </div>
        </Grid>
      </ContainerMain>
    </Wrapper>
  );
};

const ContainerMain = styled.main`
  padding: 3rem;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100%;
  .calendar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .react-calendar {
      width: 100%;
      border: none;
    }
  }
  .reminders {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .days {
      display: flex;
      gap: 1rem;
      .date-now {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding-right: 4rem;
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
  }
`;


export default Reminders;
