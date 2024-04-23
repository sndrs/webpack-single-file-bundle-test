import { jsx } from '@emotion/react/jsx-runtime';
import { inline, inlineSpace } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_inline--no-space) •
 * [Design System](https://theguardian.design/2a1e5182b/p/99f3c1-inline) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/inline/Inline.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * `Inline` components will be laid out one next to the other.
 */
const Inline = ({ cssOverrides, children, space, ...props }) => {
    return (jsx("div", { css: [inline, space ? inlineSpace[space] : '', cssOverrides], ...props, children: children }));
};

export { Inline };
//# sourceMappingURL=Inline.js.map
