import orionDeliveryLogo from '../../assets/Logo/orion_delivery.jpg';
import techDeviceStoreLogo from '../../assets/Logo/tech_device_store.jpg';
import orionGamesLogo from '../../assets/Logo/orion_games.jpg';

import orionDelivery1 from '../../assets/Web/OrionDelivery/1.png';
import orionDelivery2 from '../../assets/Web/OrionDelivery/2.png';
import orionDelivery3 from '../../assets/Web/OrionDelivery/3.png';
import orionDelivery4 from '../../assets/Web/OrionDelivery/4.png';
import orionDelivery5 from '../../assets/Web/OrionDelivery/5.png';
import orionDelivery6 from '../../assets/Web/OrionDelivery/6.png';
import orionDelivery7 from '../../assets/Web/OrionDelivery/7.png';
import orionDelivery8 from '../../assets/Web/OrionDelivery/8.png';
import orionDelivery9 from '../../assets/Web/OrionDelivery/9.png';
import orionDelivery10 from '../../assets/Web/OrionDelivery/10.png';
import orionDelivery11 from '../../assets/Web/OrionDelivery/11.png';
import orionDelivery12 from '../../assets/Web/OrionDelivery/12.png';

import techDeviceStore1 from '../../assets/Web/TechDeviceStore/Регистрация.png';
import techDeviceStore2 from '../../assets/Web/TechDeviceStore/Авторизация.png';
import techDeviceStore3 from '../../assets/Web/TechDeviceStore/Гость.png';
import techDeviceStore4 from '../../assets/Web/TechDeviceStore/Вид_пользователя.png';
import techDeviceStore5 from '../../assets/Web/TechDeviceStore/Вид_админа.png';
import techDeviceStore6 from '../../assets/Web/TechDeviceStore/Страница_устройства.png';
import techDeviceStore7 from '../../assets/Web/TechDeviceStore/Корзина.png';
import techDeviceStore8 from '../../assets/Web/TechDeviceStore/Админка.png';
import techDeviceStore9 from '../../assets/Web/TechDeviceStore/Новое_устройство.png';
import techDeviceStore10 from '../../assets/Web/TechDeviceStore/Новый_бренд.png';
import techDeviceStore11 from '../../assets/Web/TechDeviceStore/Новый_тип.png';

import orionGames1 from '../../assets/Web/OrionGames/Регистрация.png';
import orionGames2 from '../../assets/Web/OrionGames/Логин.png';
import orionGames3 from '../../assets/Web/OrionGames/Главная_страница.png';
import orionGames4 from '../../assets/Web/OrionGames/Личный_кабинет.png';
import orionGames5 from '../../assets/Web/OrionGames/Страница_другого_пользователя.png';
import orionGames6 from '../../assets/Web/OrionGames/Библиотека_игр.png';
import orionGames7 from '../../assets/Web/OrionGames/Магазин_игр.png';
import orionGames8 from '../../assets/Web/OrionGames/Страница_игры.png';
import orionGames9 from '../../assets/Web/OrionGames/Комментарии_к_игре.png';
import orionGames10 from '../../assets/Web/OrionGames/Главная_страница_админки.png';
import orionGames11 from '../../assets/Web/OrionGames/Список_игроков_админки.png';
import orionGames12 from '../../assets/Web/OrionGames/Список_игр_админки.png';
import orionGames13 from '../../assets/Web/OrionGames/Добавить_игру.png';
import orionGames14 from '../../assets/Web/OrionGames/Список_компаний.png';
import orionGames15 from '../../assets/Web/OrionGames/Добавить_компанию.png';
import orionGames16 from '../../assets/Web/OrionGames/404.png';

export const petProjects = [
	{
		id: 1,
		title: 'ORION Delivery',
		description: 'Веб-приложения для доставки еды',
		technologies:
			'TypeScript, React, Next.js, Tailwind, ShadCN, react-use, Zustand, PostgreSQL, Prisma, React Hook Form, Zod, Dadata, RESEND, Auth.js, Jest, Testing-library',
		url: 'orion-delivery',
		image: orionDeliveryLogo,
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
		images_gallery: [
			{
				url: orionDelivery2,
				description:
					'Страница регистрации и авторизации с возможностью входа через сторонние сервисы',
			},
			{
				url: orionDelivery1,
				description: 'Главная страница со списком блюд и фильтрами',
			},
			{
				url: orionDelivery3,
				description:
					'Модальное окно блюда с возможностью выбора вариаций и дополнительных ингредиентов',
			},
			{
				url: orionDelivery4,
				description:
					'Страница с информацией о конкретном блюде. Функционал идентичен модальному окну, а также есть возможность оставлять и просматривать отзывы',
			},
			{
				url: orionDelivery5,
				description:
					'Корзина с возможностью изменения количества блюд или их удалением',
			},
			{
				url: orionDelivery6,
				description:
					'Страница оформления заказа. Присутствует возможность выбора типа доставки, а также активации промокода',
			},
			{
				url: orionDelivery7,
				description: 'Страница оплаты заказа',
			},
			{
				url: orionDelivery8,
				description: 'Страница профиля пользователя со списком его заказов',
			},
			{
				url: orionDelivery9,
				description:
					'Страница админ-панели с информацией о заказах и возможностью изменения их статуса',
			},
			{
				url: orionDelivery10,
				description:
					'Страница со списком пользователей и возможностью редактирования информации о них',
			},
			{
				url: orionDelivery11,
				description: 'Страница со статистикой продаж',
			},
			{
				url: orionDelivery12,
				description: 'Страница создания промокодов',
			},
		],
	},
	{
		id: 2,
		title: 'Tech Device Store',
		description: 'Интернет-магазин техники',
		technologies:
			'React, Node.js, ExpressJS, PostgreSQL, Sequelize, MobX, JWT-токены, Bootstrap, Bcrypt, Axios',
		url: 'tech-device-store',
		image: techDeviceStoreLogo,
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
				url: techDeviceStore1,
				description: 'Страница регистрации.',
			},
			{
				url: techDeviceStore2,
				description:
					'Страница авторизации. Если нет аккаунта, то можно перейти на страницу регистрации',
			},
			{
				url: techDeviceStore3,
				description: 'Вид главной страницы для гостя',
			},
			{
				url: techDeviceStore4,
				description: 'Вид главной страницы для авторизованного пользователя',
			},
			{
				url: techDeviceStore5,
				description: 'Вид главной страницы для администратора',
			},
			{
				url: techDeviceStore6,
				description:
					'Страница устройства, где указаны его характеристики, оценка и кнопка добавления в корзину',
			},
			{
				url: techDeviceStore7,
				description:
					'Страница корзины со списком товаров и суммой заказа. Товары можно удалять из корзины',
			},
			{
				url: techDeviceStore8,
				description: 'Страница администратора',
			},
			{
				url: techDeviceStore9,
				description: 'Страница создания устройства',
			},
			{
				url: techDeviceStore10,
				description: 'Страница создания бренда',
			},
			{
				url: techDeviceStore11,
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
		image: orionGamesLogo,
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
				url: orionGames1,
				description: 'Страница регистрации',
			},
			{
				url: orionGames2,
				description: 'Страница авторизации',
			},
			{
				url: orionGames3,
				description: 'Вид главной страницы со списком пользователей',
			},
			{
				url: orionGames4,
				description: 'Личный кабинет с информацией о пользователе',
			},
			{
				url: orionGames5,
				description: 'Страница другого пользователя с информацией о нем',
			},
			{
				url: orionGames6,
				description: 'Библиотека игр пользователя',
			},
			{
				url: orionGames7,
				description:
					'Страница магазина игр, где представлены также игры из Steam(чёрный фон карточек)',
			},
			{
				url: orionGames8,
				description: 'Страница с информацией об игре',
			},
			{
				url: orionGames9,
				description: 'Комментарии к игре',
			},
			{
				url: orionGames10,
				description: 'Главная страница админки со списком администраторов',
			},
			{
				url: orionGames11,
				description:
					'Страница со списком игроков и кнопкой отправки электронных писем пользователям',
			},
			{
				url: orionGames12,
				description:
					'Страница со списком игр в админке и кнопкой добавления новой игры',
			},
			{
				url: orionGames13,
				description: 'Страница с формой добавления игры',
			},
			{
				url: orionGames14,
				description:
					'Страница со списком компаний и кнопкой добавления новой компании',
			},
			{
				url: orionGames15,
				description: 'Страница с формой добавления компании',
			},
			{
				url: orionGames16,
				description:
					'Страница с ошибкой 404, на которую попадают пользователи с неправильным URL',
			},
		],
	},
];
