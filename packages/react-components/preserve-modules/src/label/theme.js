import { palette } from '@guardian/source-foundations';

/** @deprecated Use `themeLabel` and component `theme` prop instead of emotion's `ThemeProvider` */
const labelThemeDefault = {
    label: {
        textLabel: palette.neutral[7],
        textOptional: palette.neutral[46],
        textSupporting: palette.neutral[46],
        textError: palette.error[400],
        textSuccess: palette.success[400],
    },
};
/** @deprecated Use `themeLabelBrand` and component `theme` prop instead of emotion's `ThemeProvider` */
const labelThemeBrand = {
    label: {
        textLabel: palette.neutral[100],
        textOptional: palette.brand[800],
        textSupporting: palette.brand[800],
        textError: palette.error[500],
        textSuccess: palette.success[500],
    },
};
const themeLabel = {
    textLabel: palette.neutral[7],
    textOptional: palette.neutral[46],
    textSupporting: palette.neutral[46],
    textError: palette.error[400],
    textSuccess: palette.success[400],
};
const themeLabelBrand = {
    textLabel: palette.neutral[100],
    textOptional: palette.brand[800],
    textSupporting: palette.brand[800],
    textError: palette.error[500],
    textSuccess: palette.success[500],
};

export { labelThemeBrand, labelThemeDefault, themeLabel, themeLabelBrand };
//# sourceMappingURL=theme.js.map
