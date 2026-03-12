import React from 'react';
import { cn } from '../../lib/utils';

interface Props {
	className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return <div className={cn('mt-8 pl-5 pr-5 h-full flex-1', className)}>{children}</div>;
};
