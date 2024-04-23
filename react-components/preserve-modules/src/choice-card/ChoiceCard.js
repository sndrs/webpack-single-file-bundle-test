import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { useState } from 'react';
import { mergeThemes } from '../utils/themes.js';
import { input, tickAnimation, choiceCard, errorChoiceCard, contentWrapper, contentWrapperLabelOnly, tick } from './styles.js';
import { transformProviderTheme, themeChoiceCard } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_choicecard--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/65ffe9-choice-card) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/choice-card/ChoiceCard.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Choice cards are a tactile, single or multi-select mechanism used to group related options.
 *
 */
const ChoiceCard = ({ id, label: labelContent, value, icon: iconSvg, checked, defaultChecked, cssOverrides, error, onChange, theme = {}, type = 'radio', ...props }) => {
    const isChecked = () => {
        if (checked != null) {
            return checked;
        }
        return !!defaultChecked;
    };
    /** Transforms an old shaped `ThemeProvider` theme to ChoiceCardTheme  */
    const mergedTheme = (providerTheme) => mergeThemes(themeChoiceCard, theme, providerTheme, transformProviderTheme);
    // prevent the animation firing if a Choice Card has been checked by default
    const [userChanged, setUserChanged] = useState(false);
    return (jsxs(Fragment, { children: [jsx("input", { css: (providerTheme) => [
                    input(mergedTheme(providerTheme.choiceCard)),
                    userChanged ? tickAnimation : '',
                    cssOverrides,
                ], id: id, value: value, "aria-invalid": !!error, defaultChecked: defaultChecked ?? undefined, checked: checked != null ? isChecked() : undefined, onChange: (event) => {
                    if (onChange) {
                        onChange(event);
                    }
                    setUserChanged(true);
                }, type: type, ...props }), jsxs("label", { css: (providerTheme) => [
                    choiceCard(mergedTheme(providerTheme.choiceCard)),
                    error ? errorChoiceCard(mergedTheme(providerTheme.choiceCard)) : '',
                ], htmlFor: id, children: [jsxs("div", { css: [contentWrapper, !iconSvg ? contentWrapperLabelOnly : ''], children: [iconSvg ? iconSvg : '', jsx("div", { children: labelContent })] }), jsx("span", { css: (providerTheme) => [
                            tick(mergedTheme(providerTheme.choiceCard)),
                        ] })] })] }));
};

export { ChoiceCard };
//# sourceMappingURL=ChoiceCard.js.map
