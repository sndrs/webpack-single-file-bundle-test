import { jsx } from '@emotion/react/jsx-runtime';
import { containerBackground, container, containerTopBorder, containerSideBorders, containerBorderColor } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_container--default) •
 * [Design System](https://theguardian.design/2a1e5182b/p/440a83-container) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/container/Container.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Centres the page content and applies a width that corresponds to the grid at the current breakpoint.
 */
const Container = ({ element: Element = 'section', border = false, sideBorders = false, topBorder = false, backgroundColor, borderColor, cssOverrides, children, ...props }) => {
    return (jsx(Element, { css: [
            backgroundColor && containerBackground(backgroundColor),
            cssOverrides,
        ], ...props, children: jsx("div", { css: [
                container,
                backgroundColor && containerBackground(backgroundColor),
                topBorder && containerTopBorder,
                (sideBorders || border) && containerSideBorders,
                borderColor && containerBorderColor(borderColor),
            ], children: children }) }));
};

export { Container };
//# sourceMappingURL=Container.js.map
