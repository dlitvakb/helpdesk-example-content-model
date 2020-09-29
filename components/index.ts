import { MigrationFunction } from 'contentful-migration';

import { createHeroComponent, HeroComponentId } from './hero';
import { createSectionComponent, SectionComponentId } from './section';
import { createTextComponent, TextComponentId } from './text';
import { createVideoComponent, VideoComponentId } from './video';

export { HeroComponentId, SectionComponentId, TextComponentId, VideoComponentId };
export const createComponents: MigrationFunction = (migration) => {
  createHeroComponent(migration);
  createSectionComponent(migration);
  createTextComponent(migration);
  createVideoComponent(migration);
};
