import { memo } from 'react';
import { skills, levels } from '../../shared/constant/skills';
import type { skillType } from '../../shared/types/types';
import {LiquidGlassCard} from "../ui-layouts/LiquidGlassCard.tsx";
import {SkillCard} from "../Card/SkillCard.tsx";

type GroupByLevel = {
	[key: string]: skillType[];
};

const SkillsLevelList = memo(() => {
	const groupByLevel: GroupByLevel = skills.reduce((acc, item) => {
		if (!acc[item.level]) {
			acc[item.level] = [];
		}
		acc[item.level].push(item);
		return acc;
	}, {} as GroupByLevel);

	return (
		<div className='mt-10 p-2'>
			<div className='flex flex-col gap-4'>
				{levels.map((level) => (
					<LiquidGlassCard
                        shadowIntensity='sm'
                        borderRadius='24px'
                        glowIntensity='none'
                        blurIntensity={"sm"}
                        draggable={false}
						key={level.en}
						className='bg-white/8 rounded-xl p-4 flex flex-col gap-4'
					>
						<h1 className='text-white text-2xl text-center md:text-start z-100'>
							{level.ru}
						</h1>
						<div className='flex flex-row gap-4 flex-wrap justify-center md:justify-start z-100'>
							{groupByLevel[`${level.en}`].map((skill: skillType) => (
									<SkillCard
										key={skill.id}
                                        icon={skill.icon}
                                        title={skill.title}
                                    />
							))}
						</div>
					</LiquidGlassCard>
				))}
			</div>
		</div>
	);
});

export default SkillsLevelList;
