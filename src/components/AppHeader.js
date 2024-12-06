import { React, useState } from "react";
import style from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";
import { updateFilterStatus } from "../slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AppHeader = () => {
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  // update.
  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    // localstorage
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className={style.appHeader}>
      <Button onClick={() => setModalOpen(true)}>Add Task</Button>
      <SelectButton value={filterStatus} onChange={(e) => updateFilter(e)}>
        <option value={"all"}>All </option>
        <option value={"incomplete"}>incomplete</option>
        <option value={"complete"}>complete</option>
      </SelectButton>
      <TodoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        type={"add"}
      />
    </div>
  );
};

export default AppHeader;
