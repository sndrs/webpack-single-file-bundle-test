import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsxs("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: [jsx("path", { d: "M2.571 4 1 5.699l9.952 7.926h2.096L23 5.699 21.429 4H2.57Z", fill: theme?.fill }), jsx("path", { d: "M1 17.625v-9.5l9.952 7h2.096l9.952-7v9.5l-1.571 1.5H2.57L1 17.625Z", fill: theme?.fill })] }));
const SvgEnvelope = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Email" })) : ('')] }));

export { SvgEnvelope };
//# sourceMappingURL=SvgEnvelope.js.map
