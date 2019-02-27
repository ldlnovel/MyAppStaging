import asyncComponent from './components/AsyncComponent/index.js';

export const getMenuListData = () => [
  {
    component: asyncComponent(() => import('./components/login/index')),
    path: '/login',
    // exact: true
  },
  {
    component: asyncComponent(() => import('./components/Base/base')),
		path: '/Base',
		name: 'xxxxx',
		icon: '',
    children: [
      // {
      //   component: asyncComponent(() => import('./container/test')),
      //   path: '/Base/smart-longPlan',
			//   name: 'xxxxx',
			// 	 icon: '',
      //   // exact: true,
      // },
    ]
  }
]

