import React from 'react';
import { cn } from '../../shared/lib/utils';

interface Props {
	className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return <div className={cn('mt-8 ml-5 mr-5 h-full flex-1', className)}>{children}</div>;
};
