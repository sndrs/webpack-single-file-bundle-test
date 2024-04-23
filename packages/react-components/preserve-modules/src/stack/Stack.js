import { jsx } from '@emotion/react/jsx-runtime';
import { stack, stackSpace } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_stack--default) •
 * [Design System](https://theguardian.design/2a1e5182b/p/827581-stack) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/stack/Stack.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * `Stack` components will be stacked one on top of the other.
 */
const Stack = ({ cssOverrides, children, space, ...props }) => {
    return (jsx("div", { css: [stack, space ? stackSpace[space] : '', cssOverrides], ...props, children: children }));
};

export { Stack };
//# sourceMappingURL=Stack.js.map
