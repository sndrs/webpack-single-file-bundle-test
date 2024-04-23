import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.025 11.5V7H3v5.45l1.025 1.025H17.75L15 17.05l.85.9L21 12.825v-.675l-5.1-5.125-.9.875 2.75 3.6H5.025Z", fill: theme?.fill }) }));
const SvgIndent = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Indent" })) : ('')] }));

export { SvgIndent };
//# sourceMappingURL=SvgIndent.js.map
