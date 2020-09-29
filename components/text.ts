import { MigrationFunction } from 'contentful-migration';

export const TextComponentId = 'component_text';

export const createTextComponent: MigrationFunction = (migration) => {
  const text = migration.createContentType(TextComponentId, {
    name: 'Component: Text',
    displayField: 'name',
  });

  text.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  });

  text.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: false,
  });

  text.createField('text', {
    name: 'Text',
    type: 'RichText',
    required: true,
  });

  // Field control statements are grouped for better plan generation
  text.changeFieldControl('name', 'builtin', 'singleLine');
  text.changeFieldControl('title', 'builtin', 'singleLine');
  text.changeFieldControl('text', 'builtin', 'richTextEditor');
};
