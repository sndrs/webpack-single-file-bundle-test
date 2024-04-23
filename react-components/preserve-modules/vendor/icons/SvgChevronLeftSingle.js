import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.721 1 6.25 11.471v1.058L16.721 23l.982-.956L9.321 12l8.382-10.043L16.721 1Z", fill: theme?.fill }) }));
const SvgChevronLeftSingle = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Chevron left" })) : ('')] }));

export { SvgChevronLeftSingle };
//# sourceMappingURL=SvgChevronLeftSingle.js.map
