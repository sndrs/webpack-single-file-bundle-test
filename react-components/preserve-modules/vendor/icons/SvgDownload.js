import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m16.575 7 .9.875L12.35 13h-.7l-5.1-5.125L7.425 7 11 9.725V1h2v8.725L16.575 7ZM21 11l1-1h1v9.975L21.975 21h-20L1 19.975V10h1l1 1v8h18v-8Z", fill: theme?.fill }) }));
const SvgDownload = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Download" })) : ('')] }));

export { SvgDownload };
//# sourceMappingURL=SvgDownload.js.map
