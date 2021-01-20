import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCzAYP4aONvuM-prPz7pI95RQgd_XFNM38',
  authDomain: 'linkedin-clone-43c43.firebaseapp.com',
  projectId: 'linkedin-clone-43c43',
  storageBucket: 'linkedin-clone-43c43.appspot.com',
  messagingSenderId: '176406922968',
  appId: '1:176406922968:web:aaf1041279d6f6de5ef9ad',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
