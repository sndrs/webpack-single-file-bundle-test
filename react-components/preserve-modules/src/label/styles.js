import { css } from '@emotion/react';
import { textSans, resets } from '@guardian/source-foundations';

const textSize = {
    medium: textSans.medium({ fontWeight: 'bold' }),
    small: textSans.xsmall({ fontWeight: 'bold' }),
};
const legend = css `
	${resets.legend};
`;
const labelText = (label, size) => css `
	${textSize[size]};
	color: ${label.textLabel};
`;
const optionalText = (label) => css `
	${textSans.xsmall()};
	color: ${label.textOptional};
	font-style: italic;
`;
const supportingText = (label) => css `
	${textSans.xsmall()};
	color: ${label.textSupporting};
	margin: 2px 0 0;
`;

export { labelText, legend, optionalText, supportingText };
//# sourceMappingURL=styles.js.map
