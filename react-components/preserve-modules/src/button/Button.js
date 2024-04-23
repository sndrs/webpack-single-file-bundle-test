import { jsx } from '@emotion/react/jsx-runtime';
import { buttonContents } from './shared.js';
import { buttonStyles } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_button--primary-priority-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/435225-button) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/button/Button.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Buttons enable users to make choices or perform actions.
 *
 */
const Button = ({ priority, size, icon: iconSvg, iconSide, hideLabel, nudgeIcon, type = 'button', isLoading = false, loadingAnnouncement = 'Loading', cssOverrides, children, theme, ...props }) => (jsx("button", { css: buttonStyles({
        size,
        priority,
        icon: iconSvg,
        hideLabel,
        iconSide,
        nudgeIcon,
        cssOverrides,
        isLoading,
        theme,
    }), type: type, "aria-live": "polite", "aria-label": isLoading ? loadingAnnouncement : undefined, ...props, children: buttonContents({
        hideLabel,
        iconSvg,
        isLoading,
        children,
    }) }));

export { Button };
//# sourceMappingURL=Button.js.map
