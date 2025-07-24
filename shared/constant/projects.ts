export const projects = [
	{
		id: 1,
		title: 'Orion Games',
		description: 'Интернет-магазин игр',
		technologies: 'PHP, Bootstrap, MySQL, PDO, Nginx, Redis',
		link: 'orion-games',
		image: 'assets/Logo/orion_games.png',
		tools: [
			{
				title: 'PHP',
				description: 'Серверная часть написана на чистом PHP',
				icon: 'logo/php.png',
			},
			{
				title: 'Bootstrap',
				description: 'Дизайн сайта сделан с помощью Bootstrap',
				icon: 'logo/bootstrap.png',
			},
			{
				title: 'MySQL и PDO',
				description:
					'База данных сайта написана на MySQL. С помощью PDO сервер взаимодействует с базой данных',
				icon: 'logo/mysql.png',
			},
			{
				title: 'Nginx',
				description: 'В качестве proxy-сервера используется Nginx',
				icon: 'logo/nginx.png',
			},
			{
				title: 'Redis',
				description: 'Кэширование данных сайта сделано с помощью Redis',
				icon: 'logo/redis.png',
			},
		],
		images_gallery: 'assets/Web/OrionGames/',
	},
	{
		id: 2,
		title: 'Tech Device Store',
		description: 'Интернет-магазин техники',
		technologies:
			'React, Node.js, ExpressJS, PostgreSQL, Sequelize, MobX, JWT-токены, Bootstrap, Bcrypt, Axios',
		link: 'tech-device-store',
		image: 'assets/Logo/tech_device_store.png',
		tools: [
			{
				title: 'React',
				description: 'Пользовательская часть написана с помощью React',
				icon: 'logo/react.png',
			},
			{
				title: 'Node.js',
				description: 'Серверная часть написана на Node.js',
				icon: 'logo/nodejs.png',
			},
		],
		images_gallery: 'assets/Web/OrionGames/',
	},
];
