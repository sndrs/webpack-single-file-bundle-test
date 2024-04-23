import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.45 6.125 12.35 1h-.7l-5.1 5.125.85.85 3.6-2.75V10h2V4.225l3.6 2.75.85-.85ZM7.4 17l-.85.9 5.1 5.1h.7l5.1-5.1-.85-.9-3.6 2.75V14h-2v5.75L7.4 17Z", fill: theme?.fill }) }));
const SvgArrowUpAndDownSmall = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Up and down arrow" })) : ('')] }));

export { SvgArrowUpAndDownSmall };
//# sourceMappingURL=SvgArrowUpAndDownSmall.js.map
