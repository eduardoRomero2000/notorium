import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

export const Button = ({ text, href }) => {
  return <StyledButton href={href}>{text}</StyledButton>;
};

const StyledButton = styled.a`
  background-color: #3662ff;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.6rem;
  padding: 1.1rem 3rem;
  text-decoration: none;
  width: max-content;
`;

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
Button.defaultProps = {
  text: "",
  href: "",
};

export default Button;
