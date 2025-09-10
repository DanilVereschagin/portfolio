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
			<Route key={''} path='' Component={Home} />
			<Route key={'about'} path='about' Component={About} />
			<Route key={'skills'} path='skills' Component={Skills} />
			<Route key={'projects'} path='projects' Component={Projects} />
			<Route key={'projects/*'} path='/projects/*' Component={Project} />
			<Route key={'*'} path='*' Component={NotFound} />
		</Routes>
	);
};

export default Router;
