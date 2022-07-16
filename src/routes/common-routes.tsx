import type { RouteProps } from './index';

import { lazy } from 'react';
import { sleep, role } from '@/utils';

import { CommonLoading } from '@/loading';

const commonRoutes: RouteProps[] = [
	{
		path: ['/', '/news'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/common/NewsPage');
		}),
		fallback: <CommonLoading />,
		auth: false,
		role: role.all(),
		title: 'News | Pump',
	},
	{
		path: '/404',
		component: lazy(() => import('@/pages/common/PageNotFoundPage')),
		fallback: <CommonLoading />,
		auth: false,
		role: role.all(),
		title: '404 | Pump',
	},
];

export default commonRoutes;
