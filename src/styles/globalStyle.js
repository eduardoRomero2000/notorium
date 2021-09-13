import { createGlobalStyle } from "styled-components";

/** Estilos globales para toda la pagina */

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  *{
    margin: 0;
		padding: 0;
  }
  html{
    font-size: 62.5%
  }
	body{
		font-family: 'Poppins', sans-serif;
	}
`;
export default GlobalStyles;
