import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m2 11.259 9.499-9.499H12.5L22 11.259l-.977.952L12 4.843 2.977 12.21 2 11.26Zm0 10.025 9.499-9.499H12.5L22 21.284l-.977.952L12 14.868l-9.023 7.368L2 21.284Z", fill: theme?.fill }) }));
const SvgChevronUpDouble = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Double chevron up" })) : ('')] }));

export { SvgChevronUpDouble };
//# sourceMappingURL=SvgChevronUpDouble.js.map
