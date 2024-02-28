'use client'

import { useEffect, useState } from 'react'
import Movie from './movie'
import IMovie from '@/types/movie'
import { useMoviesStore } from '@/stores/moviesStore'
import Loader from './loader'

function Movies() {
	const [movies, setMovies] = useState<IMovie[]>([])
	const loadedMovies = useMoviesStore((state) => state.getMovies)

	const handleFetchMovies = async () => {
		const movs = await loadedMovies()
		setMovies(movs as IMovie[])
	}

	useEffect(() => {
		const interval = setTimeout(() => {
			handleFetchMovies()
		}, 2000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<section className='flex justify-center z-40 flex-wrap gap-4 mt-2'>
			{movies && movies.length > 0 ? (
				movies.map((movie) => <Movie key={movie.id} movie={movie} />)
			) : (
				<Loader />
			)}
		</section>
	)
}

export default Movies
