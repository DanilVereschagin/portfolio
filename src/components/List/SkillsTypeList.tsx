import { memo } from 'react';
import { skills, types } from '../../../shared/constant/skills';
import type { skillType } from '../../../shared/types/types';

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
						<h1 className='text-white text-2xl'>
							{type[0].toUpperCase() + type.slice(1)}
						</h1>
						<div className='flex flex-row gap-4 flex-wrap'>
							{groupByType[`${type}`].map((skill: skillType) => (
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
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default SkillsTypeList;
