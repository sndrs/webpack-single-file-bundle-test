import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.035 0A12.487 12.487 0 0 0 4.48 2.312a11.536 11.536 0 0 0-.299 16.212c4.451 4.525 11.662 4.65 16.212.273 1.044-1.02 1.89-2.213 2.436-3.48-4.177 1.74-9.25.87-12.63-2.587C6.841 9.25 6.145 4.127 8.034 0Z", fill: theme?.fill }) }));
const SvgMoon = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Dark mode" })) : ('')] }));

export { SvgMoon };
//# sourceMappingURL=SvgMoon.js.map
