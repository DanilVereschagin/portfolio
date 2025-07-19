import { useState } from 'react';
import { cn } from '../../shared/lib/utils';

const Skills = () => {
	const [activeTab, setActiveTab] = useState('level');

	return (
		<div className='flex flex-col gap-4 bg-transparent'>
			<div className='flex gap-4 bg-transparent text-lg'>
				<button
					type='submit'
					className={cn(
						'border-b border-white/45 text-white p-2 hover:shadow-lg/30 hover:shadow-purple-400 hover:bg-transparent',
						{
							'shadow-lg/30 shadow-purple-400 bg-transparent':
								activeTab === 'level',
						}
					)}
					onClick={() => {
						setActiveTab('level');
					}}
				>
					Уровень навыков
				</button>
				<button
					type='submit'
					className={cn(
						'border-b border-white/45 text-white p-2 hover:shadow-lg/30 hover:shadow-purple-400 hover:bg-transparent',
						{
							'shadow-lg/30 shadow-purple-400 hover:bg-transparent':
								activeTab === 'category',
						}
					)}
					onClick={() => {
						setActiveTab('category');
					}}
				>
					Категории
				</button>
			</div>
			<div></div>
		</div>
	);
};

export default Skills;
