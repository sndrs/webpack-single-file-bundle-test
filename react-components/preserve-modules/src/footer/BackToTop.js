import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { SvgChevronUpSingle } from '../../vendor/icons/SvgChevronUpSingle.js';
import { backToTop, backToTopIcon } from './styles.js';

const BackToTop = (jsxs("a", { href: "#top", css: (theme) => backToTop(theme.footer), children: ["Back to top", jsx("div", { css: (theme) => backToTopIcon(theme.footer), children: jsx(SvgChevronUpSingle, {}) })] }));

export { BackToTop };
//# sourceMappingURL=BackToTop.js.map
