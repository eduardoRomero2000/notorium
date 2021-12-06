import { useState, useEffect } from "react";
import { getData, postData } from "../../system/fetchs";

const useRoutines = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const USER_ID = "61ad7b3de8bc382bf2b6ca58";
  const [routine, setRoutine] = useState({
    name: "",
    description: "",
  });
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleRoutine = (e) => {
    const { name, value } = e.target;
    setRoutine({
      ...routine,
      [name]: value,
    });
  };

  const getRoutines = async () => {
    setLoading(true);
    const response = await getData(`/routine/get/all/${USER_ID}`);
    if (response.success) {
      setRoutines(response.info.info);
      setLoading(false);
    }
  };

  const addRoutine = async () => {
    const data = {
      name: routine.name,
      description: routine.description,
      userId: USER_ID,
    };
    const response = await postData(`/routine/create`, data);
    if (response.success) {
      const copyRoutines = routines.slice();
      copyRoutines.push(response.info.info);
      setRoutines(copyRoutines);
      toggleDrawer();
    } else {
      console.log("Error", response);
    }
  };

  const reorderColumns = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((item, index) => ({
      ...item,
      index,
    }));
  };

  const onDrag = (column) => {
    const { destination, source } = column;
    if (destination && source) {
      const copyColumns = routines.slice();
      const columnsOrdered = reorderColumns(
        copyColumns,
        source.index,
        destination.index
      );
      setRoutines(columnsOrdered);
    } else {
      console.error("Error onDrag");
    }
  };

  useEffect(() => {
    getRoutines();
  }, []);

  return {
    openDrawer,
    routines,
    loading,
    toggleDrawer,
    handleRoutine,
    addRoutine,
    onDrag,
  };
};

export default useRoutines;
