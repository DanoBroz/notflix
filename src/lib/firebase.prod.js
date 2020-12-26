// import Firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAKkG5bpZ4W_qMPCqm5WqB5Lmh-vVEQWe4',
  authDomain: 'notflix-20253.firebaseapp.com',
  databaseURL: 'notflix-20253',
  projectId: 'notflix-20253.appspot.com',
  storageBucket: '370903696220',
  messagingSenderId: '1:370903696220:web:ab0306fdf3b0c3ece27799',
  appId: 'G-59EMQZ33VX',
};

const firebase = window.firebase.initializeApp(config);
seedDatabase(firebase);

export { firebase };
