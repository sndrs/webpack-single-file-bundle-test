import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.512 11.633 1.576 5 1 5.425V18.59l.576.426 9.936-6.633v-.75Zm11.488 0L13.039 5l-.55.425V18.59l.55.426L23 12.383v-.75Z", fill: theme?.fill }) }));
const SvgMediaControlsForward = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Fast forward" })) : ('')] }));

export { SvgMediaControlsForward };
//# sourceMappingURL=SvgMediaControlsForward.js.map
