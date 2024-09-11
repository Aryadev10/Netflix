// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDc0kdO6x76Mq_YuxFgszMkjPijseCDhY",
  authDomain: "netflixgpt-69ab6.firebaseapp.com",
  projectId: "netflixgpt-69ab6",
  storageBucket: "netflixgpt-69ab6.appspot.com",
  messagingSenderId: "448006098491",
  appId: "1:448006098491:web:8f17e36c4802701338d61e",
  measurementId: "G-MR2LYD936S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();