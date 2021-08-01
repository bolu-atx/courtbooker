import firebase from "firebase/app";
import "firebase/auth"
import { firebaseConfig } from '../configs/config';

try {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
}
catch (err: any) {
	if (!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack);
	}
	else {
		console.error(err);
	}
}

export const auth = firebase.auth();