import { jsxs, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden as visuallyHidden$1 } from '@guardian/source-foundations';
import { mergedTheme } from './shared.js';
import { labelText, optionalText } from './styles.js';

const visuallyHidden = css `
	${visuallyHidden$1}
`;
const Text = ({ text, optional, hideLabel, size = 'medium', theme, }) => (jsxs("div", { css: (providerTheme) => [
        labelText(mergedTheme(providerTheme.label, theme), size),
        hideLabel ? visuallyHidden : '',
    ], children: [text, ' ', optional ? (jsx("span", { css: (providerTheme) => optionalText(mergedTheme(providerTheme.label, theme)), children: "Optional" })) : ('')] }));

export { Text };
//# sourceMappingURL=Text.js.map
