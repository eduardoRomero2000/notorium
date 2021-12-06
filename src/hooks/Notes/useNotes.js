import { useState, useEffect } from "react";
import { postData, getData } from "../../system/fetchs";

const useNotes = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const USER_ID = "61ad7b3de8bc382bf2b6ca58";
  const open = Boolean(anchorEl);

  const toggleDrawer = () => {
    setAnchorEl(!anchorEl);
  };

  const createNote = async () => {
    setLoading(true);
    const data = {
      title: note.title,
      description: note.description,
      userId: USER_ID,
    };
    const response = await postData("notes/create", data);
    if (response.success) {
      const copyNotes = notes.slice();
      copyNotes.push(response.info.info);
      setNotes(copyNotes);
      setAnchorEl(false);
      setNote({
        title: "",
        description: "",
      });
      setLoading(false);
    } else {
      console.log("Error");
    }
  };

  const handleChangeNote = (e) => {
    const { value, name } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const getNotes = async () => {
    setLoading(true);
    const response = await getData(`notes/get/all/${USER_ID}`);
    if (response.success) {
      setNotes(response.info.info);
    } else {
      console.log("Error", response.info);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return {
    anchorEl,
    open,
    note,
    notes,
    loading,
    toggleDrawer,
    createNote,
    handleChangeNote,
  };
};

export default useNotes;
