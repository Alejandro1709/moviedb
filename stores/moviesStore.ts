import { getMovies } from '@/services/movies'
import IMovie from '@/types/movie'
import { create } from 'zustand'

type MoviesState = {
	movies: IMovie[]
	getMovies: () => Promise<IMovie[] | MoviesState>
	setMovies: (movies: IMovie[]) => void
}

export const useMoviesStore = create<MoviesState>((set, get) => ({
	movies: [],
	getMovies: async () => {
		const currentMovies = get()

		if (currentMovies.movies.length !== 0) return currentMovies

		const movies: IMovie[] = await getMovies()

		set({ movies })

		return movies
	},
	setMovies: (movies: IMovie[]) => set(() => ({ movies })),
}))
