import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Skills = lazy(() => import('../../pages/Skills'));
const Projects = lazy(() => import('../../pages/Projects'));
const Project = lazy(() => import('../../pages/Project'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const Router = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<Routes>
				<Route path='' Component={Home} />
				<Route path='about' Component={About} />
				<Route path='skills' Component={Skills} />
				<Route path='projects' Component={Projects} />
				<Route path='/projects/*' Component={Project} />
				<Route path='*' Component={NotFound} />
			</Routes>
		</Suspense>
	);
};

export default Router;
