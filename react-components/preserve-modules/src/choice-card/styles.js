import { css } from '@emotion/react';
import { resets, from, space, textSans, width, height, visuallyHidden, palette, transitions } from '@guardian/source-foundations';

const fieldset = css `
	${resets.fieldset};
`;
// TODO: This is currently applied to a div instead of the fieldset
// due to a Chrome / Safari bug that prevents flexbox model working
// on fieldset elements
// https://bugs.chromium.org/p/chromium/issues/detail?id=375693
const flexContainer = css `
	width: 100%;

	${from.mobileLandscape} {
		display: flex;
		justify-content: flex-start;
	}
`;
const containerTopMargin = css `
	margin-top: ${space[2]}px;
`;
const gridContainer = css `
	width: 100%;
	${from.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${space[2]}px;
			column-gap: ${space[2]}px;
			& > label {
				margin: 0;
			}
		}
	}
`;
const gridColumnsStyle = (columns) => css `
	${from.mobileLandscape} {
		grid-template-columns: repeat(${columns}, 1fr);
	}
`;
const gridColumns = {
    2: gridColumnsStyle(2),
    3: gridColumnsStyle(3),
    4: gridColumnsStyle(4),
    5: gridColumnsStyle(5),
};
const input = (theme) => css `
	${visuallyHidden};

	&:focus + label {
		html:not(.src-focus-disabled) & {
			outline: 3px solid ${palette.focus[400]};
		}
	}

	&:checked + label {
		box-shadow: inset 0 0 0 2px ${theme.borderSelected};
		background-color: ${theme.backgroundSelected};

		& > * {
			color: ${theme.textSelected};

			/* last child is the tick */
			&:last-child {
				&:before {
					right: 0;
				}
				&:after {
					top: 0;
				}
			}
		}
	}
`;
// TODO: use animation durations defined in foundations
const tickAnimation = css `
	@keyframes labelFadeOutIn {
		0% {
			opacity: 1;
		}
		1%,
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes tickFadeInOut {
		0% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		70% {
			opacity: 0;
		}
	}

	&:checked + label {
		& > * {
			animation-duration: 1s;
			animation-name: labelFadeOutIn;

			/* last child is the tick */
			&:last-child {
				animation-name: tickFadeInOut;
			}
		}
	}
`;
const choiceCard = (theme) => css `
	flex: 1;
	display: flex;
	justify-content: center;
	min-height: ${height.inputMedium}px;
	margin: 0 0 ${space[2]}px 0;
	box-shadow: inset 0 0 0 1px ${theme.borderUnselected};
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	background-color: ${theme.backgroundUnselected};
	color: ${theme.textUnselected};

	${from.mobileLandscape} {
		margin: 0 ${space[2]}px 0 0;
		&:last-child {
			margin: 0;
		}
	}

	&:hover {
		box-shadow: inset 0 0 0 2px ${theme.borderHover};
		background-color: ${theme.backgroundHover};
		color: ${theme.textHover};
	}
`;
const contentWrapper = css `
	flex: 0 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	${from.mobileLandscape} {
		flex-direction: column;
		padding: ${space[2]}px ${space[6]}px;
	}

	& > * {
		${textSans.medium({ fontWeight: 'bold' })};
		text-align: center;
	}

	& svg {
		width: ${width.iconMedium}px;
		max-height: ${height.iconMedium}px;
		fill: currentColor;
		margin-right: ${space[1]}px;

		${from.mobileLandscape} {
			margin-bottom: -${space[1]}px;
			margin-right: 0;
		}
	}
`;
/* We need to explicitly set the width of the content to support
flex-direction: column in IE11 */
const contentWrapperLabelOnly = css `
	width: 100%;
	${from.mobileLandscape} {
		& > div {
			width: 100%;
		}
	}
`;
// TODO: most of this is duplicated in the checkbox component
// We should extract it into its own module somewhere
const tick = (theme) => css `
	/* overall positional properties */
	position: absolute;
	top: 50%;
	left: 50%;
	width: 7px;
	height: 20px;
	transform: rotate(45deg) translateX(-100%) translateY(-35%);
	opacity: 0;

	/* the checkmark ✓ */
	&:after,
	&:before {
		position: absolute;
		display: block;
		background-color: ${theme.backgroundTick};
		transition: all ${transitions.short} ease-in-out;
		content: '';
	}

	/* the short side */
	&:before {
		height: 2px;
		bottom: 0;
		left: 0;
		right: 100%;
		transition-delay: 0.05s;
	}

	/* the long side */
	&:after {
		bottom: 0;
		right: 0;
		top: 100%;
		width: 2px;
		transition-delay: 0.1s;
	}
`;
const errorChoiceCard = (theme) => css `
	box-shadow: inset 0 0 0 2px ${theme.borderError};

	& > * {
		color: ${theme.textError};
	}
`;

export { choiceCard, containerTopMargin, contentWrapper, contentWrapperLabelOnly, errorChoiceCard, fieldset, flexContainer, gridColumns, gridContainer, input, tick, tickAnimation };
//# sourceMappingURL=styles.js.map
