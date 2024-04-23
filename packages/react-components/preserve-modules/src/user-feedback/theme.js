import { palette } from '@guardian/source-foundations';

/** @deprecated Use `themeUserFeedback` and component `theme` prop instead of emotion's `ThemeProvider` */
const userFeedbackThemeDefault = {
    userFeedback: {
        textSuccess: palette.success[400],
        textError: palette.error[400],
    },
};
/** @deprecated Use `themeUserFeedbackBrand` and component `theme` prop instead of emotion's `ThemeProvider` */
const userFeedbackThemeBrand = {
    userFeedback: {
        textSuccess: palette.success[500],
        textError: palette.error[500],
    },
};
const themeUserFeedback = {
    textSuccess: palette.success[400],
    textError: palette.error[400],
};
const themeUserFeedbackBrand = {
    textSuccess: palette.success[500],
    textError: palette.error[500],
};

export { themeUserFeedback, themeUserFeedbackBrand, userFeedbackThemeBrand, userFeedbackThemeDefault };
//# sourceMappingURL=theme.js.map
