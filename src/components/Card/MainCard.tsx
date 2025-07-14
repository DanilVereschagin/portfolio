import React from 'react';
import classes from './MainCard.module.scss';

interface Props {
	title?: string;
	info?: string;
	url?: string;
}

const MainCard: React.FC<Props> = ({ title, info, url }) => {
	return (
		<div className={classes.box}>
			<span></span>
			<div className={classes.content}>
				<h2>{title}</h2>
				<p>{info}</p>
				<a href={url}>Перейти</a>
			</div>
		</div>
	);
};

export default MainCard;
