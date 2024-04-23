import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.575 6.125V9.25H6.15v3.45h3.425V23H13.7V12.7h3.375l.75-3.45H13.7V6.5c0-1.525.9-2.05 2.075-2.05h2.05L17.7 1.175c-1.025-.1-1.825-.175-3-.175-2.925 0-5.125 1.825-5.125 5.125Z", fill: "#1877F2" }) }));
const SvgFacebookBrand = ({ size, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Facebook logo" })) : ('')] }));

export { SvgFacebookBrand };
//# sourceMappingURL=SvgFacebookBrand.js.map
