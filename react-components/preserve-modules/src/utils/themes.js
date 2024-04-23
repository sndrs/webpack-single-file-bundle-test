/**
 * Combine values from default theme with theme overrides from `theme` prop
 * and deprecated `ThemeProvider` themes. Optionally pass `ThemeProvider` theme
 * though transform function to map theme keys from old to new format.
 */
const mergeThemes = (defaultTheme, themeOverrides, providerTheme, transform) => ({
    ...defaultTheme,
    ...(transform ? transform(providerTheme) : providerTheme),
    ...themeOverrides,
});

export { mergeThemes };
//# sourceMappingURL=themes.js.map
