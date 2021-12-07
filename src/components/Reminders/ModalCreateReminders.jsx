import React from "react";
import { Drawer, Box, Stack, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import palette from "../../styles/palette";

const ModalCreateReminders = (props) => {
  const { open, onClose, handleReminder, createReminder, reminder } = props;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box style={{ minWidth: "40vw", height: "100%" }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
          spacing={2}
        >
          <Typography variant="h4">
            Aqui puedes crear un recordatorio
          </Typography>
          <Input
            type="text"
            name="title"
            value={reminder.title}
            onChange={handleReminder}
            placeholder="Titulo de la nota"
          />
          <TextArea
            type="text"
            name="description"
            value={reminder.description}
            onChange={handleReminder}
            placeholder="Descripcion"
          />
          <Button onClick={createReminder} type="button">
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

ModalCreateReminders.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  handleReminder: PropTypes.func,
  createReminder: PropTypes.func,
  reminder: PropTypes.instanceOf(Object),
};

ModalCreateReminders.defaultProps = {
  open: false,
  onClose: () => {},
  handleReminder: () => {},
  createReminder: () => {},
  reminder: {},
};

export default ModalCreateReminders;
