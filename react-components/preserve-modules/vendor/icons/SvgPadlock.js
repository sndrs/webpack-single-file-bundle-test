import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.753 6.957a4.255 4.255 0 0 1 8.51 0h1.703a5.958 5.958 0 0 0-11.915 0h1.702Zm-1.702 0v2.128l-.851.851V20.15l.851.851h11.915l.851-.851V9.936l-.851-.85V6.956h-1.702v2.128h-8.51V6.957H6.05Zm7.234 6.809c0 .556-.355 1.029-.851 1.204v1.775h-.851V14.97a1.277 1.277 0 1 1 1.702-1.204Z", fill: theme?.fill }) }));
const SvgPadlock = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Lock" })) : ('')] }));

export { SvgPadlock };
//# sourceMappingURL=SvgPadlock.js.map
