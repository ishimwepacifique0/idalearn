import { FIREBASE_DATABASE } from "../../firebaseconfig/config";
import { addDoc,getDocs,getDoc ,deleteDoc,updateDoc, collection } from 'firebase/firestore'

//CRUD function for create, read ,update and delete


// create data into firestore
export const addData = async (title,description) =>{
  try {
    const addDataDoc = await addDoc(
        // defining the collection you want to add data
        collection(FIREBASE_DATABASE,"todos")
        // defining data you want to add
        ,
        {
            title,
            description,
        }
    )
    console.log("Adding data to firestore:",addDataDoc.id)
    
  } catch (error) {
    console.error(error)
  }   
}





// get data into our firestore


export const getDataCollection = async () => {
    try{
        const getDataQuery = await getDocs(collection(FIREBASE_DATABASE,"todos"))

        const tod = []

        getDataQuery.forEach((doc)=>{
         console.log(doc.data())
        
         tod.push({id:doc.id,...doc.data()})
        })

        console.log(tod)

       return tod

    }catch (error) {
    console.error(error)
    }
}