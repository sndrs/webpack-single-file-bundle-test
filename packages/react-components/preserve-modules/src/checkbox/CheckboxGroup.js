import { jsx, jsxs } from '@emotion/react/jsx-runtime';
import { generateSourceId, descriptionId } from '@guardian/source-foundations';
import { Children, cloneElement } from 'react';
import { Legend } from '../label/Legend.js';
import { InlineError } from '../user-feedback/InlineError.js';
import { fieldset } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_checkboxgroup--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/466fad-checkbox/b/33fc2f) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/checkbox/CheckboxGroup.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Checkboxes allow users to select multiple options from a list of individual
 * items or to indicate agreement of terms and  services.
 *
 * The following themes are supported: `default`, `brand`
 */
const CheckboxGroup = ({ id, name, label, hideLabel, optional = false, supporting, error, cssOverrides, children, theme, ...props }) => {
    const groupId = id ?? generateSourceId();
    const legend = label ? (jsx(Legend, { text: label, supporting: supporting, hideLabel: hideLabel, optional: optional, theme: theme })) : ('');
    const message = typeof error === 'string' ? (jsx(InlineError, { theme: theme, id: descriptionId(groupId), children: error })) : ('');
    return (jsxs("fieldset", { css: [fieldset, cssOverrides], id: groupId, ...props, children: [legend, message, Children.map(children, (child) => {
                return cloneElement(child, Object.assign(error
                    ? {
                        error: true,
                        'aria-describedby': descriptionId(groupId),
                    }
                    : {}, {
                    name,
                }));
            })] }));
};

export { CheckboxGroup };
//# sourceMappingURL=CheckboxGroup.js.map
