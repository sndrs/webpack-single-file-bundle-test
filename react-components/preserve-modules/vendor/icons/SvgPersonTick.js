import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 9.5c1.825 0 3.975-2.05 3.975-4.55S12.9 1 10.4 1 6.45 2.45 6.45 4.95 8.775 9.5 10.4 9.5Zm5.75 2 1.075-1.05 1.1 1.125L21.6 8.3l1.05 1.075-4.325 4.325-1.05-1.075L16.15 11.5Zm-5.75 0c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15l1.1 4.1-1.025 1h-16L1.4 21l1.975-7.5L4.4 12.475c2-.675 3.8-.975 6-.975Z", fill: theme?.fill }) }));
const SvgPersonTick = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Verified user" })) : ('')] }));

export { SvgPersonTick };
//# sourceMappingURL=SvgPersonTick.js.map
