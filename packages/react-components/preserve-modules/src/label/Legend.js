import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { legend } from './styles.js';
import { SupportingText } from './SupportingText.js';
import { Text } from './Text.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_legend--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/40151e-label/b/86af7d) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/label/Legend.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * A legend describes a group of fields, such as a checkbox group or radio group.
 *
 * Legend is used by other Source components, such as RadioGroup. Only use Legend
 * if you are building your own form components.
 *
 * The following themes are supported: `light`, `brand`.
 * */
const Legend = ({ text, supporting, optional = false, hideLabel = false, cssOverrides, theme, ...props }) => {
    return (jsxs(Fragment, { children: [jsx("legend", { css: [legend, cssOverrides], ...props, children: jsx(Text, { text: text, optional: optional, hideLabel: hideLabel, theme: theme }) }), supporting ? (jsx(SupportingText, { hideLabel: hideLabel, theme: theme, children: supporting })) : ('')] }));
};

export { Legend };
//# sourceMappingURL=Legend.js.map
