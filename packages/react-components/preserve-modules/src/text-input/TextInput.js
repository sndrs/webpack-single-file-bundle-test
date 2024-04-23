import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { generateSourceId, descriptionId } from '@guardian/source-foundations';
import { Label } from '../label/Label.js';
import { InlineError } from '../user-feedback/InlineError.js';
import { InlineSuccess } from '../user-feedback/InlineSuccess.js';
import { mergeThemes } from '../utils/themes.js';
import { inlineMessageMargin, widthFluid, textInput, supportingTextMargin, labelMargin, errorInput, successInput, width30, width10, width4 } from './styles.js';
import { themeTextInput } from './theme.js';

const widths = {
    30: width30,
    10: width10,
    4: width4,
};
/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_textinput--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/097455-text-input-field/b/050445) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/text-input/TextInput.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Single line fields that allow users to enter freeform data.
 *
 * The following themes are supported: `light`
 */
const TextInput = ({ id, label: labelText, optional = false, hideLabel = false, supporting, size = 'medium', width, error, success, theme, cssOverrides, ...props }) => {
    const textInputId = id ?? generateSourceId();
    const mergedTheme = (providerTheme) => mergeThemes(themeTextInput, theme, providerTheme.textInput);
    return (jsxs(Fragment, { children: [jsxs(Label, { text: labelText, optional: !!optional, hideLabel: hideLabel, supporting: supporting, theme: theme, size: size, htmlFor: textInputId, children: [error && (jsx("div", { css: inlineMessageMargin, children: jsx(InlineError, { id: descriptionId(textInputId), theme: theme, size: size, children: error }) })), !error && success && (jsx("div", { css: inlineMessageMargin, children: jsx(InlineSuccess, { id: descriptionId(textInputId), theme: theme, size: size, children: success }) }))] }), jsx("input", { css: (providerTheme) => [
                    width ? widths[width] : widthFluid,
                    textInput(mergedTheme(providerTheme), size),
                    supporting ? supportingTextMargin : labelMargin,
                    error ? errorInput(mergedTheme(providerTheme)) : '',
                    !error && success ? successInput(mergedTheme(providerTheme)) : '',
                    cssOverrides,
                ], type: "text", id: textInputId, "aria-required": !optional, "aria-invalid": !!error, "aria-describedby": error ?? success ? descriptionId(textInputId) : '', required: !optional, ...props })] }));
};

export { TextInput };
//# sourceMappingURL=TextInput.js.map
