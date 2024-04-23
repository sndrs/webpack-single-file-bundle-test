import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 11.044H4.726l7.167-8.575-.932-.932L1 11.522v.956l9.96 9.984.932-.931-7.166-8.575H23v-1.912Z", fill: theme?.fill }) }));
const SvgArrowLeftStraight = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Arrow left" })) : ('')] }));

export { SvgArrowLeftStraight };
//# sourceMappingURL=SvgArrowLeftStraight.js.map
