import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

const Router = () => {
	return (
		<Routes>
			<Route path='/' Component={Home} />
			<Route path='/about' Component={About} />
			<Route path='/skills' Component={Skills} />
			<Route path='/projects' Component={Projects} />
		</Routes>
	);
};

export default Router;
