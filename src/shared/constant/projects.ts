import orionDeliveryLogo from '../../assets/Logo/orion_delivery.jpg';

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

export const projects = [
	{
		id: 1,
		title: 'Прогосзаказ',
		description: 'Веб-приложения для гос. закупок',
		technologies:
			'PHP, Yii2, MySQL, TypeScript, React, Next.js, Docker, Tailwind, AntD, Redux Toolkit, RTK Query, REST API, Zod, Auth.js, Git',
		url: 'progoszakaz',
		image: orionDeliveryLogo,
		github: 'https://xn--80aahqcqybgko.xn--p1ai/',
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
];
