import { useTasksContext } from "../hooks/useTasksContext";

export const Footer = ({ filteredTasks }) => {
  const { state } = useTasksContext();

  return (
    <div className="bg-slate-500 p-2">
      <p className="text-center text-2xl text-white">
        {filteredTasks.length} / {state.tasks.length} Task
        {state.tasks.length !== 1 && "s"}
      </p>
    </div>
  );
};
