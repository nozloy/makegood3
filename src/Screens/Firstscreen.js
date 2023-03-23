import React from 'react'
import { Accord } from '../Components/Accordion.tsx'

const Firstscreen = () => {
	return (
		<div>
			<div className='p-3 pt-1 neo bg-slate-700 rounded-xl backdrop-blur-lg bg-slate-900/30 z-10 divide-y divide-gray-400'>
				<div className='text-white text-xl pb-2'>Акции</div>
				<div className='text-white text-md pt-2'>
					Скидка новым клиентам по промокоду «Гудсайт»!
				</div>
			</div>
			<div className='p-3 mt-5 neo bg-slate-700 rounded-xl backdrop-blur-lg bg-slate-900/30 z-10 divide-y divide-gray-400 h-60'>
				<Accord />
			</div>
		</div>
	)
}

export default Firstscreen
