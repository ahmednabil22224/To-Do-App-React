import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useTasksContext } from "../hooks/useTasksContext";

export const AddTask = () => {
  const [newTitle, setNewTitle] = useState("");
  const addInputRef = useRef(null);
  const { state, addTask } = useTasksContext();

  function handleAddTask() {
    if (!newTitle) return;
    let id = state.tasks.length
      ? state.tasks[state.tasks.length - 1].id + 1
      : 1;
    let newItem = {
      id: id,
      title: newTitle,
      isChecked: false,
      date: new Date().toLocaleString(),
    };

    addTask(newItem); ////////////

    addInputRef.current.value = "";
    setNewTitle("");
    addInputRef.current.focus();
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="add-task bg-white p-2 border-b-4 border-b-slate-500 flex gap-2">
      <input
        autoFocus
        ref={addInputRef}
        className="flex-1 outline-none caret-teal-400 placeholder:focus:opacity-0 placeholder:transition placeholder:duration-500"
        type="text"
        name="newTitle"
        placeholder="Add New Task"
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <button
        className="bg-teal-400 text-purple-900 p-2 rounded-lg"
        aria-label="Add task"
        onClick={handleAddTask}>
        <FaPlus />
      </button>
    </form>
  );
};
