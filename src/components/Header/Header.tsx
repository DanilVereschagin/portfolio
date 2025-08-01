import { Link } from '../Link/Link';

export const Header = () => {
	return (
		<div className='m-4 flex items-center gap-2 sticky top-4 z-40'>
			<Link url='portfolio/' title='Главная' />
			<Link url='portfolio/about' title='Обо мне' />
			<Link url='portfolio/skills' title='Навыки' />
			<Link url='portfolio/projects' title='Проекты' />
		</div>
	);
};
