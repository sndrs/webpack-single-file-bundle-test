import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { SvgAlertRound } from '../../vendor/icons/SvgAlertRound.js';
import { mergedTheme } from './shared.js';
import { inlineError } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_inlineerror--inline-error-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/108ed3-user-feedback/b/3803b4) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/user-feedback/InlineError.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-feedback)
 *
 * Used to inform the user when a validation has failed or user error has occurred. These messages indicate what went wrong and how to fix it.
 *
 * The following themes are supported: `default`, `brand`
 */
const InlineError = ({ children, size = 'medium', cssOverrides, theme, ...props }) => {
    return (jsxs("span", { css: (providerTheme) => [
            inlineError(mergedTheme(providerTheme.userFeedback, theme), size),
            cssOverrides,
        ], role: "alert", ...props, children: [jsx(SvgAlertRound, {}), children] }));
};

export { InlineError };
//# sourceMappingURL=InlineError.js.map
