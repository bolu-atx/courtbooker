type Player = {
	name: string,
	email: string,
}

type Court = {
	id : string,
	location: string
}

type Booking = {
	players: [Player],
	court_id: string,
	start_time: string,
	end_time: string
}

export type {Player, Court, Booking};