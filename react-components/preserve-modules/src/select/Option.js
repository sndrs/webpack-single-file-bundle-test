import { jsx } from '@emotion/react/jsx-runtime';

const Option = ({ cssOverrides, children, ...props }) => {
    return (jsx("option", { css: cssOverrides, ...props, children: children }));
};

export { Option };
//# sourceMappingURL=Option.js.map
