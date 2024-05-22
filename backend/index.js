const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/createtodo", async function (req, res) {
  // to create todo
  const createpayload = req.body;
  const parsedpaylod = createTodo.safeParse(createpayload);
  if (!parsedpaylod.success) {
    res.status(400).json({
      msg: "Wrong input",
    });
    return;//no need to return anything since wrong input
  }

  // put it in mongodb
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.json({
    msg: "To do has been created",
  });
});

app.get("/gettodo", async function (req, res) {
  // to get the todo
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/complited", async function (req, res) {
  // mark as done
  const updatepayload = req.body;
  const parsedpaylod = updateTodo.safeParse(updatepayload);
  if (!parsedpaylod.success) {
    res.status(400).json({
      msg: "You have sent a wrong input",
    });
    return;
  }


  //updating in mongoss
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
