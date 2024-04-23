import { css } from '@emotion/react';
import { resets, space, textSans, appearance, height, width, transitions, focusHalo } from '@guardian/source-foundations';

const fieldset = css `
	${resets.fieldset};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
const checkboxContainer = (checkbox, error = false) => css `
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;
	cursor: pointer;

	&:hover {
		input {
			border: ${error
    ? `2px solid ${checkbox.borderError}`
    : `2px solid ${checkbox.borderHover}`};
			/*
				In the indeterminate state, we increase the border width by 1px on
				hover. This causes the position of the indeterminate dash to shift as it
				is absolutely positioned. This negative margin accounts for the extra
				border width and prevents the shift. We need to locate this css here as
				the hover sits on the container, rather than the input element.
			*/
			&:indeterminate {
				&:after {
					margin: -1px;
				}
			}
		}
	}
	&:active {
		input {
			border-color: ${checkbox.borderHover};
		}
	}
`;
const label = css `
	cursor: pointer;
`;
const checkboxContainerWithSupportingText = css `
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;
const checkbox = (checkbox, error = false) => css `
	flex: 0 0 auto;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 1px solid currentColor;
	background: ${checkbox.fillUnselected};
	border-radius: 4px;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;
	color: ${checkbox.borderUnselected};

	&:focus {
		${focusHalo};
	}

	@supports (${appearance}) {
		appearance: none;
		&:checked {
			border: ${error
    ? `2px solid ${checkbox.borderError}`
    : `2px solid ${checkbox.borderSelected}`};
			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}

		&:indeterminate {
			&:after {
				${textSans.xlarge()};
				color: ${checkbox.textIndeterminate};
				content: '-';
				position: absolute;
				top: -7px;
				left: 6px;
				z-index: 5;
			}
		}
	}
`;
const labelText = (checkbox) => css `
	${textSans.medium()};
	color: ${checkbox.textLabel};
	width: 100%;
`;
const labelTextWithSupportingText = css `
	${textSans.medium()};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`;
const supportingText = (checkbox) => css `
	${textSans.small()};
	color: ${checkbox.textSupporting};
`;
const tick = (checkbox) => css `
	@supports (
		(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)
	) {
		/* overall positional properties */
		position: absolute;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		/*
		these properties are very sensitive and are overridden
		if the checkbox has a label or supporting text
	*/
		top: 14px;
		left: 9px;
		/*
			this prevents simulated click events to the checkbox, eg from Selenium tests
			from being intercepted by the tick
		*/
		pointer-events: none;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${checkbox.fillSelected};
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
	}
`;
const tickWithLabelText = css `
	@supports (${appearance}) {
		top: 15px;
		left: 9px;
	}
`;
const tickWithSupportingText = css `
	@supports (${appearance}) {
		top: 5px;
	}
`;
const errorCheckbox = (checkbox) => css `
	border: 2px solid ${checkbox.borderError};
	border-radius: 4px;
	&:not(:checked):hover,
	&:active {
		border: 2px solid ${checkbox.borderHover};
	}
`;

export { checkbox, checkboxContainer, checkboxContainerWithSupportingText, errorCheckbox, fieldset, label, labelText, labelTextWithSupportingText, supportingText, tick, tickWithLabelText, tickWithSupportingText };
//# sourceMappingURL=styles.js.map
