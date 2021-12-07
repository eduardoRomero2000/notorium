import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import { Skeleton } from "@mui/material";
import Palette from "../../styles/palette";
import Wrapper from "../../components/Generics/Wrapper";
import useReminders from "../../hooks/Notes/useReminders";
import ModalCreateReminders from "../../components/Reminders/ModalCreateReminders";

const Reminders = () => {
  const {
    reminders,
    loading,
    handleOpenDrawer,
    openDrawer,
    reminder,
    handleReminder,
    createReminder,
  } = useReminders();

  return (
    <Wrapper>
      <ModalCreateReminders
        open={openDrawer}
        onClose={handleOpenDrawer}
        reminder={reminder}
        handleReminder={handleReminder}
        createReminder={createReminder}
      />
      <ContainerMain>
        <header>
          <h1>RECORDATORIOS</h1>
          <Button type="button" onClick={handleOpenDrawer}>
            Crear recordatorio
          </Button>
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
                <p>
                  {reminders.length}
                  {reminders.length > 1 ? "recordatorios" : "recordatorio"}
                </p>
              </div>
            </header>
            {loading
              ? [1, 2, 3, 4].map((skeleton) => (
                  <Skeleton
                    key={skeleton}
                    variant="rect"
                    width="70%"
                    height="12rem"
                    style={{ marginBottom: "1rem" }}
                  />
                ))
              : reminders?.map((reminder) => (
                  <Card>
                    <header>
                      <h5>{reminder.title}</h5>
                      <div className="chip-time">
                        {dayjs(reminder?.date_at_created).format("DD/MM/YY")}
                      </div>
                    </header>
                    <p>{reminder.description}</p>
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
  width: 70%;
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

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 25px;
  margin-top: 1rem;
  background: ${Palette.blueColor};
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
`;

export default Reminders;
