import React from "react";
import styled from "styled-components";
import Palette from "../../styles/palette";

const Item = () => {
  return (
    <Card>
      <header>
        <h5>Note title</h5>
        <div className="chip-time">24 min</div>
      </header>
      <p>
        Realiza tus sesiones de pomodoros, manten tu concentración y mejora tu
        productividad.
      </p>
      <div className="border" />
    </Card>
  );
};
const Card = styled.div`
  padding: 1rem 1rem;
  background: ${Palette.backgroundCards};
  box-shadow: ${Palette.shadow};
  border-radius: 18px;
  min-height: 12rem;
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

export default Item;
