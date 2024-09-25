import { handleLogin } from "./auth.js";

const signIn = document.getElementById("submitSignIn");
    signIn.addEventListener("click", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        handleLogin(email, password);
});


