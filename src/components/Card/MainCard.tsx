import React, {type ReactNode} from 'react';
import {cn} from "../../shared/lib/utils.ts";
import {LiquidGlassCard} from "../ui-layouts/LiquidGlassCard.tsx";
import {NavLink} from "react-router-dom";

interface Props {
	title: string;
	info: string;
	url: string;
    className?: string;
    icon?: ReactNode;
}

const MainCard: React.FC<Props> = ({ title, info, url, className, icon }) => {
    return (
        <LiquidGlassCard
            shadowIntensity='sm'
            borderRadius='24px'
            glowIntensity='none'
            blurIntensity={"sm"}
            className={cn('rounded-3xl p-6 text-white bg-white/4 flex flex-col', className)}
        >
            <NavLink to={url} className='relative z-30 flex flex-col items-center justify-center h-full'>
                {icon}
                <div className='text-6xl font-semibold'>{title}</div>
                <div className='text-lg mt-2 text-center'>{info}</div>
            </NavLink>
        </LiquidGlassCard>
    );
};

export default MainCard;
