import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { useTasksContext } from "../hooks/useTasksContext";
import React from "react";

export const Task = React.memo(
  ({ task, setTaskId, modalRef, setUpdateTitle }) => {
    const { deleteTask, importantTask, checkedTask } = useTasksContext();

    function openModal() {
      modalRef.current.style.display = "flex";
      setUpdateTitle(task.title);
      setTaskId(task.id);
    }

    //----------------Check Tasks--------------------
    function handleCheckTask(id) {
      checkedTask(id);
    }

    //--------------Important Tasks------------------
    function handleImportantTasks(id) {
      importantTask(id);
    }

    //---------------Delete Tasks--------------------
    function handleDeleteTask(id) {
      deleteTask(id);
    }

    return (
      <li
        style={task.isImportant ? { backgroundColor: "#eaea94" } : {}}
        className="bg-white flex gap-5 p-3 m-2 shadow-lg rounded-md hover:bg-emerald-300 hover:scale-105 transition-transform duration-300 ease-in">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <input
              id={task.id}
              className="mr-2 scale-150"
              required
              type="checkbox"
              checked={task.isChecked}
              onChange={() => handleCheckTask(task.id)}
            />

            <label
              htmlFor={task.id}
              className="font-bold text-xl"
              style={task.isChecked ? { textDecoration: "line-through" } : {}}>
              {task.title.toUpperCase()}
            </label>
          </div>
          <div className="text-xs text-slate-700">{task.date}</div>
        </div>

        <div className="flex items-center gap-5 ml-auto ">
          <button
            className="text-yellow-600 text-3xl cursor-pointer"
            aria-label="Mark as important">
            <IoStar onClick={() => handleImportantTasks(task.id)} />
          </button>
          <button
            className="text-green-600 text-3xl cursor-pointer"
            aria-label="Update the task">
            <MdEdit onClick={openModal} />
          </button>
          <button
            className="text-red-600 text-2xl cursor-pointer"
            aria-label="Delete the task">
            <FaTrashAlt onClick={() => handleDeleteTask(task.id)} />
          </button>
        </div>
      </li>
    );
  }
);
