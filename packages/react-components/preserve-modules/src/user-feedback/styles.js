import { css } from '@emotion/react';
import { textSans, remWidth, remHeight } from '@guardian/source-foundations';

const inlineMessage = css `
	display: flex;
	align-items: flex-start;

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -4px);
	}
`;
const inlineMessageSmall = css `
	${textSans.xsmall()};
	svg {
		width: ${remWidth.iconSmall}rem;
		height: ${remHeight.iconSmall}rem;
	}
`;
const inlineMessageMedium = css `
	${textSans.medium()};
	svg {
		width: ${remWidth.iconMedium}rem;
		height: ${remHeight.iconMedium}rem;
	}
`;
const inlineMessageSize = {
    small: inlineMessageSmall,
    medium: inlineMessageMedium,
};
const inlineError = (userFeedback, size) => css `
	${inlineMessage};
	${inlineMessageSize[size]};
	color: ${userFeedback.textError};
`;
const inlineSuccess = (userFeedback, size) => css `
	${inlineMessage};
	${inlineMessageSize[size]};
	color: ${userFeedback.textSuccess};
`;

export { inlineError, inlineSuccess };
//# sourceMappingURL=styles.js.map
