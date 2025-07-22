import { skills } from '../../../shared/constant/skills';

const SkillsLevelList = () => {
	return (
		<div className='mt-10 p-2'>
			<div className='grid lg:grid-cols-2 gap-4'>
				{skills.find((skill) => skill.level === 'advanced') && (
					<div className='bg-gray-950 rounded-xl p-4 flex flex-col gap-4'>
						<h1 className='text-white text-2xl'>Продвинутый</h1>
						<div className='flex flex-row gap-4 flex-wrap'>
							{skills.map((skill) => {
								return (
									skill.level === 'advanced' && (
										<div
											key={skill.id}
											className='bg-white w-[100px] h-[110px] 
						flex flex-col items-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30 
						transform transition-all duration-300 hover:-translate-y-1'
										>
											<img
												width={80}
												height={80}
												src={skill.icon}
												alt={skill.title}
											/>
											<b>{skill.title}</b>
										</div>
									)
								);
							})}
						</div>
					</div>
				)}
				{skills.find((skill) => skill.level === 'average') && (
					<div className='bg-gray-950 rounded-xl p-4 flex flex-col gap-4'>
						<h1 className='text-white text-2xl'>Средний</h1>
						<div className='flex flex-row gap-4'>
							{skills.map((skill) => {
								return (
									skill.level === 'average' && (
										<div
											key={skill.id}
											className='bg-white w-[100px] h-[110px] 
						flex flex-col items-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30 
						transform transition-all duration-300 hover:-translate-y-1'
										>
											<img
												width={80}
												height={80}
												src={skill.icon}
												alt={skill.title}
											/>
											<b>{skill.title}</b>
										</div>
									)
								);
							})}
						</div>
					</div>
				)}
				{skills.find((skill) => skill.level === 'basic') && (
					<div className='bg-gray-950 rounded-xl p-4'>
						<h1 className='text-white text-2xl'>Базовый</h1>
						<div className='flex flex-row gap-4'>
							{skills.map((skill) => {
								return (
									skill.level === 'basic' && (
										<div
											key={skill.id}
											className='bg-white w-[100px] h-[110px] 
						flex flex-col items-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30 
						transform transition-all duration-300 hover:-translate-y-1'
										>
											<img
												width={80}
												height={80}
												src={skill.icon}
												alt={skill.title}
											/>
											<b>{skill.title}</b>
										</div>
									)
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SkillsLevelList;
