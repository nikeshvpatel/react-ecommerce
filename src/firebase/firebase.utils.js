import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBK6RLC03MsI1-m7SyYrUVLx_pJndZvyCU",
    authDomain: "react-ecommerce-eaf73.firebaseapp.com",
    projectId: "react-ecommerce-eaf73",
    storageBucket: "react-ecommerce-eaf73.appspot.com",
    messagingSenderId: "497822848681",
    appId: "1:497822848681:web:ad4a82197c50738bdd3bb8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log(e.message)
        }

    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;