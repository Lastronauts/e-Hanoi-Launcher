import { getApps, initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';

if (getApps().length === 0) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_API_ID,
    measurementId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_MEASUREMENT_ID,
  });
}

export const auth = getAuth();

export const logout = () => {
  signOut(auth).catch((error) => {
    alert(error);
  });
};
