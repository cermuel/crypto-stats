import React, { useState } from "react";
import Task from "./Task";

const TodoList = () => {
  const [time, settime] = useState("");
  const [taskName, settaskName] = useState("");
  const [taskList, settaskList] = useState([]);

  const addTask = () => {
    settaskList([...taskList, { taskNameObj: taskName, taskTimeObj: time }]);
    settaskName("");
    settime("");
  };
  return (
    <div>
      <input
        type="text"
        required
        id="inputTask"
        onChange={(e) => {
          settaskName(e.target.value);
        }}
      />
      <input
        type="time"
        required
        id="inputTime"
        onChange={(e) => {
          settime(e.target.value);
        }}
      />
      <br />
      <button onClick={addTask}>Add</button>

      {taskList.map((task) => {
        return <Task task={task.taskNameObj} time={task.taskTimeObj} />;
      })}
    </div>
  );
};

export default TodoList;
