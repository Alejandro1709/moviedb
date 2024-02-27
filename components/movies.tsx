import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

function Movies() {
	return (
		<div className='flex justify-center z-40 flex-wrap gap-4'>
			<Card>
				<CardHeader>
					<CardTitle>Nombre Pelicula</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button className='w-full'>Details</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Nombre Pelicula</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button className='w-full'>Details</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Nombre Pelicula</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button className='w-full'>Details</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Nombre Pelicula</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button className='w-full'>Details</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Movies
