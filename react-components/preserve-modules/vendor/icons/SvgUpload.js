import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m17.475 6.125-.9.875L13 4.275V13h-2V4.275L7.425 7l-.875-.875L11.65 1h.7l5.125 5.125ZM22 10h1v9.975L21.975 21h-20L1 19.975V10h1l1 1v8h18v-8l1-1Z", fill: theme?.fill }) }));
const SvgUpload = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Upload" })) : ('')] }));

export { SvgUpload };
//# sourceMappingURL=SvgUpload.js.map
