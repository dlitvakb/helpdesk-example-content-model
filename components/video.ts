import { MigrationFunction } from 'contentful-migration';

export const VideoComponentId = 'component_video';

export const createVideoComponent: MigrationFunction = (migration) => {
  const video = migration.createContentType(VideoComponentId, {
    name: 'Component: Video',
    displayField: 'name',
  });

  video.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  });

  video.createField('title', {
    name: 'Title',
    type: 'Symbol',
    required: false,
  });

  video.createField('youtubeVideoId', {
    name: 'Youtube Video ID',
    type: 'Symbol',
    required: true,
  });

  // Field control statements are grouped for better plan generation
  video.changeFieldControl('name', 'builtin', 'singleLine');
  video.changeFieldControl('title', 'builtin', 'singleLine');
  video.changeFieldControl('youtubeVideoId', 'builtin', 'singleLine');
};
