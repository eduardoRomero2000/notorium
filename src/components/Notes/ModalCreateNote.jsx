import React from "react";
import { PropTypes } from "prop-types";
import { Drawer, Box, Typography, Stack } from "@mui/material";

const ModalCreateNote = function (props) {
  const { open, onClose } = props;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box style={{ minWidth: "40vw", height: "100%" }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Typography variant="h4">Aqui puedes crear una nota</Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};

ModalCreateNote.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalCreateNote.defaultProps = {
  open: false,
  onClose: () => {},
};

export default ModalCreateNote;
