import reactLogo from "./assets/react.svg";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { amountAdded, incremented } from "./features/counter/counter-slice";

import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  //Selecting what value we are modifying
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(incremented());
  };

  const addHandler = () => {
    dispatch(amountAdded(3));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementHandler}>count is {count}</button>
        <button onClick={addHandler}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
