import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SideNav from "./SideNav";

const Wrapper = (props) => {
  const { children } = props;
  return (
    <ContainerGrid>
      <SideNav />
      {children}
    </ContainerGrid>
  );
};

const ContainerGrid = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 20% 80%;
`;

Wrapper.propTypes = {
  children: PropTypes.objectOf(PropTypes.object),
};
Wrapper.defaultProps = {
  children: {},
};

export default Wrapper;
