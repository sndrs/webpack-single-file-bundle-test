import { jsx } from '@emotion/react/jsx-runtime';
import { neutral } from '@guardian/source-foundations';
import { SvgRoundel } from './SvgRoundel.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_svgroundelinverse--default) •
 * [Design System](https://theguardian.design/2a1e5182b/p/8909e0-assets/t/37168b) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/brand/SvgRoundelInverse.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 */
const SvgRoundelInverse = (args) => {
    return (jsx(SvgRoundel, { textColor: neutral[7], backgroundColor: "white", ...args }));
};

export { SvgRoundelInverse };
//# sourceMappingURL=SvgRoundelInverse.js.map
