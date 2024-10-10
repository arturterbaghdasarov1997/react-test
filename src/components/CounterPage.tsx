import { useCounter } from "../hooks/useCounter";

export const CounterPage = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};