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

function Movie() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Nombre Pelicula</CardTitle>
				<CardDescription>Card Description</CardDescription>
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
							<DialogTitle>Nombre Pelicula</DialogTitle>
							<DialogDescription>Genero - Anio</DialogDescription>
						</DialogHeader>
						<DialogDescription className='flex flex-col gap-4'>
							<div className='flex justify-between items-center'>
								<h2>Generos:</h2>

								<div className='flex gap-2'>
									<Badge variant='outline'>Accion</Badge>
									<Badge variant='outline'>Accion</Badge>
									<Badge variant='outline'>Accion</Badge>
								</div>
							</div>
							<div className='flex justify-between items-center'>
								<h2>Actores:</h2>

								<div className='flex gap-2'>
									<Badge>Accion</Badge>
									<Badge>Accion</Badge>
									<Badge>Accion</Badge>
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
