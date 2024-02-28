import Movies from '@/components/movies'
import Navbar from '@/components/navbar'

export default function Home() {
	return (
		<main className='flex flex-col'>
			<Navbar />
			<section>
				<Movies />
			</section>
		</main>
	)
}
