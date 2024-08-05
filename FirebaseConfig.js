import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyB06ERgsTjiduBzM9MnC_Mv4TJrUVg9UJg",
     authDomain: "react2-lab4-books.firebaseapp.com",
     projectId: "react2-lab4-books",
     storageBucket: "react2-lab4-books.appspot.com",
     messagingSenderId: "171046748834",
     appId: "1:171046748834:web:54953cb148058b30340dfb"
    };

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, firestore, auth };
