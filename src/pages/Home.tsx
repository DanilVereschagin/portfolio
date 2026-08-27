import {Album, BrainCircuit, User} from "lucide-react";
import { cn } from '../lib/utils';
import MainCard from '../components/Card/MainCard';
import classes from '../components/Card/MainCard.module.scss';
import { skills } from '../shared/constant/skills';
import {IconCloud} from "../components/ui/icon-cloud.tsx";

const images = skills.map(
    (skill) => `/portfolio/${skill.icon}`
)

const features = [
    {
        background: null
    },
    {
        background: (
            <div className="absolute top-0 right-0 pointer-events-none z-0 scale-50 lg:scale-75 origin-top-right">
                <IconCloud images={images} />
            </div>
        )
    },
    {
        background: null
    },
]


const Home = () => {
	return (
        <>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[20%] lg:mt-[10%] md:mt-[20%] overflow-hidden mb-[10vh] md:mb-0'}>
                <MainCard
                    className={cn(classes.stretch, 'w-full max-w-full')}
                    title='Обо мне'
                    info='Контактная информация'
                    url='about'
                    icon={<User className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[0]}
                />
                <MainCard
                    className={cn(classes.stretch, 'w-full max-w-full')}
                    title='Навыки'
                    info='Информация о навыках (изученных технологиях)'
                    url='skills'
                    icon={<BrainCircuit className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[1]}
                />
                <MainCard
                    className={cn(classes.stretch, 'w-full max-w-full')}
                    title='Проекты'
                    info='Информация о проектах и используемых технологиях'
                    url='projects'
                    icon={<Album className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[2]}
                />
                <MainCard
                    className={cn(classes.stretch, 'w-full max-w-full')}
                    title='Pet-проекты'
                    info='Информация о pet-проектах и используемых технологиях'
                    url='pet-projects'
                    icon={<Album className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[2]}
                />
            </div>
        </>
	);
};

export default Home;
