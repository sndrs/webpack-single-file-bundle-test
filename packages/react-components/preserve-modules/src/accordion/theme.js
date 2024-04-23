import { palette } from '@guardian/source-foundations';

const themeAccordion = {
    textLabel: palette.neutral[7],
    textBody: palette.neutral[7],
    textCta: palette.neutral[7],
    border: palette.neutral[60],
    iconFill: palette.neutral[7],
};
/** @deprecated Use `themeAccordion` and component `theme` prop instead of emotion's `ThemeProvider` */
const accordionThemeDefault = {
    accordion: {
        textPrimary: palette.neutral[7],
        borderPrimary: palette.neutral[60],
    },
};
const transformProviderTheme = (providerTheme) => {
    const transformedTheme = {};
    if (providerTheme?.textPrimary) {
        transformedTheme.textLabel = providerTheme.textPrimary;
        transformedTheme.textBody = providerTheme.textPrimary;
        transformedTheme.textCta = providerTheme.textPrimary;
    }
    if (providerTheme?.borderPrimary) {
        transformedTheme.border = providerTheme.borderPrimary;
    }
    return transformedTheme;
};

export { accordionThemeDefault, themeAccordion, transformProviderTheme };
//# sourceMappingURL=theme.js.map
