import React from "react";
import { PropTypes } from "prop-types";
import { Drawer, Box, Typography, Stack } from "@mui/material";
import styled from "styled-components";
import palette from "../../styles/palette";

const ModalCreateNote = function (props) {
  const { open, onClose, note, handleChangeNote, createNote } = props;
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
            name="title"
            value={note.title}
            onChange={handleChangeNote}
            placeholder="Titulo de la nota"
          />
          <TextArea
            type="text"
            name="description"
            value={note.description}
            onChange={handleChangeNote}
            placeholder="Descripcion"
          />
          <Button onClick={createNote} type="button">
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

ModalCreateNote.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  note: PropTypes.instanceOf(Object),
  handleChangeNote: PropTypes.func,
  createNote: PropTypes.func,
};

ModalCreateNote.defaultProps = {
  open: false,
  note: {},
  handleChangeNote: () => {},
  createNote: () => {},
  onClose: () => {},
};

export default ModalCreateNote;
