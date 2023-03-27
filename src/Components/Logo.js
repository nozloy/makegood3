import React from 'react'
import logo from '../Images/mglogo.svg'

const Logo = () => {
	return (
		<div className='p-5 pl-10 rounded-2xl backdrop-blur-lg z-10 w-64'>
			<img src={logo} alt='Logo' className='w-full mx-auto'></img>
		</div>
	)
}

export default Logo
