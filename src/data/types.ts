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
	datetime: number
}

export type {Player, Court, Booking};