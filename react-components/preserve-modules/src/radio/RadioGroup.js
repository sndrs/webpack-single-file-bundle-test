import { jsx, Fragment, jsxs } from '@emotion/react/jsx-runtime';
import { generateSourceId, descriptionId } from '@guardian/source-foundations';
import { Children, cloneElement } from 'react';
import { Inline } from '../inline/Inline.js';
import { Legend } from '../label/Legend.js';
import { Stack } from '../stack/Stack.js';
import { InlineError } from '../user-feedback/InlineError.js';
import { mergeThemes } from '../utils/themes.js';
import { fieldset } from './styles.js';
import { themeRadioGroup } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_radiogroup--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/2891dd-radio-button/b/46940d) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/radio/RadioGroup.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Radio buttons allow users to make a single selection from a set of options.
 *
 * The following themes are supported: `default`, `brand`
 */
const RadioGroup = ({ id, name, label, hideLabel = false, supporting, orientation = 'vertical', error, cssOverrides, children, theme, ...props }) => {
    const groupId = id ?? generateSourceId();
    const legend = label ? (jsx(Legend, { text: label, supporting: supporting, hideLabel: hideLabel, theme: theme })) : ('');
    const message = error && (jsx(InlineError, { id: descriptionId(groupId), theme: theme, children: error }));
    const radioContainers = (jsx(Fragment, { children: Children.map(children, (child) => {
            return cloneElement(child, Object.assign(error
                ? {
                    'aria-describedby': descriptionId(groupId),
                }
                : {}, {
                name,
            }));
        }) }));
    const mergedTheme = (providerTheme) => mergeThemes(themeRadioGroup, theme, providerTheme.radio);
    return (jsxs("fieldset", { "aria-invalid": !!error, id: groupId, css: (providerTheme) => [
            fieldset(mergedTheme(providerTheme)),
            cssOverrides,
        ], ...props, children: [legend, message, orientation === 'vertical' ? (jsx(Stack, { children: radioContainers })) : (jsx(Inline, { space: 5, children: radioContainers }))] }));
};

export { RadioGroup };
//# sourceMappingURL=RadioGroup.js.map
