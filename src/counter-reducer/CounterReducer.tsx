import { useReducer, useState } from "react";
import { doReset, doIncreaseBy } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

//? Inicio
export default function CounterReducerComponent() {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const { counter } = counterState;
  const handleReset = () => {
    dispatch(doReset());
  };
  const increasetBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };
  return (
    <>
      <h1>Counter Reducer Segmentado: {counter}</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increasetBy(1)}>+1</button>
      <button onClick={() => increasetBy(5)}>+5</button>
      <button onClick={() => increasetBy(10)}>+10</button>
    </>
  );
}
