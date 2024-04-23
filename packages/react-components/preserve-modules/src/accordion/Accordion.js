import { jsx } from '@emotion/react/jsx-runtime';
import { Children, cloneElement } from 'react';
import { mergeThemes } from '../utils/themes.js';
import { accordion } from './styles.js';
import { transformProviderTheme, themeAccordion } from './theme.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_accordion--with-cta-labels-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/38c5aa-accordion/b/92b71e) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/accordion/Accordion.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * **Note**: the `max-height` of an `AccordionRow` is `500px`
 *
 */
const Accordion = ({ hideToggleLabel = false, children, cssOverrides, theme, ...props }) => {
    const mergedTheme = (providerTheme) => mergeThemes(themeAccordion, theme, providerTheme, transformProviderTheme);
    // AUDIT https://www.sarasoueidan.com/blog/accordion-markup/
    return (jsx("div", { css: (providerTheme) => [
            accordion(mergedTheme(providerTheme.accordion)),
            cssOverrides,
        ], ...props, children: Children.map(children, (child) => {
            return cloneElement(child, { hideToggleLabel });
        }) }));
};

export { Accordion };
//# sourceMappingURL=Accordion.js.map
