import React from 'react'
import Carousel from '../Components/Carousel.js'

const Firstscreen = () => {
	return (
		<div>
			<div className='p-3 pt-1 neo rounded-xl backdrop-blur-lg bg-blue-gray-900 z-10 divide-y divide-gray-400'>
				<div className=' text-blue-500 text-2xl font-bold pb-2'>Акции</div>
				<div className='text-gray-50 text-md pt-2'>
					Скидка новым клиентам по промокоду «Гудсайт»!
				</div>
			</div>
			<div className=' pt-1 mt-5 neo bg-blue-gray-900 rounded-xl backdrop-blur-lg z-10 divide-y divide-gray-400  h-full'>
				{/* <Accord /> */}
				<Carousel />
			</div>
		</div>
	)
}

export default Firstscreen
