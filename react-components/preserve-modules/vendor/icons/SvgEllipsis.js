import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.05 10.207 6.344 9.5H2.707L2 10.207v3.636l.707.707h3.636l.708-.707v-3.636Zm7.475 0-.707-.707h-3.636l-.707.707v3.636l.707.707h3.636l.707-.707v-3.636Zm7.475 0-.707-.707h-3.636l-.707.707v3.636l.707.707h3.636l.707-.707v-3.636Z", fill: theme?.fill }) }));
const SvgEllipsis = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "More" })) : ('')] }));

export { SvgEllipsis };
//# sourceMappingURL=SvgEllipsis.js.map
