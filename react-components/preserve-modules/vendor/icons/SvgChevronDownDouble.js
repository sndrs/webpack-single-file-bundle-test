import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m2 2.712.977-.952L12 9.128l9.023-7.368.977.952-9.499 9.5H11.5L2 2.711Zm0 10.026.977-.953L12 19.154l9.023-7.369.977.953-9.499 9.498H11.5L2 12.738Z", fill: theme?.fill }) }));
const SvgChevronDownDouble = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Double chevron down" })) : ('')] }));

export { SvgChevronDownDouble };
//# sourceMappingURL=SvgChevronDownDouble.js.map
