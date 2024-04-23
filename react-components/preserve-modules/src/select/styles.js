import { css } from '@emotion/react';
import { space, width, height, textSans, appearance, focusHalo } from '@guardian/source-foundations';

const errorInput = (select) => css `
	border: 2px solid ${select.borderError};
	border-radius: 4px;
	color: ${select.textError};
	/* When select is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 2px solid ${select.borderError};
	}
`;
const successInput = (select) => css `
	border: 2px solid ${select.borderSuccess};
	border-radius: 4px;
	color: ${select.textSuccess};
	/* When select is active and in an success state, we want the border to remain the same. */
	&:active {
		border: 2px solid ${select.borderSuccess};
	}
`;
const errorChevron = (select) => css `
	svg {
		fill: ${select.textError};
	}
`;
const successChevron = (select) => css `
	svg {
		fill: ${select.textSuccess};
	}
`;
const selectWrapper = (select) => css `
	position: relative;

	svg {
		display: none;
		position: absolute;
		right: ${space[3]}px;
		top: ${space[2]}px;
		width: ${width.iconMedium}px;
		height: ${height.iconMedium}px;
		fill: ${select.textUserInput};
		pointer-events: none;
	}
`;
const select = (select) => css `
	color: ${select.textUserInput};
	box-sizing: border-box;
	height: ${height.inputMedium}px;
	width: 100%;
	${textSans.medium()};
	background-color: ${select.backgroundInput};
	border: 1px solid ${select.border};
	border-radius: 4px;
	padding-left: ${space[2]}px;

	@supports (${appearance}) {
		appearance: none;
		padding-right: ${space[2]}px;

		& ~ svg {
			display: block;
		}
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		${errorInput(select)};
	}
`;
css `
	margin-top: ${space[1]}px;
`;
const supportingTextMargin = css `
	margin-top: 6px;
`;
const inlineMessageMargin = css `
	margin-top: ${space[1]}px;
`;

export { errorChevron, errorInput, inlineMessageMargin, select, selectWrapper, successChevron, successInput, supportingTextMargin };
//# sourceMappingURL=styles.js.map
