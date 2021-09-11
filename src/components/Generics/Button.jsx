import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export const Button = ({text, href}) => {
	return (
		<StyledButton href={href}>{text}</StyledButton>
	);
};

const StyledButton = styled.a`
background-color: #3662FF;
border-radius: 2rem;
color: #fff;
font-size: 1.6rem;
padding: 1rem 3rem;
text-decoration: none;
width: max-content;
`;

Button.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string
};

export default Button;
