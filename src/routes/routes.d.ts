import { ElementType } from 'react';

type CommonContent =
  | {
      variant: 'createAndEdit';
      element: JSX.Element;
    }
  | {
      variant: 'all';
      element: JSX.Element;
    };

type Content = {
  path: string;
  preTitle?: string;
  element?: JSX.Element;
  customEndPoint?: string;
};

type Screen = {
  path: string;
  title: string;
  icon?: ElementType;
  commonContent?: CommonContent[];
  contents?: Content[];
};

type Section = {
  title: string;
  path: string;
  screens: Screen[];
};

type Routes = Section[];

export type { Routes, Screen, Section, Content };
