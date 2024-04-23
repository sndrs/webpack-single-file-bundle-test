import { jsx } from '@emotion/react/jsx-runtime';
import { linkContents } from './shared.js';
import { linkStyles } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_buttonlink--primary-button-link-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/43c26b-link/b/048fd1) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/link/ButtonLink.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Links are used as navigational aids. They may appear inline in a paragraph, as items in a list or as stand alone text elements.
 *
 * The following themes are supported: `light`, `brand`, `brandYellow`
 */
const ButtonLink = ({ priority = 'primary', icon: iconSvg, iconSide = 'left', cssOverrides, children, theme, ...props }) => {
    return (jsx("button", { css: linkStyles({
            isButton: true,
            priority,
            iconSvg,
            iconSide,
            cssOverrides,
            theme,
        }), ...props, children: linkContents({ children, iconSvg, iconSide }) }));
};

export { ButtonLink };
//# sourceMappingURL=ButtonLink.js.map
