import { Cat, Dog, Fire } from 'phosphor-react';
import { Screens } from '../pages';
import { Routes } from './routes';

export const routesConfig: Routes = [
  {
    path: 'section1',
    title: 'Section ❤❤❤',
    screens: [
      {
        path: 'screen1',
        title: 'Screen One',
        icon: Cat,
        commonContent: [
          {
            variant: 'createAndEdit',
            element: <Screens.Screen1Form />,
          },
          {
            variant: 'all',
            element: <Screens.Screen1 />,
          },
        ],
      },
      {
        path: 'screen2',
        title: 'Screen Two',
        icon: Dog,
        commonContent: [
          {
            variant: 'all',
            element: <Screens.Screen2 />,
          },
          {
            variant: 'createAndEdit',
            element: <Screens.Screen2Form />,
          },
        ],
      },
    ],
  },
  {
    path: 'section2',
    title: 'Section Two',
    screens: [
      {
        path: 'screen3',
        title: 'Screen Three',
        icon: Fire,
        commonContent: [
          {
            variant: 'all',
            element: <Screens.Screen3 />,
          },
          {
            variant: 'createAndEdit',
            element: <Screens.Screen3Form />,
          },
        ],
      },
      {
        path: 'screen4',
        title: 'Screen Four',
        commonContent: [
          {
            variant: 'all',
            element: <Screens.Screen4 />,
          },
          {
            variant: 'createAndEdit',
            element: <Screens.Screen4Form />,
          },
        ],
      },
    ],
  },
];
