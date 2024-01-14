import { useTodosQuery } from "../redux/services/todo.services";

const Todo = () => {
  const { data, error, isLoading, isSuccess } = useTodosQuery();
  console.log(data.todos);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="h-full shadow-lg w-96 rounded-lg bg-[#E6E6FA] p-8">
        <div className="flex items-center gap-2 pb-4">
          <h1 className="text-black text-xl font-bold">Todo-List</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none" 
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clipboard-list"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
          </svg>
        </div>
        <div className="pt-2 flex w-90 bg-white rounded-full px-4 items-center relative">
          <input
            type="text"
            className="rounded-full py-2 font-medium w-80 px-3 outline-none"
            placeholder="Add a task"
          />
          <div className="absolute inset-y-0 right-1 flex items-center">
            <button className="bg-black text-white font-bold rounded-full px-4 py-2">
              ADD
            </button>
          </div>
        </div>

        {data.todos.map((todo, index) => (
          <div
            className="mt-4 flex justify-around items-center gap-40"
            key={index}
          >
            <p className="font-semibold">{todo.title}</p>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clipboard-edit"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" />
                <path d="M4 13.5V6a2 2 0 0 1 2-2h2" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
