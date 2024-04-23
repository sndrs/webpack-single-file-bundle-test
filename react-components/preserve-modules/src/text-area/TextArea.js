import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { generateSourceId, descriptionId } from '@guardian/source-foundations';
import { Label } from '../label/Label.js';
import { InlineError } from '../user-feedback/InlineError.js';
import { InlineSuccess } from '../user-feedback/InlineSuccess.js';
import { inlineMessageMargin, widthFluid, textArea, supportingTextMargin, labelMargin, errorInput, successInput } from './styles.js';
import { themeTextArea } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_textarea--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/567182-text-area/b/42916b) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/text-area/TextArea.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * The following themes are supported: `light`
 */
const TextArea = ({ id, label: labelText, optional = false, hideLabel = false, supporting, size = 'medium', error, success, cssOverrides, rows = 3, className, value, theme, ...props }) => {
    const textAreaId = id ?? generateSourceId();
    const getClassName = () => {
        const HAS_VALUE_CLASS = 'src-has-value';
        if (className) {
            return `${className}${value ? ` ${HAS_VALUE_CLASS}` : ''}`;
        }
        if (value) {
            return HAS_VALUE_CLASS;
        }
        return undefined;
    };
    const mergedTheme = { ...themeTextArea, ...theme };
    return (jsxs(Fragment, { children: [jsxs(Label, { text: labelText, supporting: supporting, optional: !!optional, theme: theme, size: size, hideLabel: hideLabel, htmlFor: textAreaId, children: [error && (jsx("div", { css: inlineMessageMargin, children: jsx(InlineError, { id: descriptionId(textAreaId), theme: theme, size: size, children: error }) })), !error && success && (jsx("div", { css: inlineMessageMargin, children: jsx(InlineSuccess, { id: descriptionId(textAreaId), theme: theme, size: size, children: success }) }))] }), jsx("textarea", { css: [
                    widthFluid,
                    textArea(mergedTheme, size),
                    supporting ? supportingTextMargin : labelMargin,
                    error ? errorInput(mergedTheme) : '',
                    !error && success ? successInput(mergedTheme) : '',
                    cssOverrides,
                ], id: textAreaId, "aria-required": !optional, "aria-invalid": !!error, "aria-describedby": error ?? success ? descriptionId(textAreaId) : '', required: !optional, rows: rows, className: getClassName(), value: value, ...props })] }));
};

export { TextArea };
//# sourceMappingURL=TextArea.js.map
