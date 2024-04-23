import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m12.488 12.383 9.936 6.633.576-.426V5.425L22.424 5l-9.936 6.633v.75ZM1 12.383l9.961 6.633.55-.426V5.425L10.962 5 1 11.633v.75Z", fill: theme?.fill }) }));
const SvgMediaControlsBack = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Rewind" })) : ('')] }));

export { SvgMediaControlsBack };
//# sourceMappingURL=SvgMediaControlsBack.js.map
