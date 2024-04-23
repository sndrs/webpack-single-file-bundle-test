import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 8.75V1.5l-.5-.5h-7.25v1.25l4.5.6L14 8.575 15.4 10l5.75-5.725.6 4.475H23Zm-22 6.5v7.25l.475.5h7.25v-1.25l-4.475-.6 5.725-5.775L8.6 14l-5.775 5.725-.575-4.475H1Z", fill: theme?.fill }) }));
const SvgArrowExpand = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Expand" })) : ('')] }));

export { SvgArrowExpand };
//# sourceMappingURL=SvgArrowExpand.js.map
