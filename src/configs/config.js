import {
	HomeOutlined,
	UnorderedListOutlined,
	LayoutOutlined,
	UserOutlined,
	LogoutOutlined
} from "@ant-design/icons";


const site = {
	title: process.env.REACT_APP_SITE_NAME ? process.env.REACT_APP_SITE_NAME : 'Courtbooker',
	tagline: process.env.REACT_APP_TAGLINE ? process.env.REACT_APP_TAGLINE : 'A free, open source, and simple way to book court dates',
	logo_url: "logo.png",
	env: process.env.NODE_ENV ? process.env.NODE_ENV : null
}

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	// OPTIONAL
	messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: "G-WY0V1EELZB"
};


console.log(site);
console.log(firebaseConfig);

const navigation = [
	{
		label: "Home",
		link: "/",
		desc: "Homepage",
		icon: <HomeOutlined />
	},
	{
		label: "Bookings",
		link: "/",
		desc: "View current bookings",
		icon: <UnorderedListOutlined />
	},
	{
		label: "Courts",
		link: "courts",
		desc: "View available courts",
		icon: <LayoutOutlined />
	},
	{
		label: "Players",
		link: "players",
		desc: "View current players",
		icon: <UserOutlined />
	},

];

export { navigation, firebaseConfig, site };