import React from 'react';
import { cn } from '../../lib/utils';
import {LiquidGlassCard} from "../ui-layouts/LiquidGlassCard.tsx";

interface Props {
	name: string;
	description: string;
	github: string;
	className?: string;
}

export const Title: React.FC<Props> = ({
	name,
	description,
	github,
	className,
}) => {
	return (
		<div className={cn('flex flex-col gap-4 items-center w-full', className)}>
			<h1 className='text-4xl font-bold text-white'>{name}</h1>
			<div className='w-[80%] md:w-[60%] lg:w-[20%] h-1 bg-purple-400'></div>
			<h1 className='lg:w-[30%] text-white text-center text-xl font-bold'>
				{description}
			</h1>
            <LiquidGlassCard
                shadowIntensity='sm'
                borderRadius='8px'
                glowIntensity='none'
                blurIntensity={"sm"}
                className='bg-white/8 rounded-xl p-4 flex'
            >
                <a
                    href={github}
                    target='_blank'
                    className=' text-white text-center text-xl font-bold z-120'
                >
                    Код на GitHub
                </a>
            </LiquidGlassCard>
		</div>
	);
};
