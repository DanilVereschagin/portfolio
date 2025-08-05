export const projects = [
	{
		id: 1,
		title: 'ORION Delivery',
		description: 'Веб-приложения для доставки еды',
		technologies:
			'TypeScript, React, Next.js, Tailwind, ShadCN, react-use, Zustand, PostgreSQL, Prisma, React Hook Form, Zod, Dadata, RESEND, Auth.js, Jest, Testing-library',
		url: 'orion-delivery',
		image: 'assets/Logo/orion_delivery.jpg',
		github: 'https://github.com/DanilVereschagin/oriondelivery-frontend',
		tools: [
			{
				title: 'TypeScript',
				description: 'Весь проект написан с помощью TypeScript',
				icon: 'logo/typescript.avif',
			},
			{
				title: 'Next.js',
				description: 'Клиентская и серверная часть написана с помощью Next.js',
				icon: 'logo/nextjs.avif',
			},
			{
				title: 'Tailwind',
				description: 'Дизайн сайта сделан с помощью Tailwind',
				icon: 'logo/tailwind.avif',
			},
			{
				title: 'ShadCN',
				description: 'Использовалась библиотека готовых компонентов ShadCN',
				icon: 'logo/shadcn.avif',
			},
			{
				title: 'react-use',
				description: 'Использовались хуки из библиотеки react-use',
				icon: 'logo/react.avif',
			},
			{
				title: 'Zustand',
				description: 'В качестве менеджера состояния используется Zustand',
				icon: 'logo/zustand.avif',
			},
			{
				title: 'PostgreSQL',
				description: 'В качестве СУБД используется PostgreSQL',
				icon: 'logo/postgresql.avif',
			},
			{
				title: 'Prisma',
				description: 'Для работы с базой данных используется ORM Prisma',
				icon: 'logo/prisma.avif',
			},
			{
				title: 'RHF',
				description:
					'Для работы с формами используется библиотека React Hook Form',
				icon: 'logo/rhf.avif',
			},
			{
				title: 'Zod',
				description: 'Для работы с валидацией используется библиотека Zod',
				icon: 'logo/zod.webp',
			},
			{
				title: 'Dadata',
				description:
					'Для поиска существующих адресов используется библиотека Dadata',
				icon: 'logo/dadata.avif',
			},
			{
				title: 'RESEND',
				description:
					'Для отправки электронных писем используется библиотека RESEND',
				icon: 'logo/resend.webp',
			},
			{
				title: 'Auth.js',
				description:
					'Для регистрации и аутентификации пользователей, а также сессий используется библиотека Auth.js',
				icon: 'logo/authjs.avif',
			},
			{
				title: 'Jest',
				description: 'Для Unit-тестирования используется библиотека Jest',
				icon: 'logo/jest.webp',
			},
		],
		images_gallery: [],
	},
	{
		id: 2,
		title: 'Tech Device Store',
		description: 'Интернет-магазин техники',
		technologies:
			'React, Node.js, ExpressJS, PostgreSQL, Sequelize, MobX, JWT-токены, Bootstrap, Bcrypt, Axios',
		url: 'tech-device-store',
		image: 'assets/Logo/tech_device_store.jpg',
		github: 'https://github.com/DanilVereschagin/tech-devices-store',
		tools: [
			{
				title: 'React',
				description: 'Пользовательская часть написана с помощью React',
				icon: 'logo/react.avif',
			},
			{
				title: 'Node.js',
				description: 'Серверная часть написана на Node.js',
				icon: 'logo/nodejs.avif',
			},
			{
				title: 'ExpressJS',
				description: 'API написано с помощью ExpressJS',
				icon: 'logo/express.avif',
			},
			{
				title: 'PostgreSQL',
				description: 'В качестве СУБД используется PostgreSQL',
				icon: 'logo/postgresql.avif',
			},
			{
				title: 'Sequelize',
				description: 'Для работы с базой данных используется ORM Sequelize',
				icon: 'logo/sequelize.avif',
			},
			{
				title: 'MobX',
				description: 'В качестве менеджера состояния используется MobX',
				icon: 'logo/mobx.avif',
			},
			{
				title: 'JWT',
				description: 'Для авторизации пользователей используются JWT-токены',
				icon: 'logo/jwt.avif',
			},
			{
				title: 'Bootstrap',
				description: 'Дизайн сайта сделан с помощью Bootstrap',
				icon: 'logo/bootstrap.avif',
			},
			{
				title: 'Bcrypt',
				description: 'Для хеширования паролей используется Bcrypt',
				icon: 'logo/bcrypt.avif',
			},
			{
				title: 'Axios',
				description:
					'Для работы с HTTP-запросами используется библиотека Axios',
				icon: 'logo/axios.avif',
			},
		],
		images_gallery: [
			{
				url: 'assets/Web/TechDeviceStore/Регистрация.png',
				description: 'Страница регистрации.',
			},
			{
				url: 'assets/Web/TechDeviceStore/Авторизация.png',
				description:
					'Страница авторизации. Если нет аккаунта, то можно перейти на страницу регистрации',
			},
			{
				url: 'assets/Web/TechDeviceStore/Гость.png',
				description: 'Вид главной страницы для гостя',
			},
			{
				url: 'assets/Web/TechDeviceStore/Вид_пользователя.png',
				description: 'Вид главной страницы для авторизованного пользователя',
			},
			{
				url: 'assets/Web/TechDeviceStore/Вид_админа.png',
				description: 'Вид главной страницы для администратора',
			},
			{
				url: 'assets/Web/TechDeviceStore/Страница_устройства.png',
				description:
					'Страница устройства, где указаны его характеристики, оценка и кнопка добавления в корзину',
			},
			{
				url: 'assets/Web/TechDeviceStore/Корзина.png',
				description:
					'Страница корзины со списком товаров и суммой заказа. Товары можно удалять из корзины',
			},
			{
				url: 'assets/Web/TechDeviceStore/Админка.png',
				description: 'Страница администратора',
			},
			{
				url: 'assets/Web/TechDeviceStore/Новое_устройство.png',
				description: 'Страница создания устройства',
			},
			{
				url: 'assets/Web/TechDeviceStore/Новый_бренд.png',
				description: 'Страница создания бренда',
			},
			{
				url: 'assets/Web/TechDeviceStore/Новый_тип.png',
				description: 'Страница создания типа устройства',
			},
		],
	},
	{
		id: 3,
		title: 'Orion Games',
		description: 'Интернет-магазин игр',
		technologies: 'PHP, Bootstrap, MySQL, PDO, Nginx, Redis',
		url: 'orion-games',
		image: 'assets/Logo/orion_games.jpg',
		github: 'https://github.com/DanilVereschagin/Orion-Games',
		tools: [
			{
				title: 'PHP',
				description: 'Серверная часть написана на чистом PHP',
				icon: 'logo/php.avif',
			},
			{
				title: 'Bootstrap',
				description: 'Дизайн сайта сделан с помощью Bootstrap',
				icon: 'logo/bootstrap.avif',
			},
			{
				title: 'MySQL',
				description:
					'База данных сайта написана на MySQL. С помощью PDO сервер взаимодействует с базой данных',
				icon: 'logo/mysql.avif',
			},
			{
				title: 'Nginx',
				description: 'В качестве proxy-сервера используется Nginx',
				icon: 'logo/nginx.avif',
			},
			{
				title: 'Redis',
				description: 'Кэширование данных сайта сделано с помощью Redis',
				icon: 'logo/redis.avif',
			},
		],
		images_gallery: [
			{
				url: 'assets/Web/OrionGames/Регистрация.png',
				description: 'Страница регистрации',
			},
			{
				url: 'assets/Web/OrionGames/Логин.png',
				description: 'Страница авторизации',
			},
			{
				url: 'assets/Web/OrionGames/Главная_страница.png',
				description: 'Вид главной страницы со списком пользователей',
			},
			{
				url: 'assets/Web/OrionGames/Личный_кабинет.png',
				description: 'Личный кабинет с информацией о пользователе',
			},
			{
				url: 'assets/Web/OrionGames/Страница_другого_пользователя.png',
				description: 'Страница другого пользователя с информацией о нем',
			},
			{
				url: 'assets/Web/OrionGames/Библиотека_игр.png',
				description: 'Библиотека игр пользователя',
			},
			{
				url: 'assets/Web/OrionGames/Магазин_игр.png',
				description:
					'Страница магазина игр, где представлены также игры из Steam(чёрный фон карточек)',
			},
			{
				url: 'assets/Web/OrionGames/Страница_игры.png',
				description: 'Страница с информацией об игре',
			},
			{
				url: 'assets/Web/OrionGames/Комментарии_к_игре.png',
				description: 'Комментарии к игре',
			},
			{
				url: 'assets/Web/OrionGames/Главная_страница_админки.png',
				description: 'Главная страница админки со списком администраторов',
			},
			{
				url: 'assets/Web/OrionGames/Список_игроков_админки.png',
				description:
					'Страница со списком игроков и кнопкой отправки электронных писем пользователям',
			},
			{
				url: 'assets/Web/OrionGames/Список_игр_админки.png',
				description:
					'Страница со списком игр в админке и кнопкой добавления новой игры',
			},
			{
				url: 'assets/Web/OrionGames/Добавить_игру.png',
				description: 'Страница с формой добавления игры',
			},
			{
				url: 'assets/Web/OrionGames/Список_компаний.png',
				description:
					'Страница со списком компаний и кнопкой добавления новой компании',
			},
			{
				url: 'assets/Web/OrionGames/Добавить_компанию.png',
				description: 'Страница с формой добавления компании',
			},
			{
				url: 'assets/Web/OrionGames/404.png',
				description:
					'Страница с ошибкой 404, на которую попадают пользователи с неправильным URL',
			},
		],
	},
];
