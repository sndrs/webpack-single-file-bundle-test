import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.262 11.463v7.5h2v-8.476l-1.025-1.025H6.987l2.75-3.525-.85-.9-5.15 5.125v.675l5.1 5.125.9-.875-2.75-3.624h11.275Z", fill: theme?.fill }) }));
const SvgArrowOutdent = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Up left arrow" })) : ('')] }));

export { SvgArrowOutdent };
//# sourceMappingURL=SvgArrowOutdent.js.map
