import { css } from '@emotion/react';
import { textSans, space, focusHalo } from '@guardian/source-foundations';

const textAreaSize = {
    medium: textSans.medium(),
    small: textSans.xsmall(),
};
const errorInput = (textArea) => css `
	border: 2px solid ${textArea.borderError};
	border-radius: 4px;
	color: ${textArea.textError};
	margin-top: 0;
`;
const successInput = (textArea) => css `
	border: 2px solid ${textArea.borderSuccess};
	border-radius: 4px;
	color: ${textArea.textSuccess};
	margin-top: 0;
`;
const textArea = (textArea, size) => css `
	box-sizing: border-box;
	${textAreaSize[size]};
	color: ${textArea.textUserInput};
	background-color: ${textArea.backgroundInput};
	border: 1px solid ${textArea.border};
	border-radius: 4px;
	padding: ${space[2]}px ${space[2]}px 0 ${space[2]}px;

	&:focus {
		${focusHalo};
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
		We automatically apply error styling to fields in an invalid state,
		but stop short of applying it to empty required fields.

		Note: the following class will only be applied to a controlled
		component: https://reactjs.org/docs/forms.html#controlled-components
		*/
		.src-has-value {
			${errorInput(textArea)}
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

export { errorInput, inlineMessageMargin, labelMargin, successInput, supportingTextMargin, textArea, widthFluid };
//# sourceMappingURL=styles.js.map
