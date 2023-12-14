import { useState } from "react";
import { data } from "./db/data";

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <>
      <div className="text-center font-bold texl-2xl">TODO</div>
      <div className="p-4 flex justify-around items-center flex-wrap">
        {todos.map((todo) => (
          <a key={todo.id}
            href="#"
            className="mb-4block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {todo.title}
             
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        ))}
      </div>
    </>
  );
}

export default App;
