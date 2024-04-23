import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsxs("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: [jsx("path", { d: "M7.075 3.952c0 1.085-.785 1.95-2.08 1.95C3.786 5.902 3 5.037 3 3.952 3 2.843 3.81 2 5.05 2c1.242 0 2 .843 2.025 1.952ZM3.101 19.997V7.442H6.95v12.555H3.1Z", fill: theme?.fill }), jsx("path", { d: "M9.25 11.447c0-1.565-.05-2.868-.1-4.005h3.34l.179 1.746h.076c.5-.821 1.747-2.024 3.826-2.024 2.531 0 4.43 1.72 4.43 5.417v7.422H17.15V13.04c0-1.618-.558-2.721-1.95-2.721-1.063 0-1.696.743-1.974 1.462a2.84 2.84 0 0 0-.128.977v7.239H9.25v-8.55Z", fill: theme?.fill })] }));
const SvgLinkedIn = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "LinkedIn logo" })) : ('')] }));

export { SvgLinkedIn };
//# sourceMappingURL=SvgLinkedIn.js.map
