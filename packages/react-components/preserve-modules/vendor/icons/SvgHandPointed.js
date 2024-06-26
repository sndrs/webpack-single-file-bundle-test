import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.001 1.723c-2.697 0-5.169.949-7.167 2.472l-.524-.524C6.133 1.448 8.88 0 12.001 0c3.122 0 5.869 1.448 7.692 3.67l-.525.525c-1.998-1.523-4.47-2.472-7.167-2.472Zm7.017 11.287L17.52 22h-7.017l-.999-2.972-4.22-4.67v-.649l1.199-1.223 3.37 1.823L10.978 4.02H13l.25 6.743 5.244 1.248.524 1Z", fill: theme?.fill }) }));
const SvgHandPointed = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Interactive" })) : ('')] }));

export { SvgHandPointed };
//# sourceMappingURL=SvgHandPointed.js.map
