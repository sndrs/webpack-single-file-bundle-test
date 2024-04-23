import { jsx } from '@emotion/react/jsx-runtime';
import { setWidth, setSpan, flexGrow, column } from './styles.js';

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_columns--default) •
 * [Design System](https://theguardian.design/2a1e5182b/p/41cd49-columns) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/columns/Column.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 */
const Column = ({ width, span, cssOverrides, children, ...props }) => {
    const columnCss = [column];
    if (width) {
        columnCss.push(setWidth(width));
    }
    else if (span) {
        columnCss.push(setSpan(span));
    }
    else {
        columnCss.push(flexGrow);
    }
    return (jsx("div", { css: [columnCss, cssOverrides], ...props, children: children }));
};

export { Column };
//# sourceMappingURL=Column.js.map
