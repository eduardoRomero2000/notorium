import React from "react";
import { Stack, Grid, Skeleton } from "@mui/material";
import { Filter } from "styled-icons/bootstrap/";
import styled from "styled-components";
import dayjs from "dayjs";
import es from "dayjs/locale/es";
import Wrapper from "../../components/Generics/Wrapper";
import Palette from "../../styles/palette";
import Card from "../../components/Inicio/Card";
import ModalCreateNote from "../../components/Notes/ModalCreateNote";
import useNotes from "../../hooks/Notes/useNotes";

dayjs.locale(es);

const Notes = () => {
  const {
    anchorEl,
    open,
    toggleDrawer,
    notes,
    loading,
    note,
    handleChangeNote,
    createNote,
  } = useNotes();
  return (
    <Wrapper>
      <>
        <ModalCreateNote
          note={note}
          handleChangeNote={handleChangeNote}
          createNote={createNote}
          anchor={anchorEl}
          open={open}
          onClose={toggleDrawer}
        />
        <Header>
          <Stack direction="row" spacing={3} alignItems="center">
            <Filter size={20} />
            <h3>Filtro</h3>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <h1>NOTAS</h1>
            <section className="date">
              <div>
                <p>{dayjs().format("dddd").substr(0, 3)}</p>
                <p>{dayjs().format("D")}</p>
              </div>
              <div className="separator" />
              <p>8 notas</p>
            </section>
          </Stack>
          <hr />
          <Button onClick={toggleDrawer} type="button">
            Agregar Nota
          </Button>
          <Grid container spacing={2}>
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                  <Grid item xs={3}>
                    <Skeleton
                      key={item}
                      variant="rect"
                      width="100%"
                      height="12rem"
                    />
                  </Grid>
                ))
              : notes.map((note) => (
                  <Grid item xs={3}>
                    <Card
                      title={note.title}
                      description={note.description}
                      time={note.date_at_created}
                    />
                  </Grid>
                ))}
          </Grid>
        </Header>
      </>
    </Wrapper>
  );
};

const Header = styled.header`
  min-height: 60px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .separator {
    height: 40px;
    width: 1px;
    background: gray;
  }
  .date {
    display: flex;
    gap: 20px;
    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: ${Palette.blueColor};
        text-transform: capitalize;
        font-size: 1.6rem;
      }
    }
    p {
      align-self: center;
      font-size: 1.3rem;
    }
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background: ${Palette.blueColor};
  color: ${Palette.white};
  border: none;
  cursor: pointer;
`;

export default Notes;
