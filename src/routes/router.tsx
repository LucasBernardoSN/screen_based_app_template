import { cloneElement } from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from 'react-router-dom';
import { Home } from '../pages/Common/Home';
import { NotFound } from '../pages/Common/NotFound';
import { CommonScreenProps } from '../components/content/ContentGenerator';
import { PrivateRoutes } from './PrivateRoutes';
import { Content, Routes, Screen, Section } from './routes';

function createContent(
  section: Section,
  screen: Screen,
  content: Content
): RouteObject {
  return {
    path: content.path,
    element: cloneElement(content.element ?? <NotFound />, {
      title: `${content.preTitle ?? ''} ${screen.title}`,
      getEndPoint: content.customEndPoint
        ? content.customEndPoint
        : `/${section.path}/${screen.path}`,
    } as CommonScreenProps),
  };
}

function createCommonContent(
  section: Section,
  screen: Screen,
  commonContet: Required<Screen>['commonContent'][number]
) {
  if (commonContet.variant === 'createAndEdit') {
    return [
      createContent(section, screen, {
        path: 'create',
        preTitle: 'Create',
        element: commonContet.element,
      }),
      createContent(section, screen, {
        path: 'edit',
        preTitle: 'Edit',
        element: commonContet.element,
      }),
    ];
  }

  return [
    createContent(section, screen, {
      path: '',
      element: commonContet.element,
    }),
  ];
}

function createContentList(section: Section, screen: Screen): RouteObject[] {
  const contentList = screen.contents?.map((content) =>
    createContent(section, screen, content)
  );

  const commonContentList = screen.commonContent
    ?.map((commonContet) => createCommonContent(section, screen, commonContet))
    .flat();

  if (!contentList) return commonContentList ?? [];

  if (!commonContentList) return contentList;

  return [...contentList, ...commonContentList];
}

function createScreen(section: Section, screen: Screen): RouteObject {
  return {
    path: screen.path,
    children: createContentList(section, screen),
  };
}

function createScreenList(section: Section): RouteObject[] {
  return [...section.screens.map((screen) => createScreen(section, screen))];
}

function createSection(section: Section): RouteObject {
  return {
    path: section.path,
    children: createScreenList(section),
  };
}

function createSectionList(routes: Routes) {
  return [...routes.map((section) => createSection(section))];
}

export function createRouter(config: Routes) {
  return createBrowserRouter([
    {
      path: '*',
      element: <PrivateRoutes />,
      children: [
        {
          path: '*',
          element: <Navigate to="/home" />,
        },
        {
          element: <Outlet />,
          children: [
            {
              path: 'home',
              element: <Home />,
            },
            ...createSectionList(config),
          ],
        },
      ],
    },
  ]);
}
