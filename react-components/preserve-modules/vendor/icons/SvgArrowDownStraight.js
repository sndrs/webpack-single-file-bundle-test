import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.045 1v18.274l-8.576-7.167-.931.932L11.523 23h.955l9.985-9.96-.932-.932-8.575 7.166V1h-1.911Z", fill: theme?.fill }) }));
const SvgArrowDownStraight = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Arrow down" })) : ('')] }));

export { SvgArrowDownStraight };
//# sourceMappingURL=SvgArrowDownStraight.js.map
