import { palette } from '@guardian/source-foundations';
import { userFeedbackThemeDefault } from '../user-feedback/theme.js';

/** @deprecated Use `themeSelect` and component `theme` prop instead of emotion's `ThemeProvider` */
const selectThemeDefault = {
    select: {
        textUserInput: palette.neutral[7],
        textLabel: palette.neutral[7],
        textLabelOptional: palette.neutral[46],
        textLabelSupporting: palette.neutral[46],
        textError: palette.neutral[7],
        textSuccess: palette.success[400],
        backgroundInput: palette.neutral[100],
        border: palette.neutral[46],
        borderActive: palette.focus[400],
        borderError: palette.error[400],
        borderSuccess: palette.success[400],
    },
    ...userFeedbackThemeDefault,
};
const themeSelect = {
    textUserInput: palette.neutral[7],
    textLabel: palette.neutral[7],
    textOptional: palette.neutral[46],
    textSupporting: palette.neutral[46],
    textError: palette.neutral[7],
    textSuccess: palette.success[400],
    backgroundInput: palette.neutral[100],
    border: palette.neutral[46],
    borderActive: palette.focus[400],
    borderError: palette.error[400],
    borderSuccess: palette.success[400],
    iconFill: palette.neutral[7],
};
const transformProviderTheme = (providerTheme) => {
    const transformedTheme = {};
    if (providerTheme?.textLabelSupporting) {
        transformedTheme.textSupporting = providerTheme.textLabelSupporting;
    }
    if (providerTheme?.textLabelOptional) {
        transformedTheme.textOptional = providerTheme.textLabelOptional;
    }
    if (providerTheme?.textUserInput) {
        transformedTheme.iconFill = providerTheme.textUserInput;
    }
    return { ...transformedTheme, ...providerTheme };
};

export { selectThemeDefault, themeSelect, transformProviderTheme };
//# sourceMappingURL=theme.js.map
