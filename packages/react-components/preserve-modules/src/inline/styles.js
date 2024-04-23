import { css } from '@emotion/react';
import { space } from '@guardian/source-foundations';

const inline = css `
	display: flex;
	flex-wrap: wrap;
`;
const inlineSpaceStyle = (number) => css `
	margin-left: -${space[number]}px;
	& > * {
		margin-left: ${space[number]}px;
		margin-bottom: ${space[number]}px;
	}
`;
const inlineSpace = {
    1: inlineSpaceStyle(1),
    2: inlineSpaceStyle(2),
    3: inlineSpaceStyle(3),
    4: inlineSpaceStyle(4),
    5: inlineSpaceStyle(5),
    6: inlineSpaceStyle(6),
    9: inlineSpaceStyle(9),
    12: inlineSpaceStyle(12),
    24: inlineSpaceStyle(24),
};

export { inline, inlineSpace };
//# sourceMappingURL=styles.js.map
