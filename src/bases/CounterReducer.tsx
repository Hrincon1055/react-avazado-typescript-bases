import { useReducer, useState } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    case "increaseBy":
      return {
        counter: state.changes + 1,
        changes: state.counter + action.payload.value,
        previous: state.counter,
      };
    default:
      return state;
  }
};
//? Inicio
export default function CounterReducerComponent() {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const { counter } = counterState;
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const increasetBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };
  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increasetBy(1)}>+1</button>
      <button onClick={() => increasetBy(5)}>+5</button>
      <button onClick={() => increasetBy(10)}>+10</button>
    </>
  );
}
