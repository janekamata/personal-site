export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Jane Kamata',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  // {
  //   label: 'Articles',
  //   path: '/articles',
  // },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
