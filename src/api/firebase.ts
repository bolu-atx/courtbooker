import firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from '../configs/config';

try {
	firebase.initializeApp(firebaseConfig);
}
catch (err: any) {
	if (!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack);
	}
}

export const auth = firebase.auth();