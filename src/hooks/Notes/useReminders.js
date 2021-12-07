import { useState, useEffect } from "react";
import { getData, postData } from "../../system/fetchs";

const useReminders = () => {
  const USER_ID = "61ad7b3de8bc382bf2b6ca58";
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [reminder, setReminder] = useState({
    title: "",
    description: "",
  });

  const getReminders = async () => {
    setLoading(true);
    const response = await getData(`/reminders/get/all/${USER_ID}`);
    if (response.success) {
      setReminders(response.info.info);
      setLoading(false);
    }
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const createReminder = async () => {
    const data = {
      title: reminder.title,
      description: reminder.description,
      rememberDate: new Date(),
      userId: USER_ID,
    };
    const response = await postData("reminders/create", data);
    if (response.success) {
      const copyReminders = reminders.slice();
      copyReminders.push(response.info.info);
      setReminders(copyReminders);
      handleOpenDrawer();
    }
  };

  const handleReminder = (e) => {
    const { name, value } = e.target;
    setReminder({
      ...reminder,
      [name]: value,
    });
  };

  useEffect(() => {
    getReminders();
  }, []);

  return {
    reminders,
    loading,
    openDrawer,
    reminder,
    handleOpenDrawer,
    createReminder,
    handleReminder,
  };
};

export default useReminders;
