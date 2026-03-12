import {Album, BrainCircuit, User} from "lucide-react";
import { cn } from '../lib/utils';
import MainCard from '../components/Card/MainCard';
import classes from '../components/Card/MainCard.module.scss';
import { skills } from '../shared/constant/skills';
import {IconCloud} from "../components/ui/icon-cloud.tsx";
import {ScrollVelocityContainer, ScrollVelocityRow} from "../components/ui/scroll-based-velocity.tsx";
import {AuroraText} from "../components/ui/aurora-text.tsx";

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
            <div className={'center flex flex-row flex-wrap gap-10 items-center justify-center mt-[20%] lg:mt-[10%] md:mt-[20%] mb-[10%]'}>
                <MainCard
                    className={cn(classes.stretch, 'w-[90%] max-w-full lg:w-[26%] lg:max-w-[26%] md:w-[45%] md:max-w-[45%]')}
                    title='Обо мне'
                    info='Контактная информация'
                    url='about'
                    icon={<User className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[0]}
                />
                <MainCard
                    className={cn(classes.stretch, 'w-[90%] max-w-full lg:w-[30%] lg:max-w-[30%] md:w-[45%] md:max-w-[45%]')}
                    title='Навыки'
                    info='Информация о навыках (изученных технологиях)'
                    url='skills'
                    icon={<BrainCircuit className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[1]}
                />
                <MainCard
                    className={cn(classes.stretch, 'w-[90%] max-w-full lg:w-[30%] lg:max-w-[30%] md:w-[45%] md:max-w-[45%]')}
                    title='Проекты'
                    info='Информация о проектах и используемых технологиях'
                    url='projects'
                    icon={<Album className={'w-20 h-20 md:w-40 md:h-40'} />}
                    feature={features[2]}
                />
            </div>
            <ScrollVelocityContainer className="text-2xl font-bold hidden md:block md:text-4xl lg:text-7xl">
                <ScrollVelocityRow baseVelocity={20} direction={1}>
                    <AuroraText>Портфолио</AuroraText>
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={20} direction={-1}>
                    <AuroraText>Верещагин Данил</AuroraText>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        </>
	);
};

export default Home;
