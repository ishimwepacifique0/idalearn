// addTodo.js
import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DATABASE } from "../../firebaseconfig/config";


const addTodo = async (title, description) => {
  try {
    const docRef = await addDoc(collection(FIREBASE_DATABASE, "todos"), {
      title,
      description,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addTodo;
