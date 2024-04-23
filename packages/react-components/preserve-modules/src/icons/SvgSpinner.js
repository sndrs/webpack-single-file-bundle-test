import { jsx, jsxs } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { brand, iconSize } from '@guardian/source-foundations';

const circleLineThickness = 5;
const lightblueStyles = css `
	stroke: #a5c0e8;
	stroke-width: ${circleLineThickness};
	fill: transparent;
`;
const darkblueStyles = css `
	stroke: ${brand['400']};
	stroke-dasharray: 82;
	stroke-dashoffset: 82;
	stroke-width: ${circleLineThickness};
	fill: transparent;
`;
const SvgSpinner = ({ size, }) => {
    return (jsx("svg", { width: size ? iconSize[size] : undefined, viewBox: "0 0 30 30", children: jsxs("g", { children: [jsx("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", from: "0 15 15", to: "360 15 15", dur: "2.5s", repeatCount: "indefinite" }), jsx("circle", { cx: "15", cy: "15", r: "12.6", css: lightblueStyles }), jsx("path", { css: darkblueStyles, d: "M15,15 m0,-12.6 a 12.6,12.6 0 0,1 0,25.2 a 12.6,12.6 0 0,1 0,-25.2", children: jsx("animate", { attributeName: "stroke-dashoffset", dur: "3.5s", to: "-82", repeatCount: "indefinite" }) })] }) }));
};

export { SvgSpinner };
//# sourceMappingURL=SvgSpinner.js.map
