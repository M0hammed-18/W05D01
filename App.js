const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

// app.get("./",(req,res)=>{
//     res.send("hello")
// })

let todo = [
  { id: 1, taskName: "sleep", isCompleted: false },
  { id: 2, taskName: "walk", isCompleted: false },
  { id: 3, taskName: "cook", isCompleted: false },
  { id: 4, taskName: "sleep", isCompleted: false },
  { id: 5, taskName: "walk", isCompleted: false },
  { id: 6, taskName: "cook", isCompleted: false },
  { id: 7, taskName: "sleep", isCompleted: false },
  { id: 8, taskName: "walk", isCompleted: false },
  { id: 9, taskName: "cook", isCompleted: false },
];
app.get("/todo", (req, res) => {
  res.status(200);
  res.json(todo);
});

app.post("/todo", (req, res) => {
  let todos = {
    id: req.body.id,
    taskName: req.body.taskName,
    isCompleted: req.body.isCompleted,
  };
  todo.push(todos);
  res.status(200);
  res.json(todo);
});

app.put("/todo", (req, res) => {
    const isCompleted=req.body.isCompleted
    console.log(isCompleted);
    const idd=req.query.id
    console.log(idd);
  let found = todo.splice((item) => {
    return item.isCompleted ==isCompleted;
  });
 
  res.status(200);
  res.json(todo);
});

app.delete("/todo/:id",(req,res)=>{
    const {id}=req.params
    console.log(id);
    todo.splice(id-1,1)
    res.status(200);
  res.json(todo);
});

app.listen(port, () => {
  console.log("ll");
});
