import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.41 2 1 19.057l.668.943h20.664l.668-.943L12.59 2h-1.18Zm-.063 12.178h1.306l.621-6.917-.856-.728h-.835l-.857.728.62 6.917ZM12 15.452c.7 0 1.274.573 1.274 1.274 0 .7-.573 1.274-1.274 1.274-.7 0-1.274-.573-1.274-1.274 0-.7.573-1.274 1.274-1.274Z", fill: theme?.fill }) }));
const SvgAlertTriangle = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Warning" })) : ('')] }));

export { SvgAlertTriangle };
//# sourceMappingURL=SvgAlertTriangle.js.map
