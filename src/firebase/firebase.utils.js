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


// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj =>{
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });
//     return await batch.commit();
// }

export const convertCollectionSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
   return transformedCollection.reduce((acc, val) => {
        acc[val.title.toLowerCase()] = val;
        return acc;
    }, {})
}

export const getCurrentUser = () =>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;