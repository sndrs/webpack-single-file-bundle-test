import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.806 10.712 11.634 15h.731l3.829-4.288L15.5 10 12 13l-3.5-3-.694.712Z", fill: theme?.fill }) }));
const SvgChevronDownSingleXsmall = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Expand to show more" })) : ('')] }));

export { SvgChevronDownSingleXsmall };
//# sourceMappingURL=SvgChevronDownSingleXsmall.js.map
