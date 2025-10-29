export const Header = ({ searchItem }) => {
  return (
    <div className="bg-slate-500 p-3 flex justify-between items-center gap-20">
      <h1 className="text-2xl font-bold text-white">Tasks</h1>

      <input
        className="w-48 p-1 rounded-lg outline-none pl-2 caret-teal-500 placeholder:focus:opacity-0 placeholder:transition placeholder:duration-500"
        type="text"
        placeholder="Search item"
        onInput={searchItem}
      />
    </div>
  );
};
