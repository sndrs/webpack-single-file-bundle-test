import { jsx, jsxs, Fragment } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden } from '@guardian/source-foundations';
import { cloneElement } from 'react';
import { SvgSpinner } from '../icons/SvgSpinner.js';

const buttonContents = ({ hideLabel, iconSvg, isLoading, children, }) => {
    const contents = [children];
    if (isLoading) {
        if (!hideLabel) {
            contents.push(jsx("div", { className: "src-button-space" }, "space"));
        }
        contents.push(cloneElement(jsx(SvgSpinner, {}), {
            key: 'svg',
        }));
    }
    else if (iconSvg) {
        if (!hideLabel) {
            contents.push(jsx("div", { className: "src-button-space" }, "space"));
        }
        contents.push(cloneElement(iconSvg, { key: 'svg' }));
    }
    if (hideLabel) {
        return (jsxs(Fragment, { children: [jsx("span", { css: css `
						${visuallyHidden};
					`, children: children }), contents[1]] }));
    }
    else {
        return contents;
    }
};

export { buttonContents };
//# sourceMappingURL=shared.js.map
