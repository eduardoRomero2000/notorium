import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import Palette from "../../styles/palette";
import Wrapper from "../../components/Generics/Wrapper";

const Reminders = () => {
  const array = [{}, {}, {}, {}];
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
            {array.map(() => (
              <Card>
                <header>
                  <h5>Note title</h5>
                  <div className="chip-time">24 min</div>
                </header>
                <p>
                  Realiza tus sesiones de pomodoros, manten tu concentración y
                  mejora tu productividad.
                </p>
                <div className="border" />
              </Card>
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

const Card = styled.div`
  margin-top: 2rem;
  padding: 1rem 1rem;
  background: ${Palette.backgroundCards};
  box-shadow: ${Palette.shadow};
  border-radius: 18px;
  min-height: 12rem;
  max-width: 70%;
  flex-wrap: nowrap;
  position: relative;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    h5 {
      font-size: 1.6rem;
    }
    .chip-time {
      background: ${Palette.blueColor};
      color: ${Palette.white};
      height: 2rem;
      width: 6rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    font-size: 1.3rem;
  }
  .border {
    position: absolute;
    width: 4px;
    height: 82%;
    background: ${Palette.blueColor};
    top: 10%;
    left: 0;
  }
`;

export default Reminders;
