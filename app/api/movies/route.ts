import prisma from '@/lib/db'

export async function GET() {
	const movies = await prisma.movies.findMany({
		include: {
			genres: true,
			actors: true,
		},
	})

	return Response.json(movies)
}
