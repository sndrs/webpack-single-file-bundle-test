import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 7c0 .825-.15 1.7-.5 2.65L12.5 23h-1L6.55 9.6C6.25 8.8 6 7.875 6 7c0-3.3 2.7-6 6-6s6 2.7 6 6ZM7.75 7c0 2.325 1.925 4.25 4.25 4.25S16.25 9.325 16.25 7 14.325 2.75 12 2.75 7.75 4.675 7.75 7Z", fill: theme?.fill }) }));
const SvgLocationMarker = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Location" })) : ('')] }));

export { SvgLocationMarker };
//# sourceMappingURL=SvgLocationMarker.js.map
