import React, {type ReactNode} from 'react';
import {cn} from "../../lib/utils.ts";
import {LiquidGlassCard} from "../ui-layouts/LiquidGlassCard.tsx";
import {NavLink} from "react-router-dom";
import {BentoCard} from "../ui/bento-grid.tsx";
import {Meteors} from "../ui/meteors.tsx";

interface Props {
	title: string;
	info: string;
	url: string;
    className?: string;
    icon?: ReactNode;
    feature:  {
        background: ReactNode
    }
}

const MainCard: React.FC<Props> = ({ title, info, url, className, icon, feature }) => {
    return (
        <LiquidGlassCard
            shadowIntensity='sm'
            borderRadius='24px'
            glowIntensity='none'
            blurIntensity={"sm"}
            className={cn('rounded-3xl p-6 text-white bg-white/4 flex flex-col', className)}
        >
            <div className="absolute h-[300px] w-full overflow-hidden">
                <Meteors number={40} />
            </div>
            <NavLink to={url} className='relative z-30 flex flex-col items-center justify-center h-full'>
                <BentoCard name={title} className={'w-full bg-transparent border-none shadow-none'} background={feature.background} Icon={icon} description={info} href={'#'} cta={''} />
            </NavLink>
        </LiquidGlassCard>
    );
};

export default MainCard;
