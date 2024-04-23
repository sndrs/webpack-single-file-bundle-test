import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.636 2h1.819v3.636H5.636V2Zm10.91 0h1.818v3.636h-1.819V2Zm4.051 1L22 4.422v16.165l-1.403 1.39L3.403 22 2 20.587V4.422L3.403 3h1.324v3.545h3.637V3h7.272v3.545h3.637V3h1.324ZM3.818 9.273h16.364v10.909H3.818V9.272Zm6.364 4.036 1.345-.173v4.773h1.482v-6.363h-.827l-2 .827v.936Z", fill: theme?.fill }) }));
const SvgCalendar = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Calendar" })) : ('')] }));

export { SvgCalendar };
//# sourceMappingURL=SvgCalendar.js.map
