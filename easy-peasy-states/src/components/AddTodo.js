import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const AddTodo = () => {
  const add = useStoreActions((actions) => actions.add);
  const [title, setTitle] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add(title);
        }}
        action=""
        className="flex flex-col gap-2 ">
        <input
          type="text"
          placeholder="Add Todo Title..."
          className="p-2 border-2 border-slate-700 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="bg-purple-950 w-full p-2 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
