import { Button } from '@material-tailwind/react'

function Card({ goodCaption, goodDescription, goodImage }) {
	return (
		<>
			<div className=' bg-white w-[16rem] h-[29rem] m-2 rounded-2xl shadow-lg flex flex-col'>
				<div className='p-2'>
					<img
						className='w-full h-52 object-cover rounded-xl shadow-md'
						// src={image}
						src={`/images/${goodImage}`}
						alt='img'
					/>
				</div>
				<div className='flex flex-col items-start p-3 h-full justify-between'>
					<div className='font-semibold text-xl my-1 pl-2 text-left'>
						{goodCaption}
					</div>
					<div className='flex-none category text-sm font-light my-1 text-left pl-2'>
						{goodDescription.map((desc, i) => {
							return <p key={i}>{desc}</p>
						})}
					</div>
					<div className='my-2 w-full'>
						<Button
							fullWidth
							variant='outlined'
							className='border px-3 py-1 text-sm rounded-lg '
						>
							Заказать
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Card
