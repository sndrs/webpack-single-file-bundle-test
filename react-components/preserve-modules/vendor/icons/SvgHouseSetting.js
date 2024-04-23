import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 21H5l-1-1V9.375L11.4 2h1.2L20 9.375V20l-1 1Zm-1.075-6.525c.025-.375.075-.65.075-.95 0-.375-.05-.625-.075-1L16.7 12.25c-.075-.475-.25-.85-.475-1.25l.65-1.05c-.4-.5-.825-.95-1.35-1.325l-1.025.65c-.4-.225-.825-.4-1.3-.475l-.225-1.225a6.99 6.99 0 0 0-1-.075c-.275 0-.6.025-.95.075L10.8 8.8c-.475.075-.9.25-1.3.475l-1-.65C7.925 9 7.525 9.45 7.125 9.95l.65 1.05c-.25.425-.4.85-.475 1.25l-1.225.275c-.025.375-.075.625-.075 1 0 .3.05.575.075.95l1.225.2c.075.5.25.85.475 1.325l-.65.975c.375.525.85 1 1.375 1.4l1-.65c.375.225.825.375 1.3.475l.225 1.225c.375.025.65.075.95.075.375 0 .625-.05 1-.075L13.2 18.2c.475-.1.925-.25 1.3-.475l1.025.65c.525-.4.95-.825 1.35-1.4l-.65-.975c.225-.4.4-.825.475-1.325l1.225-.2Zm-5.95 1.9c-1.6 0-2.85-1.35-2.85-2.85 0-1.65 1.25-2.9 2.85-2.9 1.675 0 2.9 1.225 2.9 2.9 0 1.5-1.25 2.85-2.9 2.85Z", fill: theme?.fill }) }));
const SvgHouseSetting = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Settings" })) : ('')] }));

export { SvgHouseSetting };
//# sourceMappingURL=SvgHouseSetting.js.map
