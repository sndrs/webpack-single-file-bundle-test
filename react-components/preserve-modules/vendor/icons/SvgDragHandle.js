import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 5h2V3H7v2Zm8 0h2V3h-2v2ZM7 9h2V7H7v2Zm8 0h2V7h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Z", fill: theme?.fill }) }));
const SvgDragHandle = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Drag" })) : ('')] }));

export { SvgDragHandle };
//# sourceMappingURL=SvgDragHandle.js.map
