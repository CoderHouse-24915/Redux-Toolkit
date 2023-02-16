import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/features/counter";

import { loginout } from "./redux/features/login";

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.count);

  const logged = useSelector((state) => state.logged.logged);

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>

      <span> {value} </span>
      <div>
        {logged ? (
          <span>Estas logueado en la app!</span>
        ) : (
          <span>Hacer login!</span>
        )}
        <button onClick={() => dispatch(loginout())}>Log IN / OUT</button>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
      </div>
    </div>
  );
};

export default App;
