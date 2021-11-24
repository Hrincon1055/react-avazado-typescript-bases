import { useCounter } from "../hooks/useCounter";

//? Inicio
export default function CounterHook() {
  const { counter, counterElement, handleClick } = useCounter({
    maxCount: 15,
  });
  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
}
