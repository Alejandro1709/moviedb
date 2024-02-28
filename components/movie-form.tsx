'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createMovie } from '@/services/movies'
import { useMoviesStore } from '@/stores/moviesStore'

const getCurrentYear = () => {
	const today = new Date()
	return today.getFullYear()
}

const formSchema = z.object({
	title: z.string().min(10).max(100),
	year: z.number(),
	duration: z.number(),
	genres: z.string().min(10).max(100),
	actors: z.string().min(10).max(100),
})

function MovieForm() {
	const movies = useMoviesStore((state) => state.movies)
	const setMovies = useMoviesStore((state) => state.setMovies)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			year: getCurrentYear(),
			duration: 0,
			genres: '',
			actors: '',
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const data = await createMovie({
			title: values.title,
			release_year: values.year,
			duration: values.duration,
			genres: values.genres,
			actors: values.actors,
		})

		setMovies([...movies, data])
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Movie Title</FormLabel>
							<FormControl>
								<Input placeholder='Movie Title' {...field} />
							</FormControl>
							<FormDescription>This is your movie title</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='year'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Movie Year</FormLabel>
							<FormControl>
								<Input type='number' placeholder='Movie Year' {...field} />
							</FormControl>
							<FormDescription>This is your movie Year</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='duration'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Movie Duration (minutes)</FormLabel>
							<FormControl>
								<Input type='number' placeholder='Movie Duration' {...field} />
							</FormControl>
							<FormDescription>This is your movie Duration</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='genres'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Movie Genres (separate with comma)</FormLabel>
							<FormControl>
								<Input placeholder='Movie Genres' {...field} />
							</FormControl>
							<FormDescription>These are your movie Genres</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='actors'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Movie Actors (separate with comma)</FormLabel>
							<FormControl>
								<Input placeholder='John Doe,Jane Doe' {...field} />
							</FormControl>
							<FormDescription>These are your movie actors</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}

export default MovieForm
