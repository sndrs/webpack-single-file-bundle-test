import { jsx, jsxs, Fragment } from '@emotion/react/jsx-runtime';
import { generateSourceId } from '@guardian/source-foundations';
import { mergeThemes } from '../utils/themes.js';
import { radio, radioContainer, labelWithSupportingText, label, labelTextWithSupportingText, labelText, supportingText } from './styles.js';
import { themeRadio, transformProviderTheme } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_radio--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/2891dd-radio-button/b/46940d) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/radio/Radio.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Radio buttons allow users to make a single selection from a set of options.
 *
 * The following themes are supported: `default`, `brand`
 */
const Radio = ({ id, label: labelContent, value, supporting, checked, defaultChecked, cssOverrides, theme, ...props }) => {
    const radioId = id ?? generateSourceId();
    const isChecked = () => {
        if (checked != null) {
            return checked;
        }
        return !!defaultChecked;
    };
    const mergedTheme = (providerTheme) => mergeThemes(themeRadio, theme, providerTheme.radio, transformProviderTheme);
    const LabelText = ({ hasSupportingText, children, }) => {
        return (jsx("div", { css: (providerTheme) => [
                hasSupportingText ? labelTextWithSupportingText : '',
                labelText(mergedTheme(providerTheme)),
            ], children: children }));
    };
    const SupportingText = ({ children }) => {
        return (jsx("div", { css: (providerTheme) => supportingText(mergedTheme(providerTheme)), children: children }));
    };
    const radioControl = (jsx("input", { id: radioId, type: "radio", css: (providerTheme) => [
            radio(mergedTheme(providerTheme)),
            cssOverrides,
        ], value: value, defaultChecked: defaultChecked ?? undefined, checked: checked != null ? isChecked() : undefined, ...props }));
    const labelledRadioControl = (jsxs("div", { css: (providerTheme) => [
            radioContainer(mergedTheme(providerTheme)),
            supporting ? labelWithSupportingText : '',
        ], children: [radioControl, jsx("label", { htmlFor: radioId, css: label, children: supporting ? (jsxs("div", { children: [jsx(LabelText, { hasSupportingText: true, children: labelContent }), jsx(SupportingText, { children: supporting })] })) : (jsx(LabelText, { children: labelContent })) })] }));
    return (jsx(Fragment, { children: labelContent ?? supporting ? labelledRadioControl : radioControl }));
};

export { Radio };
//# sourceMappingURL=Radio.js.map
