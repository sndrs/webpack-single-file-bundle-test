import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.848 20.06c1 .304 2.061.455 3.152.455 5.515 0 10-4.151 10-9.242C22 6.152 17.515 2 12 2S2 6.152 2 11.273c0 2.606 1.182 4.97 3.06 6.636V22l3.788-1.94Zm1.637-8.302 2.576 2.666 5.454-5.727-4.97 2.727-2.575-2.666-5.455 5.727 4.97-2.727Z", fill: theme?.fill }) }));
const SvgFacebookMessenger = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Facebook Messenger logo" })) : ('')] }));

export { SvgFacebookMessenger };
//# sourceMappingURL=SvgFacebookMessenger.js.map
