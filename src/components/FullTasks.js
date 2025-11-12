import { Task } from "./Task";
import { useTasksContext } from "../hooks/useTasksContext";
import { OverlayModal } from "../components/OverlayModal";
import { useState, useRef } from "react";

const FullTasks = ({ filteredTasks }) => {
  const [updateTitle, setUpdateTitle] = useState("");
  const [taskId, setTaskId] = useState(null);
  const modalRef = useRef(null);
  const updateInputRef = useRef(null);
  const { state } = useTasksContext();

  return (
    <div>
      <OverlayModal
        taskId={taskId}
        modalRef={modalRef}
        updateInputRef={updateInputRef}
        updateTitle={updateTitle}
        setUpdateTitle={setUpdateTitle}
      />
      <div className="overflow-y-auto p-1 h-96">
        {!state.tasks.length ? (
          <div className="text-3xl font-bold text-center mt-52">
            The List Is Empty
          </div>
        ) : !filteredTasks.length ? (
          <div className="text-3xl font-bold text-center mt-52">
            The Item Is Not Found
          </div>
        ) : (
          <ul>
            {filteredTasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  setTaskId={setTaskId}
                  modalRef={modalRef}
                  setUpdateTitle={setUpdateTitle}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FullTasks;
