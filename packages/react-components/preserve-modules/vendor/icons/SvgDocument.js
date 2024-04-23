import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m20 21-.975 1H5l-1-1V3l1-1h11.025L20 6v15ZM18 8H6v1.5h12V8Zm0 3H6v1.5h12V11Zm-5 3H6v1.5h7V14Z", fill: theme?.fill }) }));
const SvgDocument = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Document" })) : ('')] }));

export { SvgDocument };
//# sourceMappingURL=SvgDocument.js.map
