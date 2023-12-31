import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
      <button onClick={() => {dispatch(decrement())}}>{"-"}</button>
      <p>{count}</p>
      <button onClick={() => {dispatch(increment())}}>{"+"}</button>
      </div>
    </div>
  );
}

export default App;
