import { brand, brandAlt, neutral } from '@guardian/source-foundations';

const text = {
    readerRevenue: {
        ctaPrimary: brand[400],
        ctaTertiary: brand[400],
    },
    readerRevenueBrand: {
        ctaPrimary: brand[400],
        ctaTertiary: brandAlt[400],
    },
    readerRevenueBrandAlt: {
        ctaPrimary: neutral[100],
        ctaTertiary: neutral[7],
    },
};
const background = {
    readerRevenue: {
        ctaPrimary: brandAlt[400],
        ctaPrimaryHover: '#FFD213',
        ctaTertiaryHover: '#E5E5E5',
    },
    readerRevenueBrand: {
        ctaPrimary: brandAlt[400],
        ctaPrimaryHover: '#FFD213',
        ctaTertiaryHover: brand[300],
    },
    readerRevenueBrandAlt: {
        ctaPrimary: neutral[7],
        ctaPrimaryHover: '#454545',
        ctaTertiaryHover: '#FFD213',
    },
};
const border = {
    readerRevenue: {
        ctaTertiary: brand[400],
    },
    readerRevenueBrand: {
        ctaTertiary: brandAlt[400],
    },
    readerRevenueBrandAlt: {
        ctaTertiary: neutral[7],
    },
};
const themeButtonReaderRevenue = {
    textPrimary: text.readerRevenue.ctaPrimary,
    backgroundPrimary: background.readerRevenue.ctaPrimary,
    backgroundPrimaryHover: background.readerRevenue.ctaPrimaryHover,
    textTertiary: text.readerRevenue.ctaTertiary,
    backgroundTertiaryHover: background.readerRevenue.ctaTertiaryHover,
    borderTertiary: border.readerRevenue.ctaTertiary,
};
const themeButtonReaderRevenueBrand = {
    textPrimary: text.readerRevenueBrand.ctaPrimary,
    backgroundPrimary: background.readerRevenueBrand.ctaPrimary,
    backgroundPrimaryHover: background.readerRevenueBrand.ctaPrimaryHover,
    textTertiary: text.readerRevenueBrand.ctaTertiary,
    backgroundTertiaryHover: background.readerRevenueBrand.ctaTertiaryHover,
    borderTertiary: border.readerRevenueBrand.ctaTertiary,
};
const themeButtonReaderRevenueBrandAlt = {
    textPrimary: text.readerRevenueBrandAlt.ctaPrimary,
    backgroundPrimary: background.readerRevenueBrandAlt.ctaPrimary,
    backgroundPrimaryHover: background.readerRevenueBrandAlt.ctaPrimaryHover,
    textTertiary: text.readerRevenueBrandAlt.ctaTertiary,
    backgroundTertiaryHover: background.readerRevenueBrandAlt.ctaTertiaryHover,
    borderTertiary: border.readerRevenueBrandAlt.ctaTertiary,
};
/** @deprecated Use `themeButtonReaderRevenue` and component `theme` prop instead of emotion's `ThemeProvider` */
const buttonThemeReaderRevenue = {
    button: themeButtonReaderRevenue,
};
/** @deprecated Use `themeButtonReaderRevenueBrand` and component `theme` prop instead of emotion's `ThemeProvider` */
const buttonThemeReaderRevenueBrand = {
    button: themeButtonReaderRevenueBrand,
};
/** @deprecated Use `themeButtonReaderRevenueBrandAlt` and component `theme` prop instead of emotion's `ThemeProvider` */
const buttonThemeReaderRevenueBrandAlt = {
    button: themeButtonReaderRevenueBrandAlt,
};

export { buttonThemeReaderRevenue, buttonThemeReaderRevenueBrand, buttonThemeReaderRevenueBrandAlt, themeButtonReaderRevenue, themeButtonReaderRevenueBrand, themeButtonReaderRevenueBrandAlt };
//# sourceMappingURL=theme-reader-revenue.js.map
