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

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	// OPTIONAL
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTBiY_VPKk16dLFh49gkkTO2btriIZ8Hc",
  authDomain: "courtbooker-87dd5.firebaseapp.com",
  projectId: "courtbooker-87dd5",
  storageBucket: "courtbooker-87dd5.appspot.com",
  messagingSenderId: "1087823284602",
  appId: "1:1087823284602:web:35547d6cf8543ceb50eec3",
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