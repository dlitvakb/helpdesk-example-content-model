import { MigrationFunction } from 'contentful-migration';

import { HeroComponentId, SectionComponentId } from '../components';
import { InternalFieldWarning, PageTypeIDs } from '../constants';

export const createLandingPage: MigrationFunction = (migration) => {
  const landingPage = migration.createContentType(PageTypeIDs.LandingPage, {
    name: `Web Creator: Landing Page`,
    displayField: 'name',
  });

  landingPage.createField('name', {
    name: 'Internal Name',
    type: 'Symbol',
    required: true,
  });

  landingPage.createField('hero', {
    name: 'Hero',
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [HeroComponentId],
      },
    ],
  });

  landingPage.createField('sections', {
    name: 'Sections',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [SectionComponentId],
        },
      ],
    },
    required: true,
  });

  // Field control statements are grouped for better plan generation
  landingPage.changeFieldControl('name', 'builtin', 'singleLine', {
    helpText: InternalFieldWarning,
  });
  landingPage.changeFieldControl('hero', 'builtin', 'entryCardEditor');
  landingPage.changeFieldControl('sections', 'builtin', 'entryCardsEditor');
};
