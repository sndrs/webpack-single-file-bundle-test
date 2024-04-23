import { palette } from '@guardian/source-foundations';

/** @deprecated Use `themeLink` and component `theme` prop instead of emotion's `ThemeProvider` */
const linkThemeDefault = {
    link: {
        textPrimary: palette.brand[500],
        textPrimaryHover: palette.brand[500],
        textSecondary: palette.neutral[7],
        textSecondaryHover: palette.neutral[7],
    },
};
/** @deprecated Use `themeLinkBrand` and component `theme` prop instead of emotion's `ThemeProvider` */
const linkThemeBrand = {
    link: {
        textPrimary: palette.neutral[100],
        textPrimaryHover: palette.neutral[100],
    },
};
/** @deprecated Use `themeLinkBrandAlt` and component `theme` prop instead of emotion's `ThemeProvider` */
const linkThemeBrandAlt = {
    link: {
        textPrimary: palette.neutral[7],
        textPrimaryHover: palette.neutral[7],
    },
};
const themeLink = {
    textPrimary: palette.brand[500],
    textPrimaryHover: palette.brand[500],
    textSecondary: palette.neutral[7],
    textSecondaryHover: palette.neutral[7],
};
const themeLinkBrand = {
    textPrimary: palette.neutral[100],
    textPrimaryHover: palette.neutral[100],
};
const themeLinkBrandAlt = {
    textPrimary: palette.neutral[7],
    textPrimaryHover: palette.neutral[7],
};

export { linkThemeBrand, linkThemeBrandAlt, linkThemeDefault, themeLink, themeLinkBrand, themeLinkBrandAlt };
//# sourceMappingURL=theme.js.map
