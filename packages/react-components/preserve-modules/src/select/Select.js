import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { generateSourceId, descriptionId } from '@guardian/source-foundations';
import { SvgChevronDownSingle } from '../../vendor/icons/SvgChevronDownSingle.js';
import { Label } from '../label/Label.js';
import { InlineError } from '../user-feedback/InlineError.js';
import { InlineSuccess } from '../user-feedback/InlineSuccess.js';
import { mergeThemes } from '../utils/themes.js';
import { inlineMessageMargin, selectWrapper, errorChevron, successChevron, supportingTextMargin, select, errorInput, successInput } from './styles.js';
import { transformProviderTheme, themeSelect } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_select--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/663879-select-box/b/10875c) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/select/Select.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Select boxes allow the user to make a choice from a long list of similar options.
 *
 * The following themes are supported: `light`
 */
const Select = ({ id, label: labelText, optional = false, hideLabel = false, supporting, error, success, cssOverrides, children, theme, ...props }) => {
    const selectId = id ?? generateSourceId();
    const mergedTheme = (providerTheme) => mergeThemes(themeSelect, theme, providerTheme, transformProviderTheme);
    return (jsxs(Fragment, { children: [jsxs(Label, { text: labelText, optional: !!optional, supporting: supporting, hideLabel: hideLabel, htmlFor: selectId, theme: theme, children: [error && (jsx("div", { css: inlineMessageMargin, children: jsx(InlineError, { id: descriptionId(selectId), theme: theme, children: error }) })), !error && success && (jsx("div", { css: inlineMessageMargin, children: jsx(InlineSuccess, { id: descriptionId(selectId), theme: theme, children: success }) }))] }), jsxs("div", { css: (theme) => [
                    selectWrapper(mergedTheme(theme.select)),
                    error ? errorChevron(mergedTheme(theme.select)) : '',
                    !error && success ? successChevron(mergedTheme(theme.select)) : '',
                    !error && !success ? supportingTextMargin : '',
                ], children: [jsx("select", { css: (theme) => [
                            select(mergedTheme(theme.select)),
                            error ? errorInput(mergedTheme(theme.select)) : '',
                            !error && success ? successInput(mergedTheme(theme.select)) : '',
                            cssOverrides,
                        ], "aria-required": !optional, "aria-invalid": !!error, "aria-describedby": error ?? success ? descriptionId(selectId) : '', id: selectId, ...props, children: children }), jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })] })] }));
};

export { Select };
//# sourceMappingURL=Select.js.map
