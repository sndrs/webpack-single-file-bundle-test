import { jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { until, from } from '@guardian/source-foundations';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_hide--hidden-from-tablet-at-mobile) •
 * [Design System](https://theguardian.design/2a1e5182b/p/78cb73-hide) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/hide/Hide.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Hides child content `until` and/or `from` a given breakpoint.
 */
const Hide = ({ children, above, // deprecated
below, // deprecated
from: from$1 = above, until: until$1 = below, }) => {
    let whenToHide;
    if (until$1) {
        whenToHide = css `
			${until[until$1]} {
				display: none;
			}
		`;
    }
    if (from$1) {
        whenToHide = css `
			${whenToHide}
			${from[from$1]} {
				display: none;
			}
		`;
    }
    return jsx("span", { css: whenToHide, children: children });
};

export { Hide };
//# sourceMappingURL=Hide.js.map
