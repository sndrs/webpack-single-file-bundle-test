import { jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden as visuallyHidden$1 } from '@guardian/source-foundations';
import { mergedTheme } from './shared.js';
import { supportingText } from './styles.js';

const visuallyHidden = css `
	${visuallyHidden$1}
`;
const SupportingText = ({ hideLabel, children, theme, }) => {
    return (jsx("p", { css: (providerTheme) => [
            supportingText(mergedTheme(providerTheme.label, theme)),
            hideLabel ? visuallyHidden : '',
        ], children: children }));
};

export { SupportingText };
//# sourceMappingURL=SupportingText.js.map
