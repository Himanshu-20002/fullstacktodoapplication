// // Todo [{
//     title:klsdsd,
//     discription:dsldksdkmf,
// }]

import { useState } from "react";

export default function Todos({ todos }) {
  const [completed, setCompleted] = useState({});
  const handleCompletion = (id) => {
    setCompleted((prev) => {
      // Log the previous state and the id
      console.log("Previous state:", prev);
      console.log("Todo ID:", id);

      // Construct the new state
      const newState = {
        ...prev,
        [id]: !prev[id],
      };

      // Log the new state
      console.log("New state:", newState);

      // Return the new state
      return newState;
    });
  };

  return (
    <div>
      {/* <h1> you need to go gym</h1>
      
        <h2> you need to go gym today</h2>
        <button>mark as done</button> */}
      {/* to render all the array in todo we use map function */}
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => handleCompletion(todo._id)}>
              {completed[todo._id] || todo.completed
                ? "completed"
                : "mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
