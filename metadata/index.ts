import { MigrationFunction } from 'contentful-migration';

import { createSeoMetadata, SeoMetadataId } from './seo';

export { SeoMetadataId };
export const createMetadata: MigrationFunction = (migration) => {
  createSeoMetadata(migration);
};
