import { memo, useEffect, useState } from 'react';
import { projects } from '../../shared/constant/projects';
import NotFound from './NotFound';
import { Title } from '../components/Project/Title';
import type { projectType } from '../../shared/types/types';
import { Tools } from '../components/Project/Tools';

const Project = () => {
	const [projectName, setProjectName] = useState('');
	const [project, setProject] = useState<projectType>({
		id: 0,
		title: '',
		description: '',
		image: '',
		url: '',
		github: '',
		tools: [],
		images_gallery: '',
	});

	useEffect(() => {
		const project = projects.find(
			(project) => project.url === window.location.pathname.split('/').pop()
		);
		if (project) {
			setProjectName(project.title);
			setProject(project);
		}
	}, []);

	if (!projectName) {
		return <NotFound />;
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<Title
				name={project.title}
				description={project.description}
				github={project.github}
				className='m-4'
			/>
			<img
				className='w-full md:w-[80%] lg:w-[60%]'
				src={'../' + project.image}
				alt={projectName}
			/>
			<Tools
				tools={project.tools}
				className='m-4 w-full md:w-[80%] lg:w-[60%]'
			/>
		</div>
	);
};

export default Project;
