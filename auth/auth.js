import { auth } from '../firebase/firebase-init.js';
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

export async function handleLogin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('loggedInUserId', user.uid);

      // #TODO: change to something else
    //   window.location.href = "_home.html"; 
    MainContent("home");

    } catch (error) {
        let errorMessage = '';
        switch (error.code) {
            case "auth/invalid-login-credentials":
                errorMessage = "Invalid credentials.";
                break;
            case "auth/user-disabled":
                errorMessage = "User account disabled.";
                break;
            case "auth/too-many-requests":
                errorMessage = "Too many login attempts. Please try again later.";
                break;
            case "auth/operation-not-allowed":
                errorMessage = "Operation not allowed.";
                break;
            case "auth/network-request-failed":
                errorMessage = "Network request failed. Please check your internet connection.";
                break;
            default:
                errorMessage = "An error occurred. Please try again.";
        }
        alert(errorMessage);
    }
}

export async function handleLogout() {
    await signOut(auth)
    .then(() => {
        localStorage.removeItem('loggedInUserId');

         // #TODO: change to something else        
    })
    .catch((error) => {
        alert(`Error signing out: ${error}`);
    })
}