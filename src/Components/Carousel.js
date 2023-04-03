import Card from './Card'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import goods from '../Configs/goods.json'

function Carousel() {
	// const scrollLeft = () => {
	// 	document.getElementById('content').scrollLeft -= 255
	// }
	// const scrollRight = () => {
	// 	document.getElementById('content').scrollLeft += 255
	// }

	return (
		<div>
			<div className='text-center text-blue-500 pt-1 text-2xl font-bold'>
				Услуги
			</div>
			<div
				id='content'
				className='carousel p-2 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar'
			>
				{goods.map((good, i) => {
					return (
						<div key={i}>
							<Card
								goodCaption={good.caption ? good.caption : ''}
								goodDescription={good.description ? good.description : ''}
								goodImage={good.image ? good.image : ''}
							/>
						</div>
					)
				})}
			</div>
			{/* <div className='flex mx-auto items-center justify-between  '>
				<button onClick={scrollLeft} className='p-2 m-2 rounded-full bg-white'>
					<FiChevronLeft />
				</button>

				<button onClick={scrollRight} className='p-2 m-2 rounded-full bg-white'>
					<FiChevronRight />
				</button>
			</div> */}
		</div>
	)
}

export default Carousel
