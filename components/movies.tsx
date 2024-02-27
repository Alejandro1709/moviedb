import { getMovies } from '@/services/movies'
import Movie from './movie'
import IMovie from '@/types/movie'

async function Movies() {
	const movies: IMovie[] = await getMovies()

	return (
		<section className='flex justify-center z-40 flex-wrap gap-4 mt-2'>
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</section>
	)
}

export default Movies
