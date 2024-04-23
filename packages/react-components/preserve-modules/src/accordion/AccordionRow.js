import { jsxs, jsx, Fragment } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden as visuallyHidden$1 } from '@guardian/source-foundations';
import { useState, useEffect } from 'react';
import { SvgChevronDownSingle } from '../../vendor/icons/SvgChevronDownSingle.js';
import { mergeThemes } from '../utils/themes.js';
import { AccordionRowNoJS } from './AccordionRowNoJS.js';
import { accordionRow, button, chevronIconUp, chevronIconDown, toggleIconWithLabel, labelText, toggle, toggleLabel, expandedBody, collapsedBody } from './styles.js';
import { transformProviderTheme, themeAccordion } from './theme.js';

const visuallyHidden = css `
	${visuallyHidden$1}
`;
/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_accordion--with-cta-labels-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/38c5aa-accordion/b/92b71e) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/accordion/AccordionRow.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 */
const AccordionRow = ({ label, hideToggleLabel = false, children, cssOverrides, onClick = () => undefined, theme, }) => {
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);
    const [isBrowser, setIsBrowser] = useState(false);
    const mergedTheme = (providerTheme) => mergeThemes(themeAccordion, theme, providerTheme, transformProviderTheme);
    function handleClick(event) {
        expanded ? collapse() : expand();
        onClick(event);
    }
    useEffect(() => {
        setIsBrowser(true);
    });
    if (isBrowser) {
        return (jsxs("div", { css: (providerTheme) => [
                accordionRow(mergedTheme(providerTheme.accordion)),
                cssOverrides,
            ], children: [jsxs("button", { type: "button", "aria-expanded": expanded, onClick: handleClick, css: (providerTheme) => [
                        button(mergedTheme(providerTheme.accordion)),
                        expanded ? chevronIconUp : chevronIconDown,
                        !hideToggleLabel ? toggleIconWithLabel : '',
                    ], children: [jsx("strong", { css: labelText, children: label }), jsxs("div", { css: toggle, children: [hideToggleLabel ? (jsx("span", { css: visuallyHidden, children: expanded ? 'Hide' : 'Show more' })) : (jsx("span", { css: (providerTheme) => toggleLabel(mergedTheme(providerTheme.accordion)), children: expanded ? ('Hide') : (jsxs(Fragment, { children: ["Show", jsx("span", { css: visuallyHidden, children: " more" })] })) })), jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })] })] }), jsx("div", { css: (providerTheme) => expanded
                        ? expandedBody(mergedTheme(providerTheme.accordion))
                        : collapsedBody, children: jsx("div", { hidden: !expanded, children: children }) })] }));
    }
    return (jsx(AccordionRowNoJS, { label: label, hideToggleLabel: hideToggleLabel, cssOverrides: cssOverrides, children: children }));
};

export { AccordionRow };
//# sourceMappingURL=AccordionRow.js.map
