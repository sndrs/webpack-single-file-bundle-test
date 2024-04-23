import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4.9c4.875 0 11 6.475 11 6.475v1.175s-6.125 6.475-11 6.475S1 12.55 1 12.55v-1.175S7.125 4.9 12 4.9Zm0 11.775c2.6 0 4.725-2.1 4.725-4.7A4.721 4.721 0 0 0 12 7.25c-2.6 0-4.725 2.1-4.725 4.725 0 2.6 2.125 4.7 4.725 4.7Zm0-6.275c0 .85.7 1.575 1.575 1.575h.775c0 1.3-1.05 2.35-2.35 2.35s-2.35-1.05-2.35-2.35A2.353 2.353 0 0 1 12 9.6v.8Z", fill: theme?.fill }) }));
const SvgEye = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "View" })) : ('')] }));

export { SvgEye };
//# sourceMappingURL=SvgEye.js.map
