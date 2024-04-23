import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size }) => (jsxs("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: [jsx("path", { d: "M18.108 7.573a9.717 9.717 0 0 1-.057.328c-.738 3.789-3.262 5.097-6.486 5.097H9.923a.797.797 0 0 0-.788.676l-.84 5.33-.238 1.51A.42.42 0 0 0 8.47 21h2.912a.7.7 0 0 0 .692-.59l.028-.148.548-3.48.036-.19a.7.7 0 0 1 .692-.592h.435c2.82 0 5.029-1.145 5.674-4.459.27-1.384.13-2.54-.583-3.353a2.784 2.784 0 0 0-.797-.615Z", fill: "#A7B4C8" }), jsx("path", { d: "M17.336 7.265a5.83 5.83 0 0 0-.718-.159 9.116 9.116 0 0 0-1.447-.105h-4.385a.697.697 0 0 0-.691.591l-.933 5.91-.027.171a.797.797 0 0 1 .788-.675h1.641c3.224 0 5.748-1.309 6.486-5.097.022-.112.04-.221.058-.328a3.935 3.935 0 0 0-.772-.308Z", fill: "#041F4A" }), jsx("path", { d: "M10.095 7.592a.697.697 0 0 1 .691-.59h4.385c.52 0 1.005.033 1.447.105a5.807 5.807 0 0 1 .883.21c.218.073.42.158.607.256.22-1.4-.001-2.353-.758-3.216C16.515 3.407 15.01 3 13.082 3H7.487a.8.8 0 0 0-.79.676l-2.33 14.772a.48.48 0 0 0 .473.556h3.454l.868-5.503.933-5.909Z", fill: "#052962" })] }));
const SvgPayPalBrand = ({ size, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "PayPal logo" })) : ('')] }));

export { SvgPayPalBrand };
//# sourceMappingURL=SvgPayPalBrand.js.map
