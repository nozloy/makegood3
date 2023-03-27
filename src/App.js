import './App.css'
import Geometrynodes from './Components/Geometrynodes'
import Logo from './Components/Logo'
import Firstscreen from './Screens/Firstscreen'
import Secondscreen from './Screens/Secondscreen'

function App() {
	return (
		<div className='App'>
			<div className='overscroll-none  snap-y snap-mandatory overflow-scroll h-screen scroll-smooth'>
				<div className='App-header snap-start min-h-screen z-20'>
					<Geometrynodes />
					<Logo />
				</div>
				<div className='snap-start min-h-screen p-5'>
					<Firstscreen />
				</div>
				<div className='snap-start bg-blue-gray-800 min-h-screen p-5'>
					<Secondscreen />
				</div>
			</div>
		</div>
	)
}

export default App
