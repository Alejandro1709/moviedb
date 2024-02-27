export default interface IMovie {
	id: string
	title: string
	slug: string
	release_year: number
	duration: number
	genres: [
		{
			id: number
			description: string
		},
	]
	actors: [
		{
			id: string
			name: string
			last_name: string
		},
	]
}
