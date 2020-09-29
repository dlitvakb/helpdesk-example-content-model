import { MigrationFunction } from 'contentful-migration';

import { createComponents } from './components';
import { PageTypeIDs } from './constants';
import { createMetadata } from './metadata';
import { createPage } from './page';
import { createContentPages } from './page-types';

const createContentModel: MigrationFunction = (migration) => {
  createComponents(migration);
  createMetadata(migration);
  createContentPages(migration);
  createPage(migration, Object.values(PageTypeIDs));
};

// This is required as an entrypoint by contentful-migration
module.exports = createContentModel;
