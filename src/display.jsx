import { useContext } from "react";
import CounterContext from "./countercontext";

function Display(){
    const {count, setCount} = useContext(CounterContext);
    
    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}> Increase </button>
        </div>
    );
}

export default Display;