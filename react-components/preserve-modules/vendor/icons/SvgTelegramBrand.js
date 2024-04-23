import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size }) => (jsxs("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: [jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.478 2 12c0 5.523 4.478 10 10 10Z", fill: "url(#telegram-brand__a)" }), jsx("path", { d: "m6.527 11.894 5.831-2.516 3.731-1.362a.658.658 0 0 1 .388.116c.079.069.13.166.142.27.02.13.026.263.017.394-.151 1.58-.802 5.419-1.132 7.19-.14.755-.417 1.006-.683 1.025-.581.053-1.022-.383-1.584-.755l-2.231-1.5c-.988-.65-.348-1.005.215-1.592l2.755-2.691a.199.199 0 0 0-.002-.095.212.212 0 0 0-.044-.083.231.231 0 0 0-.208-.02c-.088.02-1.494.95-4.217 2.787-.4.275-.761.408-1.084.4-.358-.007-1.044-.201-1.555-.367-.63-.204-1.124-.31-1.081-.657.02-.174.267-.356.742-.544Z", fill: "white" }), jsx("defs", { children: jsxs("linearGradient", { id: "telegram-brand__a", x1: 11.8742, y1: 1.81167, x2: 11.8742, y2: 21.9375, gradientUnits: "userSpaceOnUse", children: [jsx("stop", { stopColor: "#2AABEE" }), jsx("stop", { offset: 1, stopColor: "#229ED9" })] }) })] }));
const SvgTelegramBrand = ({ size, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Telegram logo" })) : ('')] }));

export { SvgTelegramBrand };
//# sourceMappingURL=SvgTelegramBrand.js.map
