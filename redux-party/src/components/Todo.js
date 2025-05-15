import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHello } from "../redux/Slices/helloSlice";
import Todocard from "./Todocard";

const Todo = () => {
  const dispatch = useDispatch();
  const hellos = useSelector((state) => state.hellos);
  return (
    <div className="flex flex-col gap-5 p-5 justify-center items-center">
      {hellos.map((hello) => (
        <Todocard todo={hello} key={hello.id} />
      ))}

      <button
        className="
       bg-red-500
       text-white 
         font-bold 
         py-2
         px-4 
         rounded
         hover:bg-red-700
                "
        onClick={() => dispatch(addHello({name: "~Hallo~"}))}>
        Add Hallo
      </button>
    </div>
  );
};

export default Todo;
