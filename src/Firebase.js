import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8I0U2AynkoUaF36EfcwX95QXqevatVOQ",
  authDomain: "tourism-4-food.firebaseapp.com",
  projectId: "tourism-4-food",
  storageBucket: "tourism-4-food.appspot.com",
  messagingSenderId: "3518250039",
  appId: "1:3518250039:web:47e86581e7aa3ca63193b2",
  measurementId: "G-M8G2PMJYNZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
