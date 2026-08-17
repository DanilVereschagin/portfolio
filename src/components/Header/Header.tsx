import { Link } from '../Link/Link';

export const Header = () => {
	return (
		<div className='m-4 flex text-white flex-wrap items-center justify-center-safe md:justify-start md:flex-nowrap gap-2 top-4 z-40'>
			<Link url='/' title='Главная' />
			<Link url='about' title='Обо мне' />
			<Link url='skills' title='Навыки' />
            <Link url='projects' title='Коммерческие проекты' />
			<Link url='pet-projects' title='Pet-проекты' />
		</div>
	);
};
