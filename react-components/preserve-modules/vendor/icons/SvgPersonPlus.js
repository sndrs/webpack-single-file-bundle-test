import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 9.5c1.825 0 3.975-2.05 3.975-4.55S12.5 1 10 1 6.05 2.45 6.05 4.95 8.375 9.5 10 9.5Zm9.75 5.5h-1.5v-3.25H15v-1.5h3.25V7h1.5v3.25H23v1.5h-3.25V15ZM10 11.5c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15L19 21l-1.025 1h-16L1 21l1.975-7.5L4 12.475c2-.675 3.8-.975 6-.975Z", fill: theme?.fill }) }));
const SvgPersonPlus = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Add user" })) : ('')] }));

export { SvgPersonPlus };
//# sourceMappingURL=SvgPersonPlus.js.map
