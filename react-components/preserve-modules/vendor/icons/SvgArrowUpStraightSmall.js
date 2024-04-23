import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.175 10.85 12.325 5h-.7L5.8 10.85l.875.875 4.3-3.45V19h2V8.275l4.3 3.45.9-.875Z", fill: theme?.fill }) }));
const SvgArrowUpStraightSmall = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Arrow up" })) : ('')] }));

export { SvgArrowUpStraightSmall };
//# sourceMappingURL=SvgArrowUpStraightSmall.js.map
