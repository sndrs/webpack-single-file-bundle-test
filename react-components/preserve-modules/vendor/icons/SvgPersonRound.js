import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.236 18.718A9.135 9.135 0 0 1 12 21.167c-2.41 0-4.603-.93-6.239-2.45l1.188-4.648.737-.759c1.438-.5 2.732-.722 4.314-.722 1.564 0 2.876.26 4.314.722l.719.76 1.203 4.648ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10.01-.588c1.355 0 2.951-1.703 2.951-3.779 0-2.076-1.094-3.28-2.95-3.28s-2.932 1.204-2.932 3.28c0 2.076 1.726 3.779 2.932 3.779Z", fill: theme?.fill }) }));
const SvgPersonRound = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Account" })) : ('')] }));

export { SvgPersonRound };
//# sourceMappingURL=SvgPersonRound.js.map
