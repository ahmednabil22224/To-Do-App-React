import { useTasksContext } from "../hooks/useTasksContext";

export const OverlayModal = ({
  taskId,
  modalRef,
  updateInputRef,
  updateTitle,
  setUpdateTitle,
}) => {
  const { state, updateTask } = useTasksContext();

  function closeModal() {
    modalRef.current.style.display = "none";
  }

  const foundTask = state.tasks.find((task) => task.id === taskId);

  //----------Update Tasks------------------
  function handleUpdateTask() {
    if (!updateTitle) return;

    const updatedTask = {
      ...foundTask,
      title: updateTitle,
      date: new Date().toLocaleString(),
    };
    setUpdateTitle("");
    updateTask(updatedTask);
    updateInputRef.current.value = "";
  }

  return (
    <div
      ref={modalRef}
      className="absolute inset-0 bg-gray-800 bg-opacity-50 hidden items-center justify-center z-50">
      <div className="bg-slate-700 p-8 rounded-lg shadow-lg">
        <p className="text-xl text-green-500">
          Are You Sure To Update &nbsp;
          <span className="text-red-700 uppercase">{foundTask?.title}</span>?
        </p>

        <input
          ref={updateInputRef}
          className="my-4 w-full p-1 rounded-lg outline-none"
          type="text"
          name="updatetitle"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />

        <div className="flex justify-evenly">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={closeModal}>
            Close
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => {
              handleUpdateTask();
              closeModal();
            }}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
