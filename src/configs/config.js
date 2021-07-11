const site = {
	title: process.env.REACT_APP_SITE_NAME ? process.env.REACT_APP_SITE_NAME : 'Courtbooker',
	tagline: process.env.REACT_APP_TAGLINE ? process.env.REACT_APP_TAGLINE : 'A free, open source, and simple way to book court dates',
	logo_url: "logo.png",
	env: process.env.NODE_ENV ? process.env.NODE_ENV : null
}

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// OPTIONAL
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID
};


console.log(site);
console.log(firebaseConfig);

const navigation = [
	{
		label: "Home",
		link: "/",
		desc: "Homepage"
	},
	{
		label: "Bookings",
		link: "/",
		desc: "View current bookings",
	},
	{
		label: "Courts",
		link: "courts",
		desc: "View available courts"
	},
	{
		label: "Players",
		link: "players",
		desc: "View current players"
	}
];

export { navigation, firebaseConfig, site };