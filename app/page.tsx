import Movies from '@/components/movies'
import { ModeToggle } from '@/components/toggler'

export default function Home() {
	return (
		<main className=''>
			<div className='flex flex-row self-end justify-end p-3'>
				<ModeToggle />
			</div>
			<Movies />
		</main>
	)
}
