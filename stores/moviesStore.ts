import { getMovies } from '@/services/movies'
import IMovie from '@/types/movie'
import { create } from 'zustand'

type MoviesState = {
	movies: IMovie[]
	isLoading: boolean
	getMovies: () => Promise<IMovie[] | MoviesState>
	setMovies: (movies: IMovie[]) => void
	setIsLoading: (loading: boolean) => void
}

export const useMoviesStore = create<MoviesState>((set, get) => ({
	movies: [],
	isLoading: false,
	getMovies: async () => {
		const currentMovies = get()

		if (currentMovies.movies.length !== 0) return currentMovies

		const movies: IMovie[] = await getMovies()

		set({ movies })

		return movies
	},
	setMovies: (movies: IMovie[]) => set(() => ({ movies })),
	setIsLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
}))
