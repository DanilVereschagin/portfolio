import { Link } from '../components/Link/Link';
import { memo } from 'react';
import { projects } from '../../shared/constant/projects';

const Projects = memo(() => {
	return (
		<div className='mt-10 p-2'>
			<div className='flex flex-col gap-4'>
				{projects.map((project) => (
					<>
						<div className='bg-gray-950 rounded-xl p-4 flex flex-col md:flex-row gap-4 lg:w-[80%]'>
							<img className='w-full md:w-[40%]' src={project.image} alt='' />
							<div className='bg-white md:w-0.5 ' />
							<div className='flex flex-col gap-4 justify-center lg:justify-center-safe p-2 lg:w-full'>
								<h1 className='text-white text-2xl lg:text-5xl font-bold'>
									{project.title}
								</h1>
								<p className='text-white lg:text-2xl'>{project.description}</p>
								<p className='text-white lg:text-2xl'>
									Технологии: {project.technologies}
								</p>
								<Link
									className='text-center font-bold w-[120px]'
									url='#'
									title='Перейти'
								/>
							</div>
						</div>
						<div className='bg-white h-0.5 md:h-0 ' />
					</>
				))}
			</div>
		</div>
	);
});

export default Projects;
