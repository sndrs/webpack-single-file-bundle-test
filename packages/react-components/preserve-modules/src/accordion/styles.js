import { css } from '@emotion/react';
import { remSpace, headline, transitions, from, space, focusHalo, textSans, until, visuallyHidden } from '@guardian/source-foundations';

const accordion = (accordion) => css `
	border-bottom: 1px solid ${accordion.border};
`;
const accordionRow = (accordion) => css `
	border-top: 1px solid ${accordion.border};
`;
const buttonStyles = css `
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${remSpace[1]} 0 ${remSpace[5]} 0;
	cursor: pointer;
`;
const button = (accordion) => css `
	${buttonStyles};
	color: ${accordion.textCta};

	/* user agent overrides */
	background: none;
	outline: none;
	border: none;
	text-align: left;

	&:focus div {
		${focusHalo};
	}
`;
const noJsButton = (accordion) => css `
	${buttonStyles};
	color: ${accordion.textCta};
`;
const labelText = css `
	${headline.xxxsmall({ fontWeight: 'bold' })};
	margin-right: ${remSpace[4]};
`;
const expandedBodyStyles = (accordion) => css `
	/*
	TODO:
	Hardcoded max-height because auto is invalid.
	If content is longer, we'll need to set overflow: auto
	but only after max-height has been reached.
	Otherwise, for short content we'll always see a flash
	of a scrollbar as the row height is transitioning
	*/
	color: ${accordion.textBody};
	max-height: 500px;
	transition: max-height ${transitions.medium};
	overflow: hidden;
	height: auto;
	padding-bottom: ${remSpace[5]};
`;
const expandedBody = (accordion) => css `
	${expandedBodyStyles(accordion)};
`;
const collapsedBodyStyles = css `
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${transitions.short};
	*/
	overflow: hidden;
`;
const collapsedBody = css `
	${collapsedBodyStyles};
`;
const noJsInput = (accordion) => css `
	${visuallyHidden};

	&:focus + [data-target='label'] > [data-target='toggle'] {
		${focusHalo};
	}

	&:not(:checked) ~ [data-target='body'] {
		${collapsedBodyStyles};
		display: none;
	}

	&:checked ~ [data-target='body'] {
		${expandedBodyStyles(accordion)};
	}

	&:not(:checked) + [data-target='label'] [data-target='toggle-label-hide'] {
		display: none;
	}

	&:checked + [data-target='label'] [data-target='toggle-label-show'] {
		display: none;
	}
`;
const toggle = css `
	width: auto;
	display: flex;
	align-items: center;
`;
const toggleLabel = (accordion) => css `
	${textSans.small({ fontWeight: 'bold' })};
	color: ${accordion.textLabel};
	${until.tablet} {
		${visuallyHidden}
	}
`;
const chevronIcon = css `
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${from.tablet} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${remSpace[1]};
		transition: ${transitions.short};
	}
`;
const chevronIconDown = css `
	${chevronIcon};
	svg {
		transform: translate(0, 0);
		transition: transform ${transitions.short};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${space[1] / 2}px);
		}
	}
`;
const chevronIconUp = css `
	${chevronIcon};
	svg {
		transform: rotate(180deg);
		transition: transform ${transitions.short};
	}
`;
const toggleIconWithLabel = css `
	svg {
		width: 18px;
		height: 18px;
	}
`;

export { accordion, accordionRow, button, chevronIconDown, chevronIconUp, collapsedBody, collapsedBodyStyles, expandedBody, labelText, noJsButton, noJsInput, toggle, toggleIconWithLabel, toggleLabel };
//# sourceMappingURL=styles.js.map
