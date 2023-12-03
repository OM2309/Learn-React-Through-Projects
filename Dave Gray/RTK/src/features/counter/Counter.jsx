import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <div className="container bg-black py-4">
        <h1 className="text-center text-white text-xl font-medium">
          Redux Toolkit
        </h1>
      </div>

      <div className="flex items-center  justify-center h-screen">
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"  onClick={() => dispatch(increment())} >+</button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"  onClick={() => dispatch(incrementByAmount(10))} >Incrementbyamount</button>
        <p className="text-xl mr-2" >Count: {count}</p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"  onClick={() => dispatch(decrement())} >-</button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"  onClick={() => dispatch(reset())} >Reset</button>
      </div>
    </>
  );
};

export default Counter;
