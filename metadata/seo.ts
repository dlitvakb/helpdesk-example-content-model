import { MigrationFunction } from 'contentful-migration';

import { InternalFieldWarning } from '../constants';

export const SeoMetadataId = 'metadata_seo';

export const createSeoMetadata: MigrationFunction = (migration) => {
  const seoMetadata = migration.createContentType(SeoMetadataId, {
    name: 'Metadata: SEO',
    description: 'SEO Metadata for Web Creator Pages. DO NOT EDIT.',
  });

  seoMetadata.createField('name', {
    name: 'Internal Name',
    type: 'Symbol',
    required: true,
  });

  seoMetadata.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: false,
    localized: true,
  });

  seoMetadata.createField('description', {
    name: 'Description',
    type: 'Symbol',
    required: false,
    localized: true,
  });

  seoMetadata.createField('keywords', {
    name: 'Keywords',
    type: 'Array',
    items: {
      type: 'Symbol',
    },
    required: false,
    localized: true,
  });

  seoMetadata.createField('no_index', {
    name: 'No Index',
    type: 'Boolean',
    required: false,
  });

  seoMetadata.createField('no_follow', {
    name: 'No Follow',
    type: 'Boolean',
    required: false,
  });

  // Field control statements are grouped for better plan generation
  seoMetadata.changeFieldControl('name', 'builtin', 'singleLine', {
    helpText: InternalFieldWarning,
  });
  seoMetadata.changeFieldControl('title', 'builtin', 'singleLine');
  seoMetadata.changeFieldControl('description', 'builtin', 'singleLine');
  seoMetadata.changeFieldControl('keywords', 'builtin', 'tagEditor');
  seoMetadata.changeFieldControl('no_index', 'builtin', 'boolean');
  seoMetadata.changeFieldControl('no_follow', 'builtin', 'boolean');
};
