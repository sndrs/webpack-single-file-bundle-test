import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m2.712 2 9.499 9.499V12.5L2.712 22l-.952-.977L9.128 12 1.76 2.977 2.712 2Zm10.025 0 9.499 9.499V12.5L12.737 22l-.952-.977L19.153 12l-7.368-9.023.952-.977Z", fill: theme?.fill }) }));
const SvgChevronRightDouble = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Double chevron right" })) : ('')] }));

export { SvgChevronRightDouble };
//# sourceMappingURL=SvgChevronRightDouble.js.map
