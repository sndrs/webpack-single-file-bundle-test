import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.68 5.36V18.64l-3.528-2.72-.882.882 5.046 4.998h.686L23 16.801l-.858-.882-3.503 2.72V5.36l3.503 2.72.858-.882L18.002 2.2h-.686L12.27 7.198l.882.882 3.527-2.72Zm-5.88-.22V3.18H1v1.96h9.8Zm-.98 3.92V7.1H1v1.96h8.82Zm1.96 3.92v-1.96H1v1.96h10.78ZM8.84 16.9v-1.96H1v1.96h7.84Z", fill: theme?.fill }) }));
const SvgArrowScroll = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Scroll content" })) : ('')] }));

export { SvgArrowScroll };
//# sourceMappingURL=SvgArrowScroll.js.map