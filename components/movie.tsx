'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import { Badge } from './ui/badge'
import IMovie from '@/types/movie'

type MovieProps = {
	movie: IMovie
}

function Movie({ movie }: MovieProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{movie.title}</CardTitle>
				<CardDescription>
					{movie.release_year} movie | {Math.floor(movie.duration / 60)}h long
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant='secondary' className='w-full'>
							Details
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>{movie.title}</DialogTitle>
							<DialogDescription>
								Movie - {movie.release_year}
							</DialogDescription>
						</DialogHeader>
						<DialogDescription className='flex flex-col gap-4'>
							<div className='flex justify-between items-center'>
								<h2>Generos:</h2>

								<div className='flex gap-2'>
									{movie.genres.map((g) => (
										<Badge variant='outline' key={g.id}>
											{g.description}
										</Badge>
									))}
								</div>
							</div>
							<div className='flex justify-between items-center'>
								<h2>Actores:</h2>

								<div className='flex gap-2'>
									{movie.actors.map((a) => (
										<Badge key={a.id}>
											{a.name} {a.last_name}
										</Badge>
									))}
								</div>
							</div>
						</DialogDescription>
					</DialogContent>
				</Dialog>
			</CardFooter>
		</Card>
	)
}

export default Movie
