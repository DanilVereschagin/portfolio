import { cn } from '../shared/lib/utils';
import MainCard from '../components/Card/MainCard';
import classes from '../components/Card/MainCard.module.scss';
import {Album, BrainCircuit, User} from "lucide-react";

const Home = () => {
	return (
		<div className={'center h-full flex flex-row flex-wrap gap-10 items-center justify-center mt-[20%] lg:mt-[10%] md:mt-[20%] mb-[10%]'}>
			<MainCard
                className={cn(classes.stretch, 'w-[90%] max-w-full lg:w-[30%] lg:max-w-[30%] md:w-[45%] md:max-w-[45%]')}
                title='Обо мне'
                info='Контактная информация'
                url='about'
                icon={<User className={'w-20 h-20 md:w-40 md:h-40'} />}
            />
			<MainCard
                className={cn(classes.stretch, 'w-[90%] max-w-full lg:w-[30%] lg:max-w-[30%] md:w-[45%] md:max-w-[45%]')}
				title='Навыки'
				info='Информация о навыках (изученных технологиях)'
				url='skills'
                icon={<BrainCircuit className={'w-20 h-20 md:w-40 md:h-40'} />}
			/>
			<MainCard
                className={cn(classes.stretch, 'w-[90%] max-w-full lg:w-[30%] lg:max-w-[30%] md:w-[45%] md:max-w-[45%]')}
				title='Проекты'
				info='Информация о проектах и используемых технологиях'
				url='projects'
                icon={<Album className={'w-20 h-20 md:w-40 md:h-40'} />}
			/>
		</div>
	);
};

export default Home;
