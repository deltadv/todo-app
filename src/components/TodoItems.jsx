import { FaTrashAlt } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-3 p-2 hover:bg-gray-100 transition-colors duration-200 ease-in-out shadow-md">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <ImCheckboxChecked className="w-5 h-5 text-emerald-500 transition-transform duration-200 ease-in-out transform hover:scale-110" />
        ) : (
          <ImCheckboxUnchecked className="w-5 h-5 text-gray-500 transition-transform duration-200 ease-in-out transform hover:scale-110" />
        )}
        <p
          className={`ml-4 text-[17px] text-slate-700 transition-colors duration-200 ease-in-out ${
            isComplete
              ? "line-through text-slate-400 decoration-slate-500"
              : "hover:text-black"
          }`}
        >
          {text}
        </p>
      </div>
      <FaTrashAlt
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-4 h-4 cursor-pointer text-gray-500 hover:scale-110 transition-transform duration-200 ease-in-out"
      />
    </div>
  );
};

export default TodoItems;
