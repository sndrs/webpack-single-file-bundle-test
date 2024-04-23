import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m11.258 2 .953.977L4.842 12l7.369 9.023-.953.977-9.498-9.499V11.5L11.258 2Zm10.026 0 .952.977L14.867 12l7.369 9.023-.952.977-9.5-9.499V11.5L21.285 2Z", fill: theme?.fill }) }));
const SvgChevronLeftDouble = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Double chevron left" })) : ('')] }));

export { SvgChevronLeftDouble };
//# sourceMappingURL=SvgChevronLeftDouble.js.map
