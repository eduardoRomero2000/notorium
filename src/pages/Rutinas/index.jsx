import React from "react";
import styled from "styled-components";
import { Stack, Grid } from "@mui/material";
import { History } from "styled-icons/boxicons-regular";
import dayjs from "dayjs";
import es from "dayjs/locale/es";
// import { ArrowRightShort } from "styled-icons/bootstrap";
import Wrapper from "../../components/Generics/Wrapper";
import Palette from "../../styles/palette";
import Card from "../../components/Inicio/Card";
import ModalCreateRoutine from "../../components/Routines/ModalCreateRoutine";
import useRoutines from "../../hooks/Notes/useRoutines";

dayjs.locale(es);

const Rutinas = () => {
  const {
    openDrawer,
    toggleDrawer,
    routine,
    routines,
    handleRoutine,
    addRoutine,
  } = useRoutines();

  return (
    <Wrapper>
      <ContainerMain>
        <ModalCreateRoutine
          open={openDrawer}
          routine={routine}
          addRoutine={addRoutine}
          handleRoutine={handleRoutine}
          onClose={toggleDrawer}
        />
        <HeaderRuntimes>
          <Stack direction="row" alignItems="center" spacing={2}>
            <History size={25} />
            <h2>Historial</h2>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <h1>RUTINAS</h1>
            <Button type="button" onClick={toggleDrawer}>
              Agregar rutina
            </Button>
            <section className="date">
              <div>
                <p>{dayjs().format("dddd").substr(0, 3)}</p>
                <p>{dayjs().format("D")}</p>
              </div>
              <div className="separator" />
              <p>
                {routines.length} {routines.length > 1 ? "rutinas" : "rutina"}{" "}
              </p>
            </section>
          </Stack>
        </HeaderRuntimes>
        <BodyRuntimes>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <ContainerBody>
                <h2>Rutinas de Pierna</h2>
                <section className="runtimesList">
                  <Stack spacing={2}>
                    <ul>
                      {routines.map((routine, index) => (
                        <li>
                          <Stack direction="row" alignItems="center">
                            <p>{index + 1}.</p>
                            <p>{routine.name}</p>
                          </Stack>
                        </li>
                      ))}
                    </ul>
                  </Stack>
                </section>
              </ContainerBody>
            </Grid>
            <Grid item xs={4}>
              <ContainerCards>
                <h2>Próximas rutinas</h2>
                <Stack alignItems="center" spacing={3}>
                  {routines.map((routine) => (
                    <Card
                      title={routine.name}
                      description={routine.description}
                      time={routine.date_at_created}
                    />
                  ))}
                </Stack>
              </ContainerCards>
            </Grid>
          </Grid>
        </BodyRuntimes>
      </ContainerMain>
    </Wrapper>
  );
};

const ContainerMain = styled.main`
  padding: 15px;
`;

const BodyRuntimes = styled.div`
  width: 100%;
`;

const HeaderRuntimes = styled.header`
  margin-bottom: 20px;
  svg {
    color: #858585;
  }
  h2 {
    color: #858585;
  }
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

const ContainerBody = styled.div`
  margin-top: 3rem;
  padding: 30px;
  background: #f8faff;
  border-radius: 15px;
  min-height: 550px;
  height: 100%;
  width: 100%;
  .runtimesList {
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      margin-top: 2rem;
      list-style: none;
      li {
        margin-bottom: 1.3rem;
        p {
          font-size: 1.5rem;
        }
        p:first-child {
          display: flex;
          align-items: center;
          height: 30px;
          width: 50px;
        }
        p:nth-child(2) {
          display: flex;
          align-items: center;
          height: 30px;
          width: 400px;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
`;

const ContainerCards = styled.section`
  border-left: 1px solid #ccc;
  h2 {
    margin: 3rem 0 2rem 0;
  }
  padding: 15px 30px;
`;

// const ViewAll = styled.span`
//   margin-top: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   color: ${Palette.blueColor};
// `;

export default Rutinas;
