import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import  Card from './Card'

const Accordion = ({ i, expanded, setExpanded }) => {
	const isOpen = i === expanded
	// By using `AnimatePresence` to mount and unmount the contents, we can animate
	// them in and out while also only rendering the contents of open accordions
	return (
		<>
			<motion.header
				className={ isOpen ? 'text-xl text-slate-900 rounded-xl' : 'text-xl text-white rounded-xl' }
				initial={false}
				animate={{backgroundColor: isOpen ? 'rgb(226 232 240 / var(--tw-bg-opacity))' : 'rgb(51 65 85 / var(--tw-bg-opacity))' }}
				onClick={() => setExpanded(isOpen ? false : i)}
			>Визитки </motion.header>
			<AnimatePresence initial={false} mode='wait'>
				{isOpen && (
					<motion.section
						key="content"
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto', border: 'none' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.5 }}
					>
						<motion.div
    						variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    						transition={{ duration: 1.8 }}
    						className="content-placeholder">
								<Card />
							
  						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	)
}

export const Accord = () => {
	// This approach is if you only want max one section open at a time. If you want multiple
	// sections to potentially be open simultaneously, they can all be given their own `useState`.
	const [expanded, setExpanded] = useState<false | number>(0);

	return accordionIds.map((i) => (
		<Accordion i={i} expanded={expanded} setExpanded={setExpanded} key={'value'+i} />
	))
}

const accordionIds = [0, 1, 2, 3]
