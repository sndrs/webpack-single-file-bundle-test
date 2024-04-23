import { jsx } from '@emotion/react/jsx-runtime';
import { Fragment, cloneElement } from 'react';

const linkContents = ({ children, iconSvg, iconSide, }) => {
    // a bit of underlined space; the icon sits on top
    const spacer = (jsx(Fragment, { children: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" }, "spacer"));
    const linkContents = [children];
    if (iconSvg) {
        if (iconSide === 'left') {
            linkContents.unshift(spacer, cloneElement(iconSvg, {
                key: 'svg',
            }));
        }
        else {
            linkContents.push(spacer, cloneElement(iconSvg, {
                key: 'svg',
            }));
        }
    }
    return linkContents;
};

export { linkContents };
//# sourceMappingURL=shared.js.map
