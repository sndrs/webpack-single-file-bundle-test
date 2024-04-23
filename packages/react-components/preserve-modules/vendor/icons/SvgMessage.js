import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 3.5V6H3V3.5h16Zm-5.5 5V11H3V8.5h10.5ZM21 16v-2.5H3V16h18Zm-4.5 2.5V21H3v-2.5h13.5Z", fill: theme?.fill }) }));
const SvgMessage = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Message" })) : ('')] }));

export { SvgMessage };
//# sourceMappingURL=SvgMessage.js.map
