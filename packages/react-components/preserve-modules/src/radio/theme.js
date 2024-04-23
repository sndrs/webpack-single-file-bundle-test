import { palette } from '@guardian/source-foundations';
import { themeLabel, themeLabelBrand, labelThemeDefault, labelThemeBrand } from '../label/theme.js';
import { userFeedbackThemeDefault, userFeedbackThemeBrand } from '../user-feedback/theme.js';

const themeRadio = {
    borderSelected: palette.brand[500],
    borderUnselected: palette.neutral[46],
    borderHover: palette.brand[500],
    borderError: palette.error[400],
    fillSelected: palette.brand[500],
    fillUnselected: 'transparent',
    textLabel: palette.neutral[7],
    textSupporting: palette.neutral[46],
};
const themeRadioGroup = {
    borderHover: palette.brand[500],
    borderError: palette.error[400],
    ...themeLabel,
};
const themeRadioBrand = {
    borderSelected: palette.neutral[100],
    borderUnselected: palette.brand[800],
    borderHover: palette.neutral[100],
    borderError: palette.error[500],
    fillSelected: palette.neutral[100],
    fillUnselected: 'transparent',
    textLabel: palette.neutral[100],
    textSupporting: palette.brand[800],
};
const themeRadioGroupBrand = {
    borderHover: palette.neutral[100],
    borderError: palette.error[500],
    ...themeLabelBrand,
};
const transformProviderTheme = (providerTheme) => {
    const transformedTheme = {};
    if (providerTheme?.backgroundChecked) {
        transformedTheme.fillSelected = providerTheme.backgroundChecked;
        transformedTheme.borderSelected = providerTheme.backgroundChecked;
    }
    if (providerTheme?.border) {
        transformedTheme.borderUnselected = providerTheme.border;
    }
    if (providerTheme?.textLabelSupporting) {
        transformedTheme.textLabel = providerTheme.textLabelSupporting;
    }
    return { ...transformedTheme, ...providerTheme };
};
/** @deprecated Use `themeRadio` and component `theme` prop instead of emotion's `ThemeProvider` */
const radioThemeDefault = {
    radio: {
        borderHover: palette.focus[400],
        border: palette.neutral[60],
        backgroundChecked: palette.focus[400],
        textLabel: palette.neutral[7],
        textLabelSupporting: palette.neutral[46],
        borderError: palette.error[400],
    },
    ...labelThemeDefault,
    ...userFeedbackThemeDefault,
};
/** @deprecated Use `themeRadioBrand` and component `theme` prop instead of emotion's `ThemeProvider` */
const radioThemeBrand = {
    radio: {
        borderHover: palette.neutral[100],
        border: palette.brand[800],
        backgroundChecked: palette.neutral[100],
        textLabel: palette.neutral[100],
        textLabelSupporting: palette.brand[800],
        borderError: palette.error[500],
    },
    ...labelThemeBrand,
    ...userFeedbackThemeBrand,
};

export { radioThemeBrand, radioThemeDefault, themeRadio, themeRadioBrand, themeRadioGroup, themeRadioGroupBrand, transformProviderTheme };
//# sourceMappingURL=theme.js.map
