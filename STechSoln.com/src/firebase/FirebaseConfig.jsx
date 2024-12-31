import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZEIdFzYIRdzTjvoTvnyVAYAre5wyBX18",
  authDomain: "stechsolnstore.firebaseapp.com",
  projectId: "stechsolnstore",
  storageBucket: "stechsolnstore.firebasestorage.app",
  messagingSenderId: "969848044766",
  appId: "1:969848044766:web:715b30e925caa932ba164f",
  measurementId: "G-Q49XCG6VGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };