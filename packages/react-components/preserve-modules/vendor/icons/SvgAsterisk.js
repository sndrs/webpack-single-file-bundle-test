import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m10.85 14 .4 9h1.5l.4-9 8.025 4.15.725-1.3L14.325 12 21.9 7.15l-.725-1.325L13.15 10l-.4-9h-1.5l-.4 8.975-7.975-4.15L2.1 7.15 9.725 12 2.1 16.85l.775 1.3L10.85 14Z", fill: theme?.fill }) }));
const SvgAsterisk = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Asterisk" })) : ('')] }));

export { SvgAsterisk };
//# sourceMappingURL=SvgAsterisk.js.map
