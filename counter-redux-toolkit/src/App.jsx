import './App.css'
import { increment, decrement } from './store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() { 
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter); // Assuming your store structure has the counter at the root level

    return (
        <div className='App'>
            <button onClick={() => dispatch(increment())}><span>+</span></button>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(decrement())}><span>-</span></button>
        </div>
    )
}

export default App
