import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
 <div className="card"  style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
    <div className="container">
      <h1>Redux Counter</h1>

     <div className="action">
        <a href="#" title="Decrement" onClick={() => dispatch(decNumber())}>
          <span style={{ marginRight: '8px', fontSize: '40px' }}>-</span>
        </a>
        <input
          type="text"
          value={myState}
          style={{
            marginTop: '4px',
            border: 'none',
            outline: 'none',
            borderRadius: '20px',
            padding: '24px',
            fontSize: '20px',
          }}
        />
        <a href="#" title="Increment" onClick={() => dispatch(incNumber())}>
          <span style={{ marginLeft: '8px', fontSize: '40px' }}>+</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default App;
