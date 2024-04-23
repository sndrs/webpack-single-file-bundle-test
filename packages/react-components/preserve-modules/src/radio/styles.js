import { css } from '@emotion/react';
import { space, textSans, resets, height, width, transitions, focusHalo, appearance } from '@guardian/source-foundations';

const fieldset = (radio) => css `
	${resets.fieldset};

	&[aria-invalid='true'] input {
		border: 2px solid ${radio.borderError};

		&:not(:checked):hover,
		&:active {
			border: 2px solid ${radio.borderHover};
		}
	}
`;
const radioContainer = (radio) => css `
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;
	cursor: pointer;

	&:hover {
		input {
			border: 2px solid ${radio.borderHover};
		}
	}
`;
const label = css `
	cursor: pointer;
`;
const labelWithSupportingText = css `
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;
const radio = (radio) => css `
	flex: 0 0 auto;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 1px solid currentColor;
	border-radius: 50%;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${radio.borderUnselected};

	&:checked {
		border: 2px solid ${radio.borderSelected};
		color: ${radio.fillSelected};
	}

	&:focus {
		${focusHalo};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes radio buttons look horrible on older browsers
	*/
	@supports (${appearance}) {
		appearance: none;
		background-color: ${radio.fillUnselected};

		&:after {
			background: currentColor;
			position: absolute;
			content: '';
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${transitions.short};
		}

		&:checked {
			&:after {
				transform: scale(0.6);
			}
		}
	}
`;
const labelText = (radio) => css `
	${textSans.medium()};
	color: ${radio.textLabel};
	width: 100%;
`;
const labelTextWithSupportingText = css `
	${textSans.medium({ fontWeight: 'bold' })};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`;
const supportingText = (radio) => css `
	${textSans.small()};
	color: ${radio.textSupporting};
`;

export { fieldset, label, labelText, labelTextWithSupportingText, labelWithSupportingText, radio, radioContainer, supportingText };
//# sourceMappingURL=styles.js.map
