import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.956 23V4.726l8.575 7.167.932-.932L12.478 1h-.956l-9.984 9.96.931.932 8.576-7.166V23h1.91Z", fill: theme?.fill }) }));
const SvgArrowUpStraight = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Arrow up" })) : ('')] }));

export { SvgArrowUpStraight };
//# sourceMappingURL=SvgArrowUpStraight.js.map
