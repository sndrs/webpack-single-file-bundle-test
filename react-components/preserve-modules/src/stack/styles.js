import { css } from '@emotion/react';
import { space } from '@guardian/source-foundations';

const stack = css `
	& > * {
		width: 100%;
	}
`;
const stackSpaceStyle = (number) => css `
	& > * + * {
		margin-top: ${space[number]}px;
	}
`;
const stackSpace = {
    1: stackSpaceStyle(1),
    2: stackSpaceStyle(2),
    3: stackSpaceStyle(3),
    4: stackSpaceStyle(4),
    5: stackSpaceStyle(5),
    6: stackSpaceStyle(6),
    9: stackSpaceStyle(9),
    12: stackSpaceStyle(12),
    24: stackSpaceStyle(24),
};

export { stack, stackSpace };
//# sourceMappingURL=styles.js.map
