import { initializeApp } from 'firebase/app';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhifGwxoOZlWJKpluYVf1ciXugr_aXIJ0',
  authDomain: 'dev-candidate-hub.firebaseapp.com',
  projectId: 'dev-candidate-hub',
  storageBucket: 'dev-candidate-hub.firebasestorage.app',
  messagingSenderId: '953502057619',
  appId: '1:953502057619:web:1a5f2b56e3ec64b7c9f966',
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});
