'use client'

import { useEffect, useState } from 'react'
import Movie from './movie'
import IMovie from '@/types/movie'
import { useMoviesStore } from '@/stores/moviesStore'

function Movies() {
	const [movies, setMovies] = useState<IMovie[]>([])
	const loadedMovies = useMoviesStore((state) => state.getMovies)
	const setLoading = useMoviesStore((state) => state.setIsLoading)

	const handleFetchMovies = async () => {
		setLoading(true)
		const movs = await loadedMovies()
		setMovies(movs as IMovie[])
	}

	useEffect(() => {
		const interval = setTimeout(() => {
			handleFetchMovies()
		}, 2000)

		return () => {
			clearInterval(interval)
			setLoading(false)
		}
	}, [])

	return (
		<section className='flex justify-center z-40 flex-wrap gap-4 mt-2'>
			{movies && movies.length > 0 ? (
				movies.map((movie) => <Movie key={movie.id} movie={movie} />)
			) : (
				<p>Nothing to show...</p>
			)}
		</section>
	)
}

export default Movies
