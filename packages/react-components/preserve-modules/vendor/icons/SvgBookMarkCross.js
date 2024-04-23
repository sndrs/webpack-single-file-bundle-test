import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m15.324 6.777-1.058-1.083 2.318-2.318-2.293-2.293L15.324.025l2.292 2.318L19.96 0l1.084 1.058L18.7 3.401l2.343 2.343-1.058 1.033-2.343-2.318-2.318 2.318ZM17.5 8.625v13.912l-.458.463L12 20.69 6.958 23l-.458-.463V4.389L7.875 3H12c0 3.056 2.475 5.625 5.5 5.625Z", fill: theme?.fill }) }));
const SvgBookMarkCross = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Remove bookmark" })) : ('')] }));

export { SvgBookMarkCross };
//# sourceMappingURL=SvgBookMarkCross.js.map