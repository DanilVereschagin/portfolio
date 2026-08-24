import pgz1 from '../../assets/Web/Progoszakaz/1.png';
import pgz2 from '../../assets/Web/Progoszakaz/2.png';
import pgz21 from '../../assets/Web/Progoszakaz/2_1.png';
import pgz211 from '../../assets/Web/Progoszakaz/2_1_1.png';
import pgz22 from '../../assets/Web/Progoszakaz/2_2.png';
import pgz3 from '../../assets/Web/Progoszakaz/3.png';
import pgz4 from '../../assets/Web/Progoszakaz/4.png';
import pgz5 from '../../assets/Web/Progoszakaz/5.png';
import pgz6 from '../../assets/Web/Progoszakaz/6.png';

export const projects = [
	{
		id: 1,
		title: 'Прогосзаказ',
		description: 'Веб-приложения для гос. закупок',
		technologies:
			'PHP, Yii2, MySQL, TypeScript, React, Next.js, Axios, Docker, Tailwind, AntD, Redux Toolkit, RTK Query, REST API, Zod, Auth.js, Git',
		url: 'progoszakaz',
		image: pgz1,
		github: 'https://xn--80aahqcqybgko.xn--p1ai/',
		tools: [
            {
                title: 'PHP',
                description: 'Backend проекта написан на PHP',
                icon: 'logo/php.avif',
            },
            {
                title: 'Yii2',
                description: 'В качестве фреймворка для серверной части использовался Yii2',
                icon: 'logo/yii2.png',
            },
            {
                title: 'MySQL',
                description: 'В качестве СУБД используется MySQL',
                icon: 'logo/mysql.avif',
            },
			{
				title: 'TypeScript',
				description: 'Клиентская часть написана на TypeScript',
				icon: 'logo/typescript.avif',
			},
			{
				title: 'Next.js',
				description: 'Клиентская часть реализована с помощью Next.js',
				icon: 'logo/nextjs.avif',
			},
			{
				title: 'Tailwind',
				description: 'Дизайн сайта сделан с помощью Tailwind',
				icon: 'logo/tailwind.avif',
			},
            {
                title: 'AntD',
                description:
                    'Использовалась библиотека готовых компонентов AntD',
                icon: 'logo/antd.png',
            },
			{
				title: 'Redux',
				description: 'В качестве менеджера состояния используется Redux Toolkit',
				icon: 'logo/redux.avif',
			},
			{
				title: 'Axios',
				description: 'Для запросов использовался Axios и встроенный в Next.js fetch с кэшированием и ревалидацией',
				icon: 'logo/axios.avif',
			},
			{
				title: 'Zod',
				description: 'Для работы с валидацией используется библиотека Zod',
				icon: 'logo/zod.webp',
			},
			{
				title: 'Auth.js',
				description:
					'Для регистрации и аутентификации пользователей, а также сессий используется библиотека Auth.js',
				icon: 'logo/authjs.avif',
			},
            {
                title: 'Docker',
                description:
                    'Для контейниризации использовался Docker',
                icon: 'logo/docker.avif',
            },
            {
                title: 'Git',
                description:
                    'Для контроля версий кода использовался Git',
                icon: 'logo/git.avif',
            },
		],
		images_gallery: [
			{
				url: pgz1,
				description:
					'Основная страница с таблицей позиций ТРУ (товар-работа-услуга)',
			},
			{
				url: pgz2,
				description: 'Страница редактирования позиции ТРУ, функционал которой разделён на вкладки. Рассмотрим некоторые:',
			},
			{
				url: pgz21,
				description:
					'Вкладка поиска товара в РРПП',
			},
			{
				url: pgz211,
				description:
					'Модальное окно с информацией о товаре из РРПП',
			},
			{
				url: pgz22,
				description:
					'Вкладка информации ООЗ (характеристики, товарный знак и т.п.)',
			},
			{
				url: pgz3,
				description:
					'Страница со списком извещений',
			},
			{
				url: pgz4,
				description: 'Страница извещения с информацией о расчётах НМЦК',
			},
			{
				url: pgz5,
				description: 'Страница расчёта НМЦК со списком контрактов',
			},
			{
				url: pgz6,
				description:
					'Страница экспорта документов',
			},
		],
	},
];
