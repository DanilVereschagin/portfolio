import { Link } from '../Link/Link';

export const Header = () => {
	return (
		<div className='m-4 flex items-center justify-center-safe md:justify-start gap-2 sticky top-4 z-40'>
			<Link url='/' title='Главная' />
			<Link url='about' title='Обо мне' />
			<Link url='skills' title='Навыки' />
			<Link url='projects' title='Проекты' />
		</div>
	);
};
