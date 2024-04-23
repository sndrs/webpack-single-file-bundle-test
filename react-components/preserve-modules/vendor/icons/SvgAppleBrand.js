import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { d: "M12.379 5.615c.903 0 2.034-.61 2.708-1.424.61-.737 1.055-1.767 1.055-2.797 0-.14-.012-.28-.038-.394-1.004.038-2.212.674-2.937 1.526-.572.648-1.093 1.665-1.093 2.708 0 .153.025.305.038.356.063.013.165.025.267.025ZM9.2 21c1.234 0 1.78-.826 3.319-.826 1.564 0 1.907.8 3.28.8 1.348 0 2.25-1.245 3.102-2.466.954-1.399 1.348-2.772 1.374-2.835-.09-.026-2.67-1.081-2.67-4.044 0-2.568 2.034-3.725 2.148-3.814-1.347-1.933-3.395-1.983-3.954-1.983-1.513 0-2.746.915-3.522.915-.839 0-1.945-.865-3.255-.865C6.53 5.882 4 7.942 4 11.832c0 2.417.94 4.972 2.098 6.625C7.09 19.856 7.954 21 9.2 21Z", fill: "black" }) }));
const SvgAppleBrand = ({ size, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Apple logo" })) : ('')] }));

export { SvgAppleBrand };
//# sourceMappingURL=SvgAppleBrand.js.map
