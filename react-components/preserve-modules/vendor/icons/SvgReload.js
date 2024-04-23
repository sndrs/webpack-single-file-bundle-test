import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.019 22a9.935 9.935 0 0 0 8.223-4.35l-.114-.616-.797-.478-.615.16c-1.48 2.095-3.895 3.485-6.697 3.485-4.487 0-8.178-3.69-8.178-8.224 0-4.51 3.69-8.177 8.178-8.177 2.574 0 4.784 1.139 6.31 2.96l-3.303.548v1.138h5.831l.433-.432V2h-1.116l-.57 3.44C17.782 3.32 15.094 2 12.02 2 6.484 2 1.996 6.465 1.996 11.977A10.008 10.008 0 0 0 12.02 22Z", fill: theme?.fill }) }));
const SvgReload = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Reload" })) : ('')] }));

export { SvgReload };
//# sourceMappingURL=SvgReload.js.map
