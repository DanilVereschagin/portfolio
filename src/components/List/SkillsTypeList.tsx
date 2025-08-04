import { memo } from 'react';
import { skills, types } from '../../../shared/constant/skills';
import type { skillType } from '../../../shared/types/types';
import * as motion from 'motion/react-client';

type GroupByType = {
	[key: string]: skillType[];
};

const SkillsTypeList = memo(() => {
	const groupByType: GroupByType = skills.reduce((acc, item) => {
		if (!acc[item.type]) {
			acc[item.type] = [];
		}
		acc[item.type].push(item);
		return acc;
	}, {} as GroupByType);

	return (
		<div className='mt-10 p-2'>
			<div className='flex flex-col gap-4'>
				{types.map((type) => (
					<div
						key={type}
						className='bg-gray-950 rounded-xl p-4 flex flex-col gap-4'
					>
						<h1 className='text-white text-2xl text-center md:text-start'>
							{type[0].toUpperCase() + type.slice(1)}
						</h1>
						<div className='flex flex-row gap-4 flex-wrap justify-center md:justify-start'>
							{groupByType[`${type}`].map((skill: skillType) => (
								<motion.div
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.5,
										scale: {
											type: 'spring',
											visualDuration: 0.5,
											bounce: 0.5,
										},
									}}
								>
									<div
										key={skill.id}
										className='bg-white w-[100px] h-[110px] 
						flex flex-col items-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30 
						transform transition-all duration-300 hover:-translate-y-1'
									>
										<img
											width={90}
											height={90}
											src={skill.icon}
											alt={skill.title}
											loading='lazy'
										/>
										<b>{skill.title}</b>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default SkillsTypeList;
