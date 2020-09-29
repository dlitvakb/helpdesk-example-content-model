import { MigrationFunction } from 'contentful-migration';

import { TextComponentId, VideoComponentId } from '../components';
import { InternalFieldWarning, PageTypeIDs } from '../constants';

export const createHelpCenterArticle: MigrationFunction = (migration) => {
  const helpCenterArticle = migration.createContentType(PageTypeIDs.HelpCenterArticle, {
    name: 'Web Creator: Help Center Article',
    description: 'An entry in the help center documentation.',
    displayField: 'name',
  });

  helpCenterArticle.createField('name', {
    name: 'Internal Name',
    type: 'Symbol',
    required: true,
  });

  helpCenterArticle.createField('body', {
    name: 'Body',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [TextComponentId, VideoComponentId],
        },
      ],
    },
    validations: [{ size: { min: 1 } }],
    required: true,
  });

  helpCenterArticle.createField('relatedPages', {
    name: 'Related Pages',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PageTypeIDs.HelpCenterArticle],
        },
      ],
    },
    required: false,
  });

  // Field control statements are grouped for better plan generation
  helpCenterArticle.changeFieldControl('name', 'builtin', 'singleLine', {
    helpText: InternalFieldWarning,
  });
  helpCenterArticle.changeFieldControl('body', 'builtin', 'entryCardsEditor', {
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });
  helpCenterArticle.changeFieldControl('relatedPages', 'builtin', 'entryCardsEditor', {
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });
};
