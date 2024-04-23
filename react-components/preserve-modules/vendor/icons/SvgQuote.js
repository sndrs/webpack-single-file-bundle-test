import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.506 4.7h4.976c-.6 4.745-1.13 9.399-1.36 14.605H1c.83-5.068 2.557-9.86 5.506-14.605Zm11.587 0H23c-.53 4.745-1.129 9.399-1.36 14.605h-9.098c.944-5.068 2.603-9.86 5.551-14.605Z", fill: theme?.fill }) }));
const SvgQuote = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Quote" })) : ('')] }));

export { SvgQuote };
//# sourceMappingURL=SvgQuote.js.map
