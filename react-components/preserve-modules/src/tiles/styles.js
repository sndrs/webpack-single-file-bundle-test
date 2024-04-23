import { css } from '@emotion/react';
import { space, until, from } from '@guardian/source-foundations';

const collapseUntilTilesSpacing = css `
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${space[5]}px;
	}
`;
const collapseUntilTabletTiles = css `
	${until.tablet} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilDesktopTiles = css `
	${until.desktop} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilLeftColTiles = css `
	${until.leftCol} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilWideTiles = css `
	${until.wide} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilWidth = css `
	width: 100% !important;
`;
const tilesCollapseUntilTablet = css `
	& > * {
		${until.tablet} {
			${collapseUntilWidth}
		}
	}
`;
const tilesCollapseUntilDesktop = css `
	& > * {
		${until.desktop} {
			${collapseUntilWidth}
		}
	}
`;
const tilesCollapseUntilleftCol = css `
	& > * {
		${until.leftCol} {
			${collapseUntilWidth}
		}
	}
`;
const tilesCollapseUntilWide = css `
	& > * {
		${until.wide} {
			${collapseUntilWidth}
		}
	}
`;
const tilesGridContainer = css `
	width: 100%;
	${from.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${space[5]}px;
			column-gap: ${space[5]}px;
		}
	}
`;
const gridColumnsStyle = (columns) => css `
	${from.mobileLandscape} {
		grid-template-columns: repeat(${columns}, 1fr);
	}
`;
const tileGridColumns = {
    2: gridColumnsStyle(2),
    3: gridColumnsStyle(3),
    4: gridColumnsStyle(4),
    5: gridColumnsStyle(5),
};

export { collapseUntilDesktopTiles, collapseUntilLeftColTiles, collapseUntilTabletTiles, collapseUntilWideTiles, tileGridColumns, tilesCollapseUntilDesktop, tilesCollapseUntilTablet, tilesCollapseUntilWide, tilesCollapseUntilleftCol, tilesGridContainer };
//# sourceMappingURL=styles.js.map
