import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3VSRgGIvaYus41WtbUV0mpsInbQhsHHg",
  authDomain: "fittravel-8b51f.firebaseapp.com",
  projectId: "fittravel-8b51f",
  storageBucket: "fittravel-8b51f.firebasestorage.app",
  messagingSenderId: "47725830254",
  appId: "1:47725830254:web:55a8eb4fa57dbb03f7467f",
  measurementId: "G-KRFDX6Q9LD",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
