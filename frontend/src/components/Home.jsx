import React, { useState, useEffect } from "react";
import "../styles/home.css";
import MyList from "./MyList";
import { handleSubmit } from "../services/taskService";

export default function Home({ tasks, setTasks, deletedTasks, loadTasks }) {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [formKey, setFormKey] = useState(0); // For reset animations

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(
      e,
      taskName,
      assignedTo,
      setTasks,
      setTaskName,
      setAssignedTo
    );
    
    // Trigger animation by remounting the form
    setFormKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <form
        key={formKey}
        onSubmit={handleFormSubmit}
        className="task-form"
      >
        <label htmlFor="taskName">Task Name:- </label>
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <label htmlFor="assignedTo">Assigned To:-</label>
        <input
          id="assignedTo"
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <MyList
        tasks={tasks}
        setTasks={setTasks}
        deletedTasks={deletedTasks}
        loadTasks={loadTasks}
      />
    </div>
  );
}