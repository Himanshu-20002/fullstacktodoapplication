import { useState } from "react";

export default function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />

        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/createtodo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}

// import React, { useState } from "react";

// export default function CreateTodo() {
//   //defining a state
//   const [todo, setTodo] = useState({ title: "", description: "" });


//   // event handler function to handle input change

//   const handlechange = (e) => {
//     const { id, value } = e.target;
//     setTodo((prevTodo) => ({ ...prevTodo, [id]: value }));
//   };

//   // event handler to handle the submition


//    const handleSubmit=()=>{
//     const responce = fetch("http://localhost:3000/createtodo",{
//         method:"post",
//         body:JSON.stringify(todo)
//         headers:{}

//     })

//    }
//   return (
//     <div>
//       <input
//         placeholder="enter a title"
//         style={{ padding: 10, margin: 10 }}
//         type="text"
//         onChange={handlechange} // event handler
//       ></input>
//       <input
//         placeholder="enter a title"
//         style={{ padding: 10, margin: 10 }}
//         type="text"
//         onChange={handlechange} // event handler
//       ></input>
//       <button onClick={handleSubmit}></button>
//     </div>
//   );
// }
