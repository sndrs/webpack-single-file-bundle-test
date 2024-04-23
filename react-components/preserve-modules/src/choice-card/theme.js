import { palette } from '@guardian/source-foundations';
import { themeLabel } from '../label/theme.js';
import { userFeedbackThemeDefault } from '../user-feedback/theme.js';

const themeChoiceCard = {
    textUnselected: palette.neutral[46],
    textSelected: palette.brand[400],
    textHover: palette.brand[500],
    textError: palette.error[400],
    borderUnselected: palette.neutral[46],
    borderSelected: palette.brand[500],
    borderHover: palette.brand[500],
    borderError: palette.error[400],
    backgroundUnselected: 'transparent',
    backgroundHover: 'transparent',
    backgroundSelected: '#E3F6FF',
    backgroundTick: palette.brand[500],
};
const themeChoiceCardGroup = {
    ...themeLabel,
};
/** @deprecated Use `themeChoiceCard` and component `theme` prop instead of emotion's `ThemeProvider` */
const choiceCardThemeDefault = {
    choiceCard: {
        textLabel: palette.neutral[46],
        textLabelSupporting: palette.neutral[46],
        textGroupLabel: palette.neutral[7],
        textGroupLabelSupporting: palette.neutral[46],
        border: palette.neutral[46],
        textChecked: palette.brand[400],
        backgroundChecked: '#E3F6FF',
        backgroundTick: palette.brand[500],
        borderChecked: palette.brand[500],
        textHover: palette.brand[500],
        borderHover: palette.brand[500],
        textError: palette.error[400],
        borderError: palette.error[400],
    },
    ...userFeedbackThemeDefault,
};
const transformProviderTheme = (providerTheme) => {
    const transformedTheme = {};
    if (providerTheme?.textLabel) {
        transformedTheme.textUnselected = providerTheme.textLabel;
    }
    if (providerTheme?.textChecked) {
        transformedTheme.textSelected = providerTheme.textChecked;
    }
    if (providerTheme?.border) {
        transformedTheme.borderUnselected = providerTheme.border;
    }
    if (providerTheme?.borderChecked) {
        transformedTheme.borderSelected = providerTheme.borderChecked;
    }
    if (providerTheme?.backgroundChecked) {
        transformedTheme.backgroundSelected = providerTheme.backgroundChecked;
    }
    return { ...transformedTheme, ...providerTheme };
};

export { choiceCardThemeDefault, themeChoiceCard, themeChoiceCardGroup, transformProviderTheme };
//# sourceMappingURL=theme.js.map
