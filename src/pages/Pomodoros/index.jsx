import React from "react";
import styled from "styled-components";
import { History, Delete } from "styled-icons/fluentui-system-filled";
import Wrapper from "../../components/Generics/Wrapper";
import Palette from "../../styles/palette";
import { postData, getData, deleteData} from '../../system/fetchs'
import Timer from './timer'

const Pomodoros = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 10 minutes timer

  const dataForm = {
    name: '',
    duration: 0,
    description: '',
    restDuration: 0,
    timeFormat: '',
    category: 'tarea',
    userId: '61ad7b3de8bc382bf2b6ca58'
  }

  const [datos, setDatos] = React.useState(dataForm)
  const [arrayPomodoros, setArrayPomodoros] = React.useState('')

  React.useEffect(async () => {
    const data = await getData(`pomodoro/history/get/all/${datos.userId}`)
    const dataReady = data.info.info
    setArrayPomodoros(dataReady)
  }, [])

  const onDelete = async(id) => {
    const response = await deleteData(`pomodoro/history/delete/${id}/${datos.userId}`)
    if (response.success) {
      const pomodoroIndex = arrayPomodoros.findIndex(pomodoro => pomodoro.id === id)
      const newPomodoros = [...arrayPomodoros]
      newPomodoros.splice(pomodoroIndex, 1)
      setArrayPomodoros(newPomodoros)
    }
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    const { name, description } = datos;
    if (name !== '' && description !== '') {
      const response = await postData('pomodoro/history/create', datos)
      if (response.success) {
        const copyPomodorosArray = arrayPomodoros.slice()
        copyPomodorosArray.push(response.info.info)
        setArrayPomodoros(copyPomodorosArray)
        setDatos(dataForm)
      }
    } else {
      console.log('faltan datos')
    }
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    const newValues = {
      ...datos,
      [name]: value,
    };
    setDatos(newValues)
  }

  return (
    <Wrapper>
      <ContainerPomodoros>
        <HeaderPom>
          <div>
            <History />
            <span>Historial</span>
          </div>
          <h1>Pomodoro</h1>
          <hr />
        </HeaderPom>
        <ContainerBody>
          <Card>
            <header>
              <h1>Pomodoro #{arrayPomodoros.length + 1}</h1>
            </header>
            <div className="timer">
              <h1><Timer expiryTimestamp={time}/></h1>
            </div>
          </Card>
          <Subtitle>
            <h1>Tareas</h1>
            <hr />
          </Subtitle>
          <Form onSubmit={onSubmit}>
            <div>
              <select placeholder="Categoria" id="category" name="category" value={datos.category} onChange={handleChange} >
                <option value="Tarea">Tarea</option>
                <option value="Casa">Casa</option>
              </select>
              <input type="text" placeholder="Titulo de tarea" value={datos.name} id="name" name="name" onChange={handleChange} />
            </div>
            <textarea type="text" placeholder="Descripción de la tarea" id="description" name="description" value={datos.description} onChange={handleChange} />
            <button type="submit">Agregar tarea</button>
          </Form>
          <CardsContainer>
            {arrayPomodoros ? arrayPomodoros.map((data) => (
              <CardActivity key={data.id}>
                <div>
                  <p>{data.name}</p>
                  <p>{data.description}</p>
                </div>
                <div>
                  <p>25: 00</p>
                  <Delete onClick={() => onDelete(data.id)} />
                </div>
              </CardActivity>
            )) : 'Crear Tu Primer Pomodoro'}
          </CardsContainer>
        </ContainerBody>
      </ContainerPomodoros>
    </Wrapper>
  );
};

const ContainerPomodoros = styled.section`
  padding: 2rem;
`;

const HeaderPom = styled.header`
  display: flex;
  flex-direction: column;
  div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      height: 2rem;
      color: ${Palette.gray};
    }
    span {
      font-size: 1.6rem;
      color: ${Palette.gray};
    }
  }
  h1 {
    margin-top: 2rem;
    font-size: 3rem;
  }
  hr {
    margin-top: 1.5rem;
    border: 0;
    height: 1px;
    width: 80%;
    align-self: center;
    background-image: linear-gradient(
      to right,
      rgba(204, 204, 204, 0.75),
      rgba(204, 204, 204, 0.75),
      rgba(204, 204, 204, 0.75)
    );
  }
`;

const ContainerBody = styled.section`
  margin-top: 2rem;
  padding: 0 7rem;
`;

const Card = styled.div`
  width: 100%;
  background-color: #f8faff;
  padding: 2rem 4rem;
  border-radius: 10px;
  position: relative;
  box-shadow: inset 19px -10px 0px -13px ${Palette.blueColor};
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1.5rem;
    }
    svg {
      height: 2rem;
      color: ${Palette.mainColor};
    }
  }
  .timer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 4rem;
      font-weight: normal;
    }
  }
  footer {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    button {
      width: 12rem;
      height: 4rem;
      border: none;
      border-radius: 20px;
      background-color: ${Palette.blueColor};
      color: ${Palette.white};
    }
  }
`;

const Subtitle = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.6rem;
    margin-right: 2rem;
  }
  hr {
    border: none;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      rgba(204, 204, 204, 0.75),
      rgba(204, 204, 204, 0.75),
      rgba(204, 204, 204, 0.75)
    );
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  div:first-child {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    select,
    input {
      height: 3rem;
      border-radius: 10px;
      border: 1px solid ${Palette.blueColor};
      padding: 0.5rem;
    }
    select::placeholder,
    input::placeholder {
      color: ${Palette.grayLight};
    }
    input:focus,
    textarea:focus-visible {
      outline: none;
    }
  }
  textarea {
    resize: none;
    height: 10rem;
    border: 1px solid ${Palette.blueColor};
    border-radius: 10px;
    padding: 1rem;
    font-family: "Poppins";
  }
  button {
    width: 12rem;
    height: 4rem;
    border: none;
    border-radius: 20px;
    background-color: ${Palette.blueColor};
    color: ${Palette.white};
    align-self: center;
  }
`;

const CardsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CardActivity = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 1rem;
  width: 100%;
  background: #e9faff;
  border-radius: 15px;
  div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    p:first-child {
      border-right: 1px solid ${Palette.grayLight};
      padding: 0 1rem;
      height: 100%;
      display: flex;
      align-items: center;
    }
    p {
      font-size: 1.4rem;
    }
  }
  div:last-child {
    display: flex;
    justify-content: end;
    align-items: center;
    p {
      font-size: 1.5rem;
    }
    svg {
      height: 2rem;
      margin-left: 2rem;
      color: ${Palette.blueColor};
    }
  }
`;

export default Pomodoros;
