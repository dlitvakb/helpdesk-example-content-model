import { default as Migration } from 'contentful-migration';

import { InternalFieldWarning, PageDefinitionId } from './constants';
import { SeoMetadataId } from './metadata';

export const createPage = (migration: Migration, pageTypeIds: string[]) => {
  const page = migration.createContentType(PageDefinitionId, {
    name: `Web Creator: Page`,
    description: `Web Creator page definition. DO NOT EDIT.`,
    displayField: 'title',
  });

  page.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: true,
    localized: true,
  });

  page.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  });

  page.createField('slug', {
    name: 'Slug',
    type: 'Symbol',
    required: true,
    localized: true,
    validations: [
      { unique: true },
      {
        regexp: {
          pattern: "^((\\/)|(([\\/\\w\\-\\._~:!$&'\\(\\)*+,;@]|(%\\d+))+))$",
        },
      },
    ],
  });

  page.createField('content', {
    name: 'Content',
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [{ linkContentType: pageTypeIds }],
  });

  page.createField('metadata_seo', {
    name: 'SEO Metadata',
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [SeoMetadataId] }],
  });

  page.createField('status', {
    name: 'Status',
    type: 'Symbol',
    required: false,
    validations: [
      {
        in: ['published', 'archived', 'draft', 'changed'],
      },
    ],
    omitted: true,
  });

  // Field control statements are grouped for better plan generation
  page.changeFieldControl('title', 'builtin', 'singleLine');
  page.changeFieldControl('name', 'builtin', 'singleLine');
  page.changeFieldControl('slug', 'builtin', 'slugEditor');
  page.changeFieldControl('content', 'builtin', 'entryCardEditor');
  page.changeFieldControl('metadata_seo', 'builtin', 'entryCardEditor');
  page.changeFieldControl('status', 'builtin', 'singleLine', {
    helpText: InternalFieldWarning,
  });
};
