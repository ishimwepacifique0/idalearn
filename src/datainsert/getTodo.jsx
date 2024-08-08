// getTodos.js
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DATABASE } from "../../firebaseconfig/config";


const getTodos = async () => {
  const data = await getDocs(collection(FIREBASE_DATABASE,"todos"))
  const todos = []
  data.forEach(element => {
    todos.push({id:element.id, ...element.data()})
  });

  return todos;
};

export default getTodos;
