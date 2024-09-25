// Import auth and database from this file 

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);

import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export const auth = getAuth(app);
export const db = getFirestore(app);
