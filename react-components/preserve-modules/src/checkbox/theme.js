import { palette } from '@guardian/source-foundations';
import { labelThemeDefault, labelThemeBrand, themeLabel, themeLabelBrand } from '../label/theme.js';
import { userFeedbackThemeDefault, userFeedbackThemeBrand } from '../user-feedback/theme.js';

const themeCheckbox = {
    borderUnselected: palette.neutral[46],
    borderHover: palette.brand[500],
    borderSelected: palette.brand[500],
    borderError: palette.error[400],
    fillSelected: palette.brand[500],
    fillUnselected: 'transparent',
    textLabel: palette.neutral[7],
    textSupporting: palette.neutral[46],
    textIndeterminate: palette.neutral[46],
};
const themeCheckboxGroup = {
    ...themeLabel,
};
const themeCheckboxBrand = {
    borderUnselected: palette.brand[800],
    borderSelected: palette.neutral[100],
    borderHover: palette.neutral[100],
    borderError: palette.error[500],
    fillSelected: palette.neutral[100],
    fillUnselected: 'transparent',
    textLabel: palette.neutral[100],
    textSupporting: palette.brand[800],
    textIndeterminate: palette.brand[800],
};
const themeCheckboxGroupBrand = {
    ...themeLabelBrand,
};
/** @deprecated Use `themeCheckbox` and component `theme` prop instead of emotion's `ThemeProvider` */
const checkboxThemeDefault = {
    checkbox: {
        border: palette.neutral[46],
        borderHover: palette.brand[500],
        borderChecked: palette.brand[500],
        borderError: palette.error[400],
        backgroundChecked: palette.brand[500],
        textLabel: palette.neutral[7],
        textLabelSupporting: palette.neutral[46],
        textIndeterminate: palette.neutral[46],
    },
    ...userFeedbackThemeDefault,
    ...labelThemeDefault,
};
/** @deprecated Use `themeCheckboxBrand` and component `theme` prop instead of emotion's `ThemeProvider` */
const checkboxThemeBrand = {
    checkbox: {
        border: palette.brand[800],
        borderHover: palette.neutral[100],
        borderChecked: palette.neutral[100],
        borderError: palette.error[500],
        backgroundChecked: palette.neutral[100],
        textLabel: palette.neutral[100],
        textLabelSupporting: palette.brand[800],
        textIndeterminate: palette.brand[800],
    },
    ...userFeedbackThemeBrand,
    ...labelThemeBrand,
};
const transformProviderTheme = (providerTheme) => {
    const transformedTheme = {};
    if (providerTheme?.backgroundChecked) {
        transformedTheme.fillSelected = providerTheme.backgroundChecked;
    }
    if (providerTheme?.borderChecked) {
        transformedTheme.borderSelected = providerTheme.borderChecked;
    }
    if (providerTheme?.border) {
        transformedTheme.borderUnselected = providerTheme.border;
    }
    if (providerTheme?.textLabelSupporting) {
        transformedTheme.textSupporting = providerTheme.textLabelSupporting;
    }
    return { ...transformedTheme, ...providerTheme };
};

export { checkboxThemeBrand, checkboxThemeDefault, themeCheckbox, themeCheckboxBrand, themeCheckboxGroup, themeCheckboxGroupBrand, transformProviderTheme };
//# sourceMappingURL=theme.js.map
