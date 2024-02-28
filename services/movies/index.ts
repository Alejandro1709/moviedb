import { ICreateMovie } from '@/types/movie'
import axios from 'axios'

export const getMovies = async () => {
	try {
		const { data } = await axios.get('http://localhost:3000/api/movies')
		return data
	} catch (error) {
		console.log(error)
	}
}

export const createMovie = async (params: ICreateMovie) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	try {
		const { data } = await axios.post(
			'http://localhost:3000/api/movies',
			params,
			config,
		)

		return data
	} catch (error) {
		console.log(error)
	}
}
