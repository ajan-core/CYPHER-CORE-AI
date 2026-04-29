// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Aapka Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDIyzd91eqHJabHBDU_4paJas_MbSr_ZG0",
  authDomain: "cypher-core-ai.firebaseapp.com",
  projectId: "cypher-core-ai",
  storageBucket: "cypher-core-ai.firebasestorage.app",
  messagingSenderId: "858049071556",
  appId: "1:858049071556:web:29479b099b0f475c5e7c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let coins = 50;

// Google Login Function
window.login = function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            document.getElementById('output-console').innerText = "Welcome, " + user.displayName + "!";
            console.log("Logged in:", user);
        }).catch((error) => {
            console.error("Login Failed:", error);
            alert("Login nahi ho saka. Check karein ke Authentication enable hai ya nahi.");
        });
}

// Watch Ad Function
window.watchAd = function() {
    let consoleBox = document.getElementById('output-console');
    consoleBox.innerText = "Watching Ad... (Please wait)";
    
    setTimeout(() => {
        coins += 20;
        document.getElementById('coin-count').innerText = coins;
        consoleBox.innerText = "Success! 20 Coins added to your account.";
    }, 5000); 
}

// Build Project Function
window.buildProject = function() {
    if (!auth.currentUser) {
        alert("Pehle Google se Login karein!");
        return;
    }
    if (coins < 10) {
        alert("Coins kam hain! Ad dekhein.");
        return;
    }
    coins -= 10;
    document.getElementById('coin-count').innerText = coins;
    document.getElementById('output-console').innerText = "CYPHER-CORE AI is building your project...";
}

// Auth State Change (Check if user is already logged in)
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('coin-count').innerText = coins;
        console.log("User already logged in:", user.displayName);
    }
});
        
