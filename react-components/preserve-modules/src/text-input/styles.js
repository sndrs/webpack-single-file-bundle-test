import { css } from '@emotion/react';
import { textSans, size, space, focusHalo } from '@guardian/source-foundations';

const inputSizeMedium = css `
	${textSans.medium()};
	height: ${size.medium}px;
`;
const inputSizeSmall = css `
	${textSans.xsmall()};
	height: ${size.small}px;
`;
const inputSize = {
    medium: inputSizeMedium,
    small: inputSizeSmall,
};
const errorInput = (textInput) => css `
	border: 2px solid ${textInput.borderError};
	border-radius: 4px;
	color: ${textInput.textError};
	margin-top: 0;
`;
const successInput = (textInput) => css `
	border: 2px solid ${textInput.borderSuccess};
	border-radius: 4px;
	color: ${textInput.textSuccess};
	margin-top: 0;
`;
const textInput = (textInput, size) => css `
	box-sizing: border-box;
	${inputSize[size]};
	color: ${textInput.textUserInput};
	background-color: ${textInput.backgroundInput};
	border: 1px solid ${textInput.border};
	border-radius: 4px;
	padding: 0 ${space[2]}px;

	&:focus {
		${focusHalo}
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
		&[value]:not([value='']) {
			${errorInput(textInput)};
		}
	}
`;
const labelMargin = css `
	margin-top: ${space[1]}px;
`;
const supportingTextMargin = css `
	margin-top: 6px;
`;
const inlineMessageMargin = css `
	margin-top: 2px;
`;
const widthFluid = css `
	width: 100%;
`;
const width30 = css `
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`;
const width10 = css `
	width: 18ex;
`;
const width4 = css `
	width: 9ex;
`;

export { errorInput, inlineMessageMargin, labelMargin, successInput, supportingTextMargin, textInput, width10, width30, width4, widthFluid };
//# sourceMappingURL=styles.js.map
