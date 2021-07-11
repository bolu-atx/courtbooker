const site  = {
	title : process.env.REACT_APP_SITE_NAME,
	tagline: "Booking made easy!",
	logo_url : "logo.png"
}

const navigation = [ 
	{
		label : "Home",
		link : "/",
		desc : "Homepage"
	},
	{
		label : "Bookings",
		link : "/",
		desc : "View current bookings",
	},
	{
		label : "Courts",
		link : "courts",
		desc : "View available courts"
	},
	{
		label : "Players",
		link : "players",
		desc : "View current players"
	}
];

export {navigation, site};