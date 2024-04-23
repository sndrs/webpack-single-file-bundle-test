import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.975 2.275v7.25l.475.475h7.275V8.75l-4.5-.6 5.75-5.725L21.55 1l-5.725 5.775-.6-4.5h-1.25Zm-4 19.45v-7.25L9.5 14H2.25v1.25l4.475.575L1 21.575 2.4 23l5.75-5.775.575 4.5h1.25Z", fill: theme?.fill }) }));
const SvgArrowContract = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Collapse" })) : ('')] }));

export { SvgArrowContract };
//# sourceMappingURL=SvgArrowContract.js.map
