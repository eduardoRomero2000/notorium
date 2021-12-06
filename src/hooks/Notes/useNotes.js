import { useState } from "react";

const useNotes = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleDrawer = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  return {
    anchorEl,
    open,
    toggleDrawer,
  };
};

export default useNotes;
