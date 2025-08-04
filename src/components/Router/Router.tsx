import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';
import Project from '../../pages/Project';
import NotFound from '../../pages/NotFound';

const Router = () => {
	return (
		<Routes>
			<Route key={'portfolio/'} path='portfolio/' Component={Home} />
			<Route key={'portfolio/about'} path='portfolio/about' Component={About} />
			<Route
				key={'portfolio/skills'}
				path='portfolio/skills'
				Component={Skills}
			/>
			<Route
				key={'portfolio/projects'}
				path='portfolio/projects'
				Component={Projects}
			/>
			<Route
				key={'portfolio/projects/*'}
				path='portfolio/projects/*'
				Component={Project}
			/>
			<Route key={'*'} path='*' Component={NotFound} />
		</Routes>
	);
};

export default Router;
