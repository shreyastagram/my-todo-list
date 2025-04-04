import Home from "./components/Home";
import "./app.css";
import MyList from "./components/MyList";
import Navbar from "./components/Navbar";
import UpdateTask from "./components/UpdateTask";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTasks } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route
          path="/todos"
          element={<MyList tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/updateTask/:id"
          element={<UpdateTask setTasks={setTasks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
