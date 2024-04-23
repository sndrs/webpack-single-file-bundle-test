import { jsx } from '@emotion/react/jsx-runtime';
import { tilesGridContainer, tileGridColumns, tilesCollapseUntilTablet, tilesCollapseUntilDesktop, tilesCollapseUntilleftCol, tilesCollapseUntilWide, collapseUntilTabletTiles, collapseUntilDesktopTiles, collapseUntilLeftColTiles, collapseUntilWideTiles } from './styles.js';

const collapseUntilMap = {
    tablet: tilesCollapseUntilTablet,
    desktop: tilesCollapseUntilDesktop,
    leftCol: tilesCollapseUntilleftCol,
    wide: tilesCollapseUntilWide,
};
const collapseUntilColumnsMap = {
    tablet: collapseUntilTabletTiles,
    desktop: collapseUntilDesktopTiles,
    leftCol: collapseUntilLeftColTiles,
    wide: collapseUntilWideTiles,
};
/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_textinput--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/00e9f5-tiles) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/layout/Tiles.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Child components will be arranged with equal width and spacing with the specified number of columns,
 * wrapping onto a new row as necessary.
 *
 * Until `mobileLandscape`, child components will be collapsed into a single column.
 */
const Tiles = ({ columns, collapseBelow, // deprecated
collapseUntil = collapseBelow, cssOverrides, children, ...props }) => {
    return (jsx("div", { css: [
            tilesGridContainer,
            tileGridColumns[columns],
            collapseUntil ? collapseUntilColumnsMap[collapseUntil] : '',
            collapseUntil ? collapseUntilMap[collapseUntil] : '',
            cssOverrides,
        ], ...props, children: children }));
};

export { Tiles };
//# sourceMappingURL=Tiles.js.map
