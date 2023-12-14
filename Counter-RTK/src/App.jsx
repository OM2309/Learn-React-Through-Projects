import { increment,decrement} from "./store/counterSlice";
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div className="mt-4">
        <h1 className="text-center font-bold text-2xl">Redux Toolkit Counter</h1>
      </div>
      <div className="flex items-center justify-center h-screen flex-row mb-4">
        <button className=" p-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={()=>dispatch(increment())}>+</button>
        <p className="text-lg font-medium m-4">Counter: {count}</p>
        <button className="p-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={()=>dispatch(decrement())}>-</button>

      </div>
    </>
  );
}

export default App;
