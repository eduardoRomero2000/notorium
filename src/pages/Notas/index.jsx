import React from "react";
import { Stack, Grid } from "@mui/material";
import { Filter } from "styled-icons/bootstrap/";
import styled from "styled-components";
import dayjs from "dayjs";
import es from "dayjs/locale/es";
import Wrapper from "../../components/Generics/Wrapper";
import Palette from "../../styles/palette";
import Card from "../../components/Inicio/Card";

dayjs.locale(es);

const Notes = () => {
  return (
    <Wrapper>
      <>
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
          <Button type="button">Agregar Nota</Button>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Stack alignItems="center" spacing={2} justifyContent="center">
                <Card />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack alignItems="center" spacing={2} justifyContent="center">
                <Card />
                <Card />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack alignItems="center" spacing={2} justifyContent="center">
                <Card />
                <Card />
                <Card />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack alignItems="center" spacing={2} justifyContent="center">
                <Card />
              </Stack>
            </Grid>
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
`;

export default Notes;
