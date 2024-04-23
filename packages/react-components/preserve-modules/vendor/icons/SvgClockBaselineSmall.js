import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.975 4C16.95 4 21 8.05 21 13.025c0 4.975-4.05 9-9.025 9C7 22.025 3 18 3 13.025S7 4 11.975 4Zm-.6 1.65-.625 7.675 1.25 1.05 6.35-.525v-1.225l-5.2-.3-.55-6.675h-1.225Z", fill: theme?.fill }) }));
const SvgClockBaselineSmall = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Clock" })) : ('')] }));

export { SvgClockBaselineSmall };
//# sourceMappingURL=SvgClockBaselineSmall.js.map
