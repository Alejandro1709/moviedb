import prisma from '@/lib/db'
import { Movies } from '@prisma/client'
import slugify from 'slugify'

export async function GET() {
	const movies = await prisma.movies.findMany({
		include: {
			genres: true,
			actors: true,
		},
	})

	return Response.json(movies)
}

export async function POST(request: Request) {
	const body = await request.json()

	const { title, release_year, duration, genres, actors } = body

	const newMovie: Movies = await prisma.movies.create({
		data: {
			title,
			slug: slugify(title),
			release_year,
			duration,
		},
	})

	return Response.json(newMovie)
}
