import SkillsLevelList from '../components/List/SkillsLevelList';
import SkillsTab from '../components/Tab/SkillsTab';
import { useSkillsStore } from '../../shared/store/skills';

const Skills = () => {
	const { activeTab } = useSkillsStore();

	return (
		<div className='flex flex-col gap-4 bg-transparent'>
			<SkillsTab />
			{activeTab === 'level' && <SkillsLevelList />}
			{activeTab === 'category' && (
				<h1 className='text-white'>По категориям</h1>
			)}
		</div>
	);
};

export default Skills;
