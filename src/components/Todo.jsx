import { useRef, useState, useEffect } from "react";
import { SiTodoist } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };
  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ------ title ------ */}
      <div className="flex items-center mt-7 gap-2">
        <SiTodoist className="w-7 h-7 text-emerald-500" />{" "}
        <h1 className="text-3xl font-bold text-slate-800">To-Do List</h1>
      </div>

      {/* ----- input box ----- */}
      <div className="flex items-center my-7 bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500 text-gray-800 focus:placeholder:text-gray-400 focus:text-black transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none bg-emerald-500 w-32 h-14 text-white text-lg font-semibold flex items-center justify-center cursor-pointer hover:bg-emerald-600 active:scale-95 transition-transform duration-200"
        >
          <span className="mr-1">ADD</span> <IoMdAdd className="w-5 h-5" />
        </button>
      </div>

      {/* ----- todo list ----- */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
