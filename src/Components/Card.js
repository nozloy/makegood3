import image from '../Images/visitcards.jpg'
import { Button } from '@material-tailwind/react'

function Card() {
	return (
		<>
			<div className=' bg-white w-60 h-full m-2 rounded-lg shadow-lg'>
				<div className='top'>
					<img
						className='w-full h-52 object-cover p-2 rounded-2xl'
						src={image}
						alt='img'
					/>
				</div>
				<div className=' flex flex-col justify-center items-start p-3'>
					<div className='title font-semibold text-xl my-1 pl-2'>Визитки</div>
					<div className='category text-sm font-light my-1 text-left pl-2'>
						<p>односторонние</p> <p>двухсторонние</p> <p>крафтовая бумага</p>
						<p>дизайнерская бумага</p>
					</div>
					<div className='flex items-end my-2 w-full'>
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
