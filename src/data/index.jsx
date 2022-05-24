
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore, query, where, doc, Timestamp, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDRrZj2AMDfd485xs72U8Ybll3fJMHo1Q8",
    authDomain: "sushi-switch.firebaseapp.com",
    projectId: "sushi-switch",
    storageBucket: "sushi-switch.appspot.com",
    messagingSenderId: "500513112909",
    appId: "1:500513112909:web:b50ea0658e527bf56eed04"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {

    const myColec = collection(firestoreDB, 'products');

    const productsSnap = await getDocs(myColec);

    return productsSnap.docs.map(doc => {
        return {

            ...doc.data(),
            id: doc.id
        }
    });
}

    export async function getItemByCategory(categoryid) {

        const myColec = collection(firestoreDB, 'products');

        const queryProduct = query(myColec, where("category", "==", categoryid));

        const productsSnap = await getDocs(queryProduct);

        return productsSnap.docs.map(doc => {
            return {

                ...doc.data(),
                id: doc.id
            }
        });
    }

        export async function getItem(id) {

            const myColec = collection(firestoreDB, 'products');
    
            const productRef = doc(myColec, id);
    
            const productsSnap = await getDoc(productRef);
    
            return { ...productsSnap.data(), id: productsSnap.id };
        }

