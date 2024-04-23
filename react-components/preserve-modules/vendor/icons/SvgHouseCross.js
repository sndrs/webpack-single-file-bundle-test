import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.3 8.35 18 6.05l-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3 1.05-1.05 2.3 2.3 2.3-2.3 1.05 1.05-2.3 2.3 2.3 2.3-1.05 1.05ZM12 4.975C12 8.275 14.725 11 18 11v9l-1 1h-4.5v-6.5h-5V21H3l-1-1V9.375L9.4 2h1l1.725 1.7c-.075.4-.125.85-.125 1.275Z", fill: theme?.fill }) }));
const SvgHouseCross = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Remove from home" })) : ('')] }));

export { SvgHouseCross };
//# sourceMappingURL=SvgHouseCross.js.map
