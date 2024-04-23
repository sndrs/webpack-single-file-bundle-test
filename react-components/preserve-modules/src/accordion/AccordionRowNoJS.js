import { jsx, jsxs } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden as visuallyHidden$1 } from '@guardian/source-foundations';
import { SvgChevronDownSingle } from '../../vendor/icons/SvgChevronDownSingle.js';
import { mergeThemes } from '../utils/themes.js';
import { accordionRow, noJsInput, noJsButton, labelText, toggle, chevronIconDown, toggleIconWithLabel, toggleLabel, chevronIconUp, collapsedBody } from './styles.js';
import { transformProviderTheme, themeAccordion } from './theme.js';

const visuallyHidden = css `
	${visuallyHidden$1}
`;
/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_accordion--with-cta-labels-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/38c5aa-accordion/b/92b71e) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/accordion/AccordionRowNoJS.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 */
const AccordionRowNoJS = ({ label, hideToggleLabel = false, children, cssOverrides, theme, ...props }) => {
    const mergedTheme = (providerTheme) => mergeThemes(themeAccordion, theme, providerTheme, transformProviderTheme);
    return (jsx("div", { css: (providerTheme) => [
            accordionRow(mergedTheme(providerTheme.accordion)),
            cssOverrides,
        ], ...props, children: jsxs("label", { children: [jsx("input", { type: "checkbox", css: (providerTheme) => noJsInput(mergedTheme(providerTheme.accordion)), role: "button" }), jsxs("div", { css: (providerTheme) => noJsButton(mergedTheme(providerTheme.accordion)), "data-target": "label", children: [jsx("strong", { css: labelText, children: label }), jsxs("div", { "data-target": "toggle", children: [jsxs("div", { css: [
                                        toggle,
                                        chevronIconDown,
                                        !hideToggleLabel ? toggleIconWithLabel : '',
                                    ], "data-target": "toggle-label-show", children: [jsxs("span", { css: (providerTheme) => [
                                                toggleLabel(mergedTheme(providerTheme.accordion)),
                                                hideToggleLabel ? visuallyHidden : '',
                                            ], children: ["Show", jsx("span", { css: visuallyHidden, children: " more" })] }), jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })] }), jsxs("div", { css: [
                                        toggle,
                                        chevronIconUp,
                                        !hideToggleLabel ? toggleIconWithLabel : '',
                                    ], "data-target": "toggle-label-hide", children: [jsx("span", { css: (providerTheme) => [
                                                toggleLabel(mergedTheme(providerTheme.accordion)),
                                                hideToggleLabel ? visuallyHidden : '',
                                            ], children: "Hide" }), jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })] })] })] }), jsx("div", { css: collapsedBody, "data-target": "body", children: jsx("div", { children: children }) })] }) }));
};

export { AccordionRowNoJS };
//# sourceMappingURL=AccordionRowNoJS.js.map
