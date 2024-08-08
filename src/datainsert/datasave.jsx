// App.js
import{ useEffect, useState,useContext } from "react";
import { addData, getDataCollection } from "./functionality";
import { StartContext } from "../../context/modalContext";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const {count,moda,changeModa} = useContext(StartContext)

  console.log(count)

  useEffect(() => {
    const fetchData = async()=>{
        const td =  await getDataCollection()
        setTodos(td)
    }
    fetchData()
  }, []);

  const handleAddTodo = async () => {
    const todata = await  addData(title,description)
    console.log(todata)
    setTitle("")
    setDescription("")
  };

  console.log(todos)

  return (
    <div className={`p-4 ${moda?"bg-black":"bg-white"} w-full h-[100vh]`}>
    <button onClick={()=>changeModa()} className="text-green-500 border rounded p-2">changeModa</button>
    <h1 className={`text-2xl font-bold mb-4 ${moda?"text-red-600":"text-black"} text-red-600 `}>Todo List</h1>
    <div className="mb-4">
      <input
        type="text"
        className="border p-2 rounded mb-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="border p-2 rounded mb-2 w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="border p-4 rounded mb-2">
          <h2 className="text-xl font-semibold">{todo.title}</h2>
          <p className="text-gray-700">{todo.description}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Todo;
