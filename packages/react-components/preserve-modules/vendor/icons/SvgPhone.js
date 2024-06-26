import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.488 1 18 2.512v18.976l-1.512 1.488L7.512 23 6 21.488V2.512L7.512 1h8.976Zm-4.39 20.488c.536 0 1-.44 1-1 0-.561-.464-1-1-1a1.01 1.01 0 0 0-1.025 1c0 .56.464 1 1.025 1Zm3.975-3v-14h-8v14h8Z", fill: theme?.fill }) }));
const SvgPhone = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Mobile phone" })) : ('')] }));

export { SvgPhone };
//# sourceMappingURL=SvgPhone.js.map
