import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 10.75h-1.25l-.6-4.525L15.4 12 14 10.575l5.725-5.75-4.475-.575V3h7.275l.475.475v7.275ZM11 8 9.975 9H3v10h16v-5l.975-1H21v6.975L19.975 21h-18L1 19.975V8l.975-1H11v1Z", fill: theme?.fill }) }));
const SvgExternal = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "External link" })) : ('')] }));

export { SvgExternal };
//# sourceMappingURL=SvgExternal.js.map
