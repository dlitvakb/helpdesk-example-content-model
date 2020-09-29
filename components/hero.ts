import { MigrationFunction } from 'contentful-migration';

import { PageDefinitionId } from '../constants';

export const HeroComponentId = 'component_hero';

export const createHeroComponent: MigrationFunction = (migration) => {
  const hero = migration.createContentType(HeroComponentId, {
    name: 'Component: Hero',
    displayField: 'name',
  });

  hero.createField('name', {
    name: 'Internal Name',
    type: 'Symbol',
    required: true,
  });

  hero.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: true,
  });

  hero.createField('text', {
    name: 'Text',
    type: 'RichText',
  });

  hero.createField('image', {
    name: 'Image',
    type: 'Link',
    linkType: 'Asset',
    required: true,
    validations: [
      {
        linkMimetypeGroup: ['image', 'video'],
      },
    ],
  });

  hero.createField('ctaText', {
    name: 'CTA Text',
    type: 'Symbol',
    required: true,
  });

  hero.createField('ctaLink', {
    name: 'CTA Link',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [
      {
        linkContentType: [PageDefinitionId],
      },
    ],
  });

  // Field control statements are grouped for better plan generation
  hero.changeFieldControl('name', 'builtin', 'singleLine');
  hero.changeFieldControl('title', 'builtin', 'singleLine');
  hero.changeFieldControl('text', 'builtin', 'richTextEditor');
  hero.changeFieldControl('image', 'builtin', 'assetLinkEditor');
  hero.changeFieldControl('ctaText', 'builtin', 'singleLine');
  hero.changeFieldControl('ctaLink', 'builtin', 'slugEditor');
};
