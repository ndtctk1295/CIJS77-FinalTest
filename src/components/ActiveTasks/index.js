import "./style.css";
import React, { useState, useEffect } from "react";

const ActiveTasks = () => {
  // {addTask}
  //     const [value, setValue] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!value) return;
  //     addTask(value);
  //     setValue("");
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         className="input"
  //         value={value}
  //         placeholder="Add a new task"
  //         onChange={(e) => setValue(e.target.value)}
  //       />
  //     </form>
  //   );

  const [Input, setInput] = useState("");
  const [Tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    // console.log(Input);
    e.preventDefault();
    Tasks.push(Input);

    console.log(Tasks);
  };
  useEffect(() => {
    setTasks(Tasks);
  });
  const handleFinishedTasks = () => {
    const finishedTasks = document
      .querySelectorAll(".tasks")
      .forEach((tasks) => {
        tasks.style.backgroundColor = "red";
      });
  };
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="add details"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button onClick={handleSubmit}>Add</button>
        </form>
        <div>
          {Tasks.map((tasks, index) => (
            <ul>
              <li key={index} className="tasks">
                {tasks}
              </li>
              <button className="check_button" onClick={handleFinishedTasks}>
                x
              </button>
            </ul>
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ActiveTasks;
