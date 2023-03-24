import './App.css'
import Geometrynodes from './Components/Geometrynodes'
import Logo from './Components/Logo'
import Firstscreen from './Screens/Firstscreen'

function App() {
	return (
		<div className='App'>
			<div className='overscroll-none bg-slate-400 snap-y snap-mandatory overflow-scroll h-screen scroll-smooth'>
				<div className='App-header snap-start min-h-screen z-20'>
					<Geometrynodes />
					<Logo />
				</div>
				<div className='snap-start min-h-screen p-5'>
					<Firstscreen />
				</div>
			</div>
		</div>
	)
}

export default App
