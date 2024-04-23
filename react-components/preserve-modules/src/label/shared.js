import { mergeThemes } from '../utils/themes.js';
import { themeLabel } from './theme.js';

const mergedTheme = (providerTheme, themeProp) => mergeThemes(themeLabel, themeProp, providerTheme);

export { mergedTheme };
//# sourceMappingURL=shared.js.map
