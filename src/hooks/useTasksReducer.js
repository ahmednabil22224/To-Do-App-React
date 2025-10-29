export const initialState = {
  tasks: (() => {
    try {
      return JSON.parse(localStorage.getItem("listItems")) || [];
    } catch {
      return [];
    }
  })(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE":
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case "IMPORTANT":
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, isImportant: !task.isImportant }
              : task
          ),
        ],
      };
    case "CHECKED":
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, isChecked: !task.isChecked }
              : task
          ),
        ],
      };
    case "UPDATE":
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            return task.id === action.payload.id ? action.payload : task;
          }),
        ],
      };
    default:
      return state;
  }
};
