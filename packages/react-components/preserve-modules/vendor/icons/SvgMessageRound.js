import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.336-14.444v1.27H7.558v-1.27h7.778Zm-2.699 2.54v1.27h-5.08v-1.27h5.08Zm3.81 2.539v1.27h-8.89v-1.27h8.89Zm-2.223 2.54v1.27H7.558v-1.27h6.666Z", fill: theme?.fill }) }));
const SvgMessageRound = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Message" })) : ('')] }));

export { SvgMessageRound };
//# sourceMappingURL=SvgMessageRound.js.map
