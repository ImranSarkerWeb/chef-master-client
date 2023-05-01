// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_api_Key,
  authDomain: import.meta.env.VITE_auth_Domain,
  projectId: import.meta.env.VITE_project_Id,
  storageBucket: import.meta.env.VITE_storage_Bucket,
  messagingSenderId: import.meta.env.VITE_messaging_SenderId,
  appId: import.meta.env.VITE_app_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
