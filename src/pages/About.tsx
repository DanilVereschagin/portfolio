const About = () => {
	return (
		<div className='flex flex-col gap-4 items-center'>
			<div className='w-full flex justify-center h-fit gap-4'>
				<div
					className='bg-white w-[30%] lg:w-[14%] flex flex-col 
					items-center p-4 rounded-xl'
				>
					<img
						width={200}
						height={200}
						className='rounded-full'
						src='photo.jpg'
						alt='фото'
					/>
					<h1 className='text-2xl font-bold text-center'>Верещагин Данил</h1>
					<b className='text-center'>Веб-разработчик</b>
				</div>
				<div
					className='bg-white w-[60%] lg:w-[76%] px-4 text-xl rounded-xl 
					flex flex-col justify-evenly'
				>
					<div className='py-2 flex gap-2'>
						<b className='w-[24%] lg:w-[10%]'>Email: </b>
						<p>diafin.bernuly@mail.ru</p>
					</div>
					<hr className='text-gray-200' />
					<div className='py-2 flex gap-2'>
						<b className='w-[24%] lg:w-[10%]'>Телефон: </b>
						<p>+7 928 615 90 30</p>
					</div>
					<hr className='text-gray-200' />
					<div className='py-2 flex gap-2'>
						<b className='w-[24%] lg:w-[10%]'>Адрес: </b>
						<p>Таганрог, Ростовская область</p>
					</div>
					<hr className='text-gray-200' />
					<div className='py-2 flex gap-2'>
						<b className='w-[19%] lg:w-[11%]'>О себе: </b>
						<p>
							Имею высшее образование направления "Программная инженерия" ИТА
							ЮФУ (ИКТИБ). Имею коммерческий опыт в разработке веб-приложений.
						</p>
					</div>
				</div>
			</div>
			<div
				className='bg-white w-[91%] px-4 text-xl rounded-xl 
					flex flex-col justify-center'
			>
				<div className='py-2 flex gap-2'>
					<b className='w-[12%] lg:w-[8%]'>Github: </b>
					<a href='https://github.com/DanilVereschagin' target='_blank'>
						https://github.com/DanilVereschagin
					</a>
				</div>
				<hr className='text-gray-200' />
				<div className='py-2 flex gap-2'>
					<b className='w-[12%] lg:w-[8%]'>VK: </b>
					<a href='https://vk.com/aurus.void' target='_blank'>
						https://vk.com/aurus.void
					</a>
				</div>
				<hr className='text-gray-200' />
				<div className='py-2 flex gap-2'>
					<b className='w-[12%] lg:w-[8%]'>Telegram: </b>
					<a href='https://t.me/DifBer' target='_blank'>
						@DifBer
					</a>
				</div>
				<hr className='text-gray-200' />
				<div className='py-2 flex gap-2'>
					<b className='w-[12%] lg:w-[8%]'>hh: </b>
					<a
						href='https://taganrog.hh.ru/resume/0f863b9fff0d57a5a30039ed1f477661564b59'
						target='_blank'
					>
						https://taganrog.hh.ru/resume/0f863b9fff0d57a5a30039ed1f477661564b59
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
