import SkillsLevelList from '../components/List/SkillsLevelList';
import SkillsTab from '../components/Tab/SkillsTab';
import { useSkillsStore } from '../../shared/store/skills';
import { useMemo } from 'react';
import SkillsTypeList from '../components/List/SkillsTypeList';

const Skills = () => {
	const activeTab = useSkillsStore((state) => state.activeTab);

	return useMemo(
		() => (
			<div className='flex flex-col gap-4 bg-transparent'>
				<SkillsTab />
				{activeTab === 'level' && <SkillsLevelList />}
				{activeTab === 'category' && <SkillsTypeList />}
			</div>
		),
		[activeTab]
	);
};

export default Skills;
