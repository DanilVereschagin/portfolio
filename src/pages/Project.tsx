import { useEffect, useState } from 'react';
import NotFound from './NotFound';
import { Title } from '../components/Project/Title';
import type { projectType } from '../shared/types/types';
import { Tools } from '../components/Project/Tools';
import { Images } from '../components/Project/Images';
import {LiquidGlassCard} from "../components/ui-layouts/LiquidGlassCard.tsx";
import {projects} from "../shared/constant/projects.ts";

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
		images_gallery: [],
	});

	useEffect(() => {
		const project = projects.find(
			(project) => project.url === window.location.pathname.split('/').pop()
		);

		if (project) {
			setProjectName(project.title);
			setProject(project as projectType);
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
                commerce
			/>
            <LiquidGlassCard
                shadowIntensity='sm'
                borderRadius='24px'
                glowIntensity='none'
                blurIntensity={"sm"}
                className='bg-white/8 rounded-xl p-4 flex w-full md:w-[80%] lg:w-[60%]'
            >
                <img
                    className='w-full rounded-2xl z-100'
                    src={project.image}
                    alt={projectName}
                />
            </LiquidGlassCard>
			<Tools
				tools={project.tools}
				className='m-4 w-full md:w-[80%] lg:w-[60%]'
			/>
            <div className={"flex justify-center w-full md:w-[80%] lg:w-[60%]"}>
                <div className={"grid grid-cols-2 gap-4 center"}>
                    {project.images_gallery.length > 0 && (
                        <Images
                            images={project.images_gallery}
                        />
                    )}
                </div>
            </div>
		</div>
	);
};

export default Project;
