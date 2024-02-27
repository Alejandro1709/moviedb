import axios from 'axios'

export const getMovies = async () => {
	try {
		const { data } = await axios.get('http://localhost:3000/api/movies')
		return data
	} catch (error) {
		console.log(error)
	}
}
