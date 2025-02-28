import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVtnxe_zFcpbk0CgzKvJqE387eC0B26cI",
    authDomain: "mercaemprende-6d859.firebaseapp.com",
    projectId: "mercaemprende-6d859",
    storageBucket: "mercaemprende-6d859.appspot.com",
    messagingSenderId: "983784132888",
    appId: "1:983784132888:web:d30ecf1205a6b9efb74e6d",
    measurementId: "G-TBCE1W7KPY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAVtnxe_zFcpbk0CgzKvJqE387eC0B26cI",
//   authDomain: "mercaemprende-6d859.firebaseapp.com",
//   projectId: "mercaemprende-6d859",
//   storageBucket: "mercaemprende-6d859.appspot.com",
//   messagingSenderId: "983784132888",
//   appId: "1:983784132888:web:d30ecf1205a6b9efb74e6d",
//   measurementId: "G-TBCE1W7KPY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { analytics }