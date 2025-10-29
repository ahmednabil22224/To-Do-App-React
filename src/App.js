import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { Footer } from "./components/Footer";
import { useState } from "react";
import FullTasks from "./components/FullTasks";
import { useTasksContext } from "./hooks/useTasksContext";

function App() {
  const [search, setSearch] = useState("");

  const { state } = useTasksContext();
  //---------------------Filtered Tasks--------------------
  const filteredTasks = state.tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App relative bg-slate-100 rounded-lg border-8 border-purple-700">
      <Header searchItem={(e) => setSearch(e.target.value)} />

      <AddTask />

      <FullTasks filteredTasks={filteredTasks} />

      <Footer filteredTasks={filteredTasks} />
    </div>
  );
}

export default App;
