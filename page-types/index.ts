import { MigrationFunction } from 'contentful-migration';

import { createHelpCenterArticle } from './help-center-article';
import { createLandingPage } from './landing-page';

export const createContentPages: MigrationFunction = (migration) => {
  createLandingPage(migration);
  createHelpCenterArticle(migration);
};
