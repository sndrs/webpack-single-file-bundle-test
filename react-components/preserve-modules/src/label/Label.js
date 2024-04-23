import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { SupportingText } from './SupportingText.js';
import { Text } from './Text.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_label--default-default-theme) •
 * [Design System](https://theguardian.design/2a1e5182b/p/40151e-label/b/86af7d) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/label/Label.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * A label describes a user input field.
 *
 * Label is used by other Source components, such as TextInput. Only use Label
 * if you are building your own form components.
 *
 * The following themes are supported: `light`, `brand`.
 * */
const Label = ({ text, supporting, optional = false, hideLabel = false, size, cssOverrides, children, theme, ...props }) => {
    return (jsxs("label", { css: cssOverrides, ...props, children: [jsx(Text, { hideLabel: hideLabel, text: text, optional: optional, size: size, theme: theme }), supporting ? (jsx(SupportingText, { hideLabel: hideLabel, theme: theme, children: supporting })) : (''), children] }));
};

export { Label };
//# sourceMappingURL=Label.js.map
