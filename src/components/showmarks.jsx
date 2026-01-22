import React from "react";

function ShowMarks(props){
    return(
        <div>
        <div className="card">
            <p>
                Score is {props.marks}
            </p>
        </div>
        <div className="card">
            <button onClick={props.markIncrement}>
                Add 5 marks
            </button>
        </div>
        <div className="card">
            <button onClick={props.markReset}>
                Reset Marks
            </button>
        </div>
        </div>


    )
}

export default ShowMarks;