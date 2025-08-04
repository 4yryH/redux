import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import Users from "./features/users/Users.jsx";
import "./App.css";
import Posts from "./features/posts/Posts.jsx";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Счётчик: {count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <h2 style={{color: 'darkgreen', borderTop: '2px solid darkgreen', paddingTop: "10px"}}>Задание "Redux Toolkit"</h2>
        <Users />
        <h2 style={{color: 'darkgreen', borderTop: '2px solid darkgreen', paddingTop: "10px"}}>Задание "Асинхронные запросы в Redux"</h2>
        <Posts/>
      </div>
    </>
  );
}

export default App;
