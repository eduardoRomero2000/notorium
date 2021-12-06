import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { PropTypes } from "prop-types";
import Palette from "../../styles/palette";

const Item = (props) => {
  const { title, description, time } = props;
  return (
    <Card>
      <header>
        <h5>{title}</h5>
        <div className="chip-time">{dayjs(time).format("DD.MMM.YY")}</div>
      </header>
      <p>{description}</p>
      <div className="border" />
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
};

Item.defaultProps = {
  title: "",
  description: "",
  time: "",
};

const Card = styled.div`
  padding: 1rem 1rem;
  background: ${Palette.backgroundCards};
  box-shadow: ${Palette.shadow};
  border-radius: 18px;
  min-height: 12rem;
  width: 100%;
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
