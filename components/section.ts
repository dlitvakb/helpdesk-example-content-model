import { MigrationFunction } from 'contentful-migration';

export const SectionComponentId = 'component_section';

export const createSectionComponent: MigrationFunction = (migration) => {
  const section = migration.createContentType(SectionComponentId, {
    name: 'Component: Section',
    displayField: 'name',
  });

  section.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  });

  section.createField('columns', {
    name: 'Columns',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
    },
    validations: [{ size: { min: 2, max: 4 } }],
  });

  // Field control statements are grouped for better plan generation
  section.changeFieldControl('name', 'builtin', 'singleLine');
  section.changeFieldControl('columns', 'builtin', 'entryCardsEditor');
};
