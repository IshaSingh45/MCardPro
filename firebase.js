import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAfxHByAB9K1bGY6iKZtb-g0iJtyR0x4t4",
    authDomain: "m-card-pro.firebaseapp.com",
    databaseURL: "https://m-card-pro-default-rtdb.firebaseio.com",
    projectId: "m-card-pro",
    storageBucket: "m-card-pro.appspot.com",
    messagingSenderId: "641645788416",
    appId: "1:641645788416:web:ef81991d475a3f0ecd47e5",
    measurementId: "G-MTKN75VW3K"
  };


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage = getStorage(app);
//  const databaseRef = firebase.firestore()
//   const mCardProRef = databaseRef.collection("CardData")
//  module.exports = db;