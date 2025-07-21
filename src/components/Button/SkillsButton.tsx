import React from 'react';

interface Props {
	name: string;
	tab: string;
	active?: string;
	action: (type: string) => void;
}

export const SkillsButton: React.FC<Props> = ({
	name,
	tab,
	active,
	action,
}) => {
	return (
		<div className='flex flex-col'>
			<button
				type='submit'
				className='text-white p-2'
				onClick={() => {
					action(tab);
				}}
			>
				{name}
			</button>
			<hr
				className='text-gray-400'
				style={
					active === tab
						? {
								boxShadow: '0 0 16px 4px #7442c8',
								color: 'white',
						  }
						: {}
				}
			/>
		</div>
	);
};
