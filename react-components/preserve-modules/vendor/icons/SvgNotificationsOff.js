import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.672 11.924c0 2.655.935 5.09 2.435 7.057l-.517.516A9.743 9.743 0 0 1 0 11.924 9.743 9.743 0 0 1 3.59 4.35l.517.516c-1.5 1.968-2.435 4.402-2.435 7.058Zm20.607 0c0-2.656-.861-5.09-2.435-7.058l.566-.516A9.743 9.743 0 0 1 24 11.924a9.743 9.743 0 0 1-3.59 7.573l-.566-.516c1.574-1.967 2.435-4.402 2.435-7.057Zm-17.09 0c0 1.574.467 2.975 1.278 4.13l-.664.64c-1.254-1.254-1.967-2.901-1.967-4.77 0-1.87.713-3.59 1.967-4.77l.664.614a7.234 7.234 0 0 0-1.278 4.156Zm13.622 0a7.403 7.403 0 0 0-1.254-4.156l.615-.615c1.254 1.18 1.992 2.902 1.992 4.77 0 1.87-.738 3.517-1.992 4.771l-.615-.64a7.264 7.264 0 0 0 1.254-4.13Zm-2.877 0A3.915 3.915 0 0 1 12 15.858a3.915 3.915 0 0 1-3.934-3.934A3.915 3.915 0 0 1 12 7.989a3.915 3.915 0 0 1 3.934 3.935Zm-1.475 0c0-1.353-1.131-2.46-2.459-2.46a2.435 2.435 0 0 0-2.459 2.46A2.435 2.435 0 0 0 12 14.383c1.328 0 2.459-1.107 2.459-2.46Z", fill: theme?.fill }) }));
const SvgNotificationsOff = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Notification off" })) : ('')] }));

export { SvgNotificationsOff };
//# sourceMappingURL=SvgNotificationsOff.js.map
