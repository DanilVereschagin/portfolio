import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

const Router = () => {
	return (
		<Routes>
			<Route path='portfolio/' Component={Home} />
			<Route path='portfolio/about' Component={About} />
			<Route path='portfolio/skills' Component={Skills} />
			<Route path='portfolio/projects' Component={Projects} />
		</Routes>
	);
};

export default Router;
