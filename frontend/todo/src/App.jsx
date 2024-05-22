import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateTodo from "./componenet/CreateTodo";
import Todos from "./componenet/Todos";


function App() {
  const [todos, settodos] = useState([]);
  // //hiting the backend
  //  fetch("http://localhost:3000/gettodo")
  //  .then(async function(res){
  //   const json = await res.json();
  //   settodos(json.todos);
  //  })
  /// hiting the backend
  async function buttonpress() {
    const responce = await fetch("http://localhost:3000/gettodo");
    const finaldata = await responce.json();
    settodos(finaldata.todos);
    
  }

  return (
    <div>
      <div>
        <button onClick={buttonpress}>get the data</button>{" "}
      </div>
      <br></br>
      <CreateTodo></CreateTodo>
      <Todos
        //  todos ={[
        //   {
        //     title:"fuk u aman",
        //     description:"fuk u aman",
        //     completed :false
        //   }
        //  ]}
       todos={todos}
      ></Todos>
    </div>
  );
}

export default App;
