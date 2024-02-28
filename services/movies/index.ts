import { ICreateMovie } from '@/types/movie'
import axios from 'axios'

export const getMovies = async () => {
	try {
		const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URI as string)
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
			process.env.NEXT_PUBLIC_API_URI as string,
			params,
			config,
		)

		return data
	} catch (error) {
		console.log(error)
	}
}
