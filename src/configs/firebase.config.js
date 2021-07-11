// Firebase Config
export default firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	projectId: process.env.FIREBASE_PROJECT_ID,
	databaseURL: process.env.FIREBASE_DB_URL,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	// OPTIONAL
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID
};