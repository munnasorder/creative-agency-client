import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';


export const initializeFirebaseLogin = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const checkSignedIn = () => {
    var loggedInUser;
    firebase.auth().onAuthStateChanged(function (user) {
        const { displayName, email, photoURL } = user;
        loggedInUser = {
            isLogIn: true,
            displayName: displayName,
            email: email,
            photo: photoURL,
            success: true
        }
        
        if(loggedInUser){
            // console.log(loggedInUser);
            return loggedInUser
        }
        
    });
}

export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(result => {
            var token = result.credential.accessToken;
            const { displayName, email, photoURL } = result.user;
            const userData = {
                isLogIn: true,
                displayName: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return userData;
        })
        .catch(error => {
            // console.log(error.message)
        });
}

export const googleSignOut = () => {
    localStorage.setItem('user', JSON.stringify({email:'',displayName:''}))
    return firebase.auth().signOut()
        .then(result => {
            const user = {
                isLogIn: false,
                displayName: '',
                photo: '',
                email: ''
            }
            return user;
        }).catch(err => {
            console.log(err.message)
        });
}