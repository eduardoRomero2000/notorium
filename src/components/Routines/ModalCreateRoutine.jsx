import React from "react";
import { Drawer, Box, Stack, Typography } from "@mui/material";
import { instanceOf, PropTypes } from "prop-types";
import styled from "styled-components";
import palette from "../../styles/palette";

const ModalCreateRoutine = (props) => {
  const { open, onClose, handleRoutine, routine, addRoutine } = props;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box style={{ minWidth: "40vw", height: "100%" }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
          spacing={2}
        >
          <Typography variant="h4">Aqui puedes crear una nota</Typography>
          <Input
            type="text"
            name="name"
            value={routine.name}
            onChange={handleRoutine}
            placeholder="Nombre de la rutina"
          />
          <TextArea
            type="text"
            name="description"
            value={routine.description}
            onChange={handleRoutine}
            placeholder="Descripcion"
          />
          <Button type="button" onClick={addRoutine}>
            Crear
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

const Input = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 25px;
  border: 1px solid ${palette.gray};
  padding: 10px;
  font-size: 1.5rem;
  outline: none;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 200px;
  width: 50%;
  border-radius: 10px;
  border: 1px solid ${palette.gray};
  outline: none;
  padding: 10px;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 25px;
  background: ${palette.blueColor};
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
`;

ModalCreateRoutine.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  routine: instanceOf(Object),
  handleRoutine: PropTypes.func,
  addRoutine: PropTypes.func,
};

ModalCreateRoutine.defaultProps = {
  open: false,
  routine: {},
  onClose: () => {},
  handleRoutine: () => {},
  addRoutine: () => {},
};

export default ModalCreateRoutine;
