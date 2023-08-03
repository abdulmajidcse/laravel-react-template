import { useState } from "react";

export default function Main() {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <h2>Welcome to ReactJS!</h2>
            <button
                type="button"
                onClick={() => setCount((prevCount) => ++prevCount)}
            >
                Click Me {count} times
            </button>
        </>
    );
}
