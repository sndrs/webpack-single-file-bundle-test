import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 6.5v10.975l-1.475 1.55H2.5L1 17.55V6.5L2.5 5h4.975l2.5-2.5H14L16.5 5h5.025L23 6.5Zm-11 9.75c2.5 0 4.525-2 4.525-4.475 0-2.5-2.025-4.5-4.525-4.5-2.5 0-4.5 2-4.5 4.5 0 2.475 2 4.475 4.5 4.475Z", fill: theme?.fill }) }));
const SvgCamera = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Camera" })) : ('')] }));

export { SvgCamera };
//# sourceMappingURL=SvgCamera.js.map
