import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 9V7h4V4.5l1-1h2.5l1 1V7H23v2H9.5v2.5l-1 1H6l-1-1V9H1Zm7-4H6.5v6H8V5Zm8.5 12H1v-2h15.5v-2.525l.975-.975H20l1 1V15h2v2h-2v2.5l-1 1h-2.525l-.975-1V17Zm3-4H18v6h1.5v-6Z", fill: theme?.fill }) }));
const SvgFilter = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Filter" })) : ('')] }));

export { SvgFilter };
//# sourceMappingURL=SvgFilter.js.map
