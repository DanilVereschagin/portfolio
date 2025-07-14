import { Link } from '../Link/Link';

export const Header = () => {
	return (
		<div className='m-4 flex items-center gap-2'>
			<Link url='/' title='Главная' />
			<Link url='about' title='Обо мне' />
			<Link url='skills' title='Навыки' />
			<Link url='projects' title='Проекты' />
		</div>
	);
};
