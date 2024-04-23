import { mergeThemes } from '../utils/themes.js';
import { themeUserFeedback } from './theme.js';

const mergedTheme = (providerTheme, themeProp) => mergeThemes(themeUserFeedback, themeProp, providerTheme);

export { mergedTheme };
//# sourceMappingURL=shared.js.map
