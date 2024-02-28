import Movies from '@/components/movies'
import { ModeToggle } from '@/components/toggler'

export default function Home() {
	return (
		<main className='flex flex-col'>
			<nav className='flex flex-row self-end justify-end p-3'>
				<ModeToggle />
			</nav>
			<section>
				<Movies />
			</section>
		</main>
	)
}
