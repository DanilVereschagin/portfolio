import { SkillsButton } from '../Button/SkillsButton';
import { useSkillsStore } from '../../../shared/store/skills';

const SkillsTab = () => {
	const { activeTab, setActiveTab } = useSkillsStore();

	return (
		<div className='flex gap-4 bg-transparent text-lg justify-center md:justify-start'>
			<SkillsButton
				name='Уровень навыков'
				tab='level'
				active={activeTab}
				action={setActiveTab}
			/>
			<SkillsButton
				name='Категории'
				tab='category'
				active={activeTab}
				action={setActiveTab}
			/>
		</div>
	);
};

export default SkillsTab;
