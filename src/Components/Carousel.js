import Card from './Card'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

function Carousel() {
	const scrollLeft = () => {
		document.getElementById('content').scrollLeft -= 255
	}
	const scrollRight = () => {
		document.getElementById('content').scrollLeft += 255
	}

	return (
		<div className='relative'>
			<div
				id='content'
				className='carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar'
			>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
			</div>
			<div className='flex mx-auto items-center justify-between  '>
				<button onClick={scrollLeft} className='p-2 m-2 rounded-full bg-white'>
					<FiChevronLeft />
				</button>
				<div className='text-center text-blue-500 py-4 text-2xl font-bold'>
					Услуги
				</div>
				<button onClick={scrollRight} className='p-2 m-2 rounded-full bg-white'>
					<FiChevronRight />
				</button>
			</div>
		</div>
	)
}

export default Carousel
