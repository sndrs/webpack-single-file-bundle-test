import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden, iconSize } from '@guardian/source-foundations';

const Svg = ({ size, theme }) => (jsx("svg", { width: size ? iconSize[size] : undefined, height: undefined, viewBox: "-3 -3 30 30", xmlns: "http://www.w3.org/2000/svg", focusable: false, "aria-hidden": true, children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM17.28 12l-3.4 3.85.725.725 3.825-3.425 3.85 3.425.725-.725L19.58 12l3.425-3.85-.725-.725-3.85 3.425-3.825-3.425-.725.725 3.4 3.85Z", fill: theme?.fill }) }));
const SvgAudioMute = ({ size, theme, isAnnouncedByScreenReader = false, }) => (jsxs(Fragment, { children: [jsx(Svg, { size: size, theme: theme }), isAnnouncedByScreenReader ? (jsx("span", { css: css `
					${visuallyHidden}
				`, children: "Sound off" })) : ('')] }));

export { SvgAudioMute };
//# sourceMappingURL=SvgAudioMute.js.map
