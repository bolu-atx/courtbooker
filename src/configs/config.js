const site = {
	title: process.env.REACT_APP_SITE_NAME ? process.env.REACT_APP_SITE_NAME : 'Courtbooker',
	tagline: process.env.REACT_APP_TAGLINE ? process.env.REACT_APP_TAGLINE : 'A free, open source, and simple way to book court dates',
	logo_url: "logo.png",
	env: process.env.NODE_ENV ? process.env.NODE_ENV : null
}

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

export { navigation, site };