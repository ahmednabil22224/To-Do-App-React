import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./useTasksReducer";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (newTask) => dispatch({ type: "ADD", payload: newTask });
  const deleteTask = (id) => dispatch({ type: "DELETE", payload: id });
  const importantTask = (id) => dispatch({ type: "IMPORTANT", payload: id });
  const checkedTask = (id) => dispatch({ type: "CHECKED", payload: id });
  const updateTask = (updateTask) =>
    dispatch({ type: "UPDATE", payload: updateTask });

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(state.tasks));
  }, [state]);

  return (
    <TasksContext.Provider
      value={{
        state,
        addTask,
        deleteTask,
        importantTask,
        checkedTask,
        updateTask,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
