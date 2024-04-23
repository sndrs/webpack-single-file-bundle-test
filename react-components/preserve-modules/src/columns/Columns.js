import { jsx } from '@emotion/react/jsx-runtime';
import { collapseBelowColumnsCSS, columns, collapseBelowSpaceY, collapseBelowTablet, collapseBelowDesktop, collapseBelowleftCol, collapseBelowWide } from './styles.js';

const collapseBelowMap = {
    tablet: collapseBelowTablet,
    desktop: collapseBelowDesktop,
    leftCol: collapseBelowleftCol,
    wide: collapseBelowWide,
};
const collapseBelowColumnsMap = {
    tablet: collapseBelowColumnsCSS('tablet'),
    desktop: collapseBelowColumnsCSS('desktop'),
    leftCol: collapseBelowColumnsCSS('leftCol'),
    wide: collapseBelowColumnsCSS('wide'),
};
/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_columns--with-container) •
 * [Design System](https://theguardian.design/2a1e5182b/p/41cd49-columns) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/columns/Columns.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * `Columns` arranges child `Column`s side by side on a single row, with the
 * specified width.
 *
 * They become really useful when used in conjunction with the [Container](https://guardian.github.io/csnx/?path=/story/source-react-components_container--default)
 * component. This ensures the columns conform to the Guardian's grid layouts at
 * every breakpoint.
 */
const Columns = ({ collapseBelow, collapseUntil = collapseBelow, // deprecated
cssOverrides, children, spaceY, ...props }) => {
    return (jsx("div", { css: [
            columns,
            collapseUntil ? collapseBelowColumnsMap[collapseUntil] : '',
            collapseUntil ? collapseBelowMap[collapseUntil] : '',
            spaceY ? collapseBelowSpaceY[spaceY] : '',
            cssOverrides,
        ], ...props, children: children }));
};

export { Columns };
//# sourceMappingURL=Columns.js.map
