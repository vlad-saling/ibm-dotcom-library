import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

/**
 * This will initialize storyshots for snapshot testing.
 * NOTE: If a molecule/organism requires deeper testing, a __tests__ folder must be created in the corresponding folder
 * and create additional tests in there.
 */
initStoryshots({
  /* configuration options */
  configPath: path.resolve(__dirname, '../../../.storybook'),

  // Ignore stories with "skip" in the storiesOf text value
  storyKindRegex: /^((?!.*?skip).)*$/,
});
