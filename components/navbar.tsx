'use client'

import { useMoviesStore } from '@/stores/moviesStore'
import { ModeToggle } from './toggler'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import MovieForm from './movie-form'

function Navbar() {
	const movies = useMoviesStore((state) => state.movies)

	return (
		<nav className='flex flex-row self-end justify-end gap-4 p-3'>
			<Dialog>
				<DialogTrigger asChild>
					<Button disabled={movies.length === 0}>Add Movie</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create A Movie</DialogTitle>
					</DialogHeader>
					<MovieForm />
				</DialogContent>
			</Dialog>
			<ModeToggle />
		</nav>
	)
}

export default Navbar
