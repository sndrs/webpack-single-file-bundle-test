import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { BackToTop } from './BackToTop.js';
import { footer, linksWrapper, linksWrapperSpaceWithBackToTop, linksWrapperSpace, links, copyright, copyrightExtraPadding } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_footer--default-default-theme) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/footer/Footer.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * 🛠 This component is [in development](https://www.theguardian.design/2a1e5182b/p/99cfad-component-status/t/06d689).
 */
const Footer = ({ showBackToTop, children, cssOverrides, ...props }) => {
    return (jsxs("footer", { css: (theme) => [footer(theme.footer), cssOverrides], ...props, children: [jsxs("div", { css: [
                    linksWrapper,
                    showBackToTop ? linksWrapperSpaceWithBackToTop : linksWrapperSpace,
                ], children: [jsx("div", { css: (theme) => links(theme.footer), children: children }), showBackToTop ? BackToTop : ''] }), jsx("small", { css: [copyright, showBackToTop ? copyrightExtraPadding : ''], children: "\u00A9 2021 Guardian News and Media Limited or its affiliated companies. All rights reserved." })] }));
};

export { Footer };
//# sourceMappingURL=Footer.js.map
