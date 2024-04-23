import { css } from '@emotion/react';
import { space, from, textSans, between, height, focusHalo, width } from '@guardian/source-foundations';
import { footerThemeBrand } from './theme.js';

const footer = (footer = footerThemeBrand.footer) => css `
	color: ${footer.text};
	background-color: ${footer.background};
	padding: 0 ${space[3]}px ${space[3]}px ${space[3]}px;

	${from.desktop} {
		padding-bottom: ${space[6]}px;
	}
`;
const linksWrapper = css `
	display: flex;
	align-items: center;
`;
const linksWrapperSpace = css `
	margin-bottom: ${space[6]}px;
	${from.desktop} {
		margin-bottom: ${space[1]}px;
	}
`;
const backToTopSpace = (initial) => initial - height.ctaMedium / 2;
const linksWrapperSpaceWithBackToTop = css `
	margin-bottom: ${backToTopSpace(space[6])}px;
	${from.desktop} {
		margin-bottom: ${backToTopSpace(space[1])}px;
	}
`;
const links = (footer = footerThemeBrand.footer) => css `
	border-style: solid;
	border-color: ${footer.border};
	border-width: 0 0 1px 0;
	flex: 1 1 auto;

	/* TODO: viewport-specific layout for when footer supports content */
	/* border-width: 1px 0 1px 0;

	${from.desktop} {
		border-width: 1px;
	} */
`;
const copyright = css `
	${textSans.xxsmall()};
	display: block;
`;
// ensure copyright text doesn't get too close to back to top link
const copyrightExtraPadding = css `
	${between.mobile.and.tablet} {
		padding-right: ${height.ctaMedium}px;
	}
`;
const backToTop = (footer = footerThemeBrand.footer) => css `
	display: flex;
	align-items: center;
	height: ${height.ctaMedium}px;
	padding-left: ${space[2]}px;

	${textSans.small({ fontWeight: 'bold' })};
	color: ${footer.anchor};
	background-color: ${footer.background};
	text-decoration: none;
	white-space: nowrap;

	& :hover {
		color: ${footer.anchorHover};
	}

	& :focus {
		${focusHalo};
	}
`;
const backToTopIcon = (footer = footerThemeBrand.footer) => css `
	height: ${height.ctaMedium}px;
	width: ${width.ctaMedium}px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${height.ctaMedium}px;
	background: currentColor;
	margin-left: ${space[2]}px;

	svg {
		height: ${height.iconSmall}px;
		width: ${width.iconSmall}px;
		fill: ${footer.background};
	}
`;

export { backToTop, backToTopIcon, copyright, copyrightExtraPadding, footer, links, linksWrapper, linksWrapperSpace, linksWrapperSpaceWithBackToTop };
//# sourceMappingURL=styles.js.map
