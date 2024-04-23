import { css } from '@emotion/react';
import { textSans, focusHalo, width, space } from '@guardian/source-foundations';
import { mergeThemes } from '../utils/themes.js';
import { themeLink } from './theme.js';

const link = css `
	position: relative;
	${textSans.medium()};
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
	text-underline-offset: 5%;

	display: inline;
	align-items: center;

	&:focus {
		${focusHalo};
	}

	&:hover {
		/* If the hover text decoration thickness is not set, we default to the initial value. */
		text-decoration-thickness: var(--source-text-decoration-thickness, auto);
	}
`;
const buttonLink = css `
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
`;
const primary = (link) => css `
	color: ${link.textPrimary};

	&:hover {
		color: ${link.textPrimaryHover};
	}
`;
const secondary = (link) => css `
	color: ${link.textSecondary};

	&:hover {
		color: ${link.textSecondaryHover};
	}
`;
const icon = css `
	svg {
		fill: currentColor;
		/*
		TODO: hardcoded bottom margin to vertically align
		icons with text. This needs to be revisited when
		the rules of icon spacing have been formalised
		 */
		margin-bottom: -3px;
		width: ${width.iconXsmall}px;
		height: auto;
	}
`;
const iconRight = css `
	svg {
		margin-left: -${space[5]}px;
	}
`;
const iconLeft = css `
	svg {
		margin-left: -${space[6]}px;
		margin-right: ${space[1]}px;
	}
`;
const priorities = {
    primary,
    secondary,
};
const iconSides = {
    right: iconRight,
    left: iconLeft,
};
const linkStyles = ({ isButton, priority, iconSvg, iconSide = 'left', cssOverrides, theme, }) => {
    const mergedTheme = (providerTheme) => mergeThemes(themeLink, theme, providerTheme);
    return (providerTheme) => [
        link,
        isButton ? buttonLink : '',
        priorities[priority](mergedTheme(providerTheme.link)),
        iconSvg ? icon : '',
        iconSvg ? iconSides[iconSide] : '',
        cssOverrides,
    ];
};

export { buttonLink, icon, iconLeft, iconRight, link, linkStyles, primary, secondary };
//# sourceMappingURL=styles.js.map
