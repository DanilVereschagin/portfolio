import { cn } from '../../shared/lib/utils';
import MainCard from '../components/Card/MainCard';
import classes from '../components/Card/MainCard.module.scss';

const Home = () => {
	return (
		<div className={cn(classes.container, 'mt-40')}>
			<MainCard title='Обо мне' info='Контактная информация' url='about' />
			<MainCard
				title='Навыки'
				info='Информация о навыках (изученных технологиях)'
				url='skills'
			/>
			<MainCard
				title='Проекты'
				info='Информация о проектах и используемых технологиях'
				url='projects'
			/>
		</div>
	);
};

export default Home;
