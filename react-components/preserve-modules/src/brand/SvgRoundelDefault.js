import { jsx } from '@emotion/react/jsx-runtime';
import { neutral } from '@guardian/source-foundations';
import { SvgRoundel } from './SvgRoundel.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_svgroundeldefault--default) •
 * [Design System](https://theguardian.design/2a1e5182b/p/8909e0-assets/t/37168b) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/brand/SvgRoundelDefault.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 */
const SvgRoundelDefault = (args) => {
    return (jsx(SvgRoundel, { textColor: "white", backgroundColor: neutral[7], ...args }));
};

export { SvgRoundelDefault };
//# sourceMappingURL=SvgRoundelDefault.js.map
