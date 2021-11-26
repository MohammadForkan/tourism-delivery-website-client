console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// const firebaseConfig = {
//   apiKey: "AIzaSyBTQufB3AXl4UXJpYd2pm9FD2cDcro5N3w",
//   authDomain: "genius-car-mechanics-4c847.firebaseapp.com",
//   projectId: "genius-car-mechanics-4c847",
//   storageBucket: "genius-car-mechanics-4c847.appspot.com",
//   messagingSenderId: "1081035222571",
//   appId: "1:1081035222571:web:bbd180b8c3db6475e9046e"
// };

export default firebaseConfig;