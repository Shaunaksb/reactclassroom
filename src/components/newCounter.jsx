import React, { useState, useEffect } from "react";

function Newcounter(){
    const [count, setCount] = useState(0);
	useEffect(() => {
		// alert(`count is ${count}`)
	})

    return(
		<div className="card">
			<h3> count is {count} </h3>
			<button onClick={() => setCount(count + 1)}>
					Increase Count
			</button>
			<button onClick={() => setCount(count - 1)}>
					Decarease Count
			</button>
			<button onClick={() => setCount(0)}>
					Reset Count
			</button>
		</div>
    );
}

export default Newcounter;