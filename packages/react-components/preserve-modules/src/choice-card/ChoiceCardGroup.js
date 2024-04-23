import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { generateSourceId, descriptionId } from '@guardian/source-foundations';
import { Children, cloneElement } from 'react';
import { Legend } from '../label/Legend.js';
import { InlineError } from '../user-feedback/InlineError.js';
import { fieldset, gridContainer, gridColumns, flexContainer, containerTopMargin } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_choicecardgroup--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/65ffe9-choice-card) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/choice-card/ChoiceCardGroup.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-card)
 *
 * The following themes are supported: `choiceCardDefault`.
 */
const ChoiceCardGroup = ({ id, name, label, hideLabel, supporting, multi, error, columns, cssOverrides, children, theme, ...props }) => {
    const groupId = id ?? generateSourceId();
    const showLabel = !!(label && !hideLabel);
    const topMargin = (showLabel || supporting) ?? error ? containerTopMargin : '';
    return (jsxs("fieldset", { css: [fieldset, cssOverrides], id: groupId, ...props, children: [label ? (jsx(Legend, { text: label, supporting: supporting, hideLabel: hideLabel, theme: theme })) : (''), typeof error === 'string' && (jsx(InlineError, { id: descriptionId(groupId), theme: theme, children: error })), jsx("div", { css: [
                    columns ? [gridContainer, gridColumns[columns]] : flexContainer,
                    topMargin,
                ], children: Children.map(children, (child) => {
                    return cloneElement(child, Object.assign({
                        type: multi ? 'checkbox' : 'radio',
                    }, error
                        ? {
                            error: true,
                            'aria-describedby': descriptionId(groupId),
                        }
                        : {}, {
                        name,
                    }));
                }) })] }));
};

export { ChoiceCardGroup };
//# sourceMappingURL=ChoiceCardGroup.js.map
