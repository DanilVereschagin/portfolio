import React, {type ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {LiquidGlassCard} from "../ui-layouts/LiquidGlassCard.tsx";

interface Props {
	url: string;
	title?: string | ReactNode;
	className?: string;
    linkClassName?: string;
}

export const Link: React.FC<Props> = ({ url, title, className, linkClassName }) => {
	return (
        <LiquidGlassCard
            shadowIntensity='sm'
            borderRadius='8px'
            glowIntensity='none'
            blurIntensity={"sm"}
            className={cn('p-2 text-white bg-white/4 flex flex-col hover:bg-white/16', className)}
        >
            <NavLink
                to={url}
                className={cn('text-xs sm:text-sm md:text-lg p-2 text-white z-100', linkClassName)}
            >
                {title}
            </NavLink>
        </LiquidGlassCard>
	);
};
