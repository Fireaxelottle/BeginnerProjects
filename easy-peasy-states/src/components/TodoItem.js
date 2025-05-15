import React from "react";
import { useStoreActions } from "easy-peasy";

const TodoItem = ({ Todo }) => {
  const toggle = useStoreActions((actions) => actions.toggle);
  const remove = useStoreActions((actions) => actions.remove);
  return (
    <div className="flex justify-between p-4 border-b-2 gap-32">
      <span
        onClick={() => toggle(Todo.id)}
        className="cursor-pointer"
        style={{ textDecoration: Todo.completed ? "line-through" : null }}>
        {Todo.title}
      </span>
      <button onClick={() => remove(Todo.id)} className="font-bold  text-2xl">
        &times;
      </button>
    </div>
  );
};

export default TodoItem;
