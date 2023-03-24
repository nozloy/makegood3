import { Fragment, useState } from 'react'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react'

export default function Accord() {
	const [open, setOpen] = useState(1)

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value)
	}

	return (
		<Fragment>
			<Accordion open={open === 1}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(1)}>
					Визитки
				</AccordionHeader>
				<AccordionBody className='AccDescription'></AccordionBody>
			</Accordion>
			<Accordion open={open === 2}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(2)}>
					Листовки
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>
			<Accordion open={open === 3}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(3)}>
					Евробуклеты
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>
			<Accordion open={open === 4}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(4)}>
					Афиши
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>
			<Accordion open={open === 5}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(5)}>
					Пластиковые таблички
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>

			<Accordion open={open === 6}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(6)}>
					Информационные стенды
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>
			<Accordion open={open === 7}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(7)}>
					Штампы
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>
			<Accordion open={open === 8}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(8)}>
					Печати
				</AccordionHeader>
				<AccordionBody className='AccDescription'>Текст</AccordionBody>
			</Accordion>
		</Fragment>
	)
}
