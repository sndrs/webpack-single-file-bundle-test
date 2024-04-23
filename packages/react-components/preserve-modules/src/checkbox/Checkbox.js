import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { generateSourceId } from '@guardian/source-foundations';
import { mergeThemes } from '../utils/themes.js';
import { checkboxContainer, checkboxContainerWithSupportingText, checkbox, errorCheckbox, tick, tickWithLabelText, tickWithSupportingText, label, supportingText, labelText, labelTextWithSupportingText } from './styles.js';
import { transformProviderTheme, themeCheckbox } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_checkbox--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/466fad-checkbox/b/33fc2f) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/checkbox/Checkbox.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Checkboxes allow users to select multiple options from a list of individual
 * items or to indicate agreement of terms and  services.
 *
 * The following themes are supported: `default`, `brand`
 */
const Checkbox = ({ id, label: labelContent, checked, supporting, defaultChecked, error, indeterminate, cssOverrides, theme, ...props }) => {
    const checkboxId = id ?? generateSourceId();
    const isChecked = () => {
        if (checked != null) {
            return checked;
        }
        return !!defaultChecked;
    };
    const setIndeterminate = (el) => {
        if (el) {
            el.indeterminate = !!indeterminate;
        }
    };
    const mergedTheme = (providerTheme) => mergeThemes(themeCheckbox, theme, providerTheme, transformProviderTheme);
    const SupportingText = ({ children, }) => {
        return (jsx("div", { css: (providerTheme) => supportingText(mergedTheme(providerTheme.checkbox)), children: children }));
    };
    const LabelText = ({ hasSupportingText, children, }) => {
        return (jsx("div", { css: (providerTheme) => [
                labelText(mergedTheme(providerTheme.checkbox)),
                hasSupportingText ? labelTextWithSupportingText : '',
            ], children: children }));
    };
    return (jsxs("div", { css: (providerTheme) => [
            checkboxContainer(mergedTheme(providerTheme.checkbox), error),
            supporting ? checkboxContainerWithSupportingText : '',
        ], children: [jsx("input", { id: checkboxId, type: "checkbox", css: (providerTheme) => [
                    checkbox(mergedTheme(providerTheme.checkbox), error),
                    error ? errorCheckbox(mergedTheme(providerTheme.checkbox)) : '',
                    cssOverrides,
                ], "aria-invalid": !!error, ref: setIndeterminate, defaultChecked: defaultChecked ?? undefined, checked: checked != null ? isChecked() : undefined, ...props }), jsx("span", { css: (providerTheme) => [
                    tick(mergedTheme(providerTheme.checkbox)),
                    labelContent ?? supporting ? tickWithLabelText : '',
                    supporting ? tickWithSupportingText : '',
                ] }), jsx("label", { htmlFor: checkboxId, css: label, children: supporting ? (jsxs("div", { children: [jsx(LabelText, { hasSupportingText: true, children: labelContent }), jsx(SupportingText, { children: supporting })] })) : (jsx(LabelText, { children: labelContent })) })] }));
};

export { Checkbox };
//# sourceMappingURL=Checkbox.js.map
