import { AiFillPhone, AiFillInstagram } from 'react-icons/ai'
import { FaTelegram, FaVk } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFillPhoneFill } from 'react-icons/bs'

const Contacts = () => {
	return (
		<div className='neo rounded-xl p-2 mt-5 backdrop-blur-sm'>
			<header className='text-3xl font-bold text-white pb-5'>Контакты</header>
			<div className='grid grid-cols-2'>
				<button className='buttons'>
					<BsFillPhoneFill className='icon' />
					<div className='mx-auto text-sm'>Мобильный</div>
				</button>
				<button className='buttons'>
					<AiFillPhone className='icon' />
					<div className='mx-auto text-sm'>Офис</div>
				</button>
				<button className='buttons'>
					<FaTelegram className='icon' />
					<div className='mx-auto text-sm'>Telegram</div>
				</button>
				<button className='buttons'>
					<IoLogoWhatsapp className='icon' />
					<div className='mx-auto text-sm'>Whats'Up</div>
				</button>
				<button className='buttons'>
					<AiFillInstagram className='icon' />
					<div className='mx-auto text-sm'>Instagram</div>
				</button>
				<button className='buttons'>
					<FaVk className='icon fill-current' />
					<div className='mx-auto text-sm'>Vkontakte</div>
				</button>
			</div>
		</div>
	)
}

export default Contacts
