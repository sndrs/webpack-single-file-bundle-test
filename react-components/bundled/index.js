import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { css } from '@emotion/react';
import { visuallyHidden as visuallyHidden$4, iconSize, palette, brand, brandAlt, neutral, remSpace, focusHalo, headline, transitions, textSans, until, from, space, focusHaloSpaced, height, width, resets, remWidth, remHeight, appearance, generateSourceId, descriptionId, between, breakpoints, size } from '@guardian/source-foundations';
import { Children, cloneElement, useState, useEffect, Fragment as Fragment$1 } from 'react';

const Svg$1R = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m2.57 21.429 17.1-17.124L18.387 3l-4.844 4.844c-.82-1.887-2.616-3.194-4.693-3.194-2.923 0-5.3 2.355-5.3 5.25C2.072 10.557 1 12.08 1 13.65a4.007 4.007 0 0 0 2.893 3.844l-2.618 2.618 1.295 1.317Zm5.71-3.76c1.767.007 3.693.008 4.237-.019l.032-.002h3.7l.001.002H19a4 4 0 0 0 0-8c-.53 0-1.06.097-1.55.3a4.532 4.532 0 0 0-.763-.687l-1.093 1.093A3.074 3.074 0 0 1 17 12.15a2.56 2.56 0 0 1 2-1 2.5 2.5 0 1 1 0 5h-1.5v-.001h-7.333v.001H9.8l-1.52 1.52Zm4.07-8.632c-.437-1.6-1.786-2.887-3.5-2.887-2.101 0-3.8 1.679-3.8 3.75 0 .699.231 1.323.468 1.965l.032.085-.6.2-.45-1c-1.072.293-2 1.352-2 2.5 0 1.383 1.101 2.5 2.5 2.5h.237l7.113-7.113Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCrossedOutCloud = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1R, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "No wifi"
    }
  ) : ""
] });

const Svg$1Q = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m9.407 2.05.983 12.848h2.712l1.017-12.847L13.136 1H10.39l-.983 1.05Zm5.017 18.272c0-1.491-1.22-2.712-2.746-2.712C10.22 17.61 9 18.83 9 20.322 9 21.78 10.22 23 11.678 23c1.491 0 2.746-1.22 2.746-2.678Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgExclamation = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1Q, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Exclamation mark"
    }
  ) : ""
] });

const Svg$1P = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.848 20.06c1 .304 2.061.455 3.152.455 5.515 0 10-4.151 10-9.242C22 6.152 17.515 2 12 2S2 6.152 2 11.273c0 2.606 1.182 4.97 3.06 6.636V22l3.788-1.94Zm1.637-8.302 2.576 2.666 5.454-5.727-4.97 2.727-2.575-2.666-5.455 5.727 4.97-2.727Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgFacebookMessenger = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1P, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Facebook Messenger logo"
    }
  ) : ""
] });

const Svg$1O = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 2C6.467 2 2 6.467 2 12s4.467 10 10 10 10-4.467 10-10S17.533 2 12 2Zm1.133 13.933v.49c-.11.088-.266.155-.422.244a12.49 12.49 0 0 1-.511.2 2.347 2.347 0 0 1-.533.133 4.344 4.344 0 0 1-.511.044c-.356 0-.578-.066-.712-.2a.577.577 0 0 1-.222-.444c0-.178.022-.356.045-.533.022-.178.066-.356.11-.578l.934-4.245-.867-.2v-.466c.134-.045.312-.111.556-.178.222-.067.467-.111.733-.156.267-.044.511-.088.756-.11.244-.023.467-.045.667-.045l.244.155-1.244 5.89h.977Zm.423-7.466c-.2.177-.49.266-.823.266-.31 0-.577-.089-.8-.266a.878.878 0 0 1-.31-.69c0-.31.11-.555.31-.733.2-.177.467-.266.8-.266.356 0 .623.089.823.266.2.178.31.423.31.734-.022.289-.11.51-.31.689Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgInfoRound = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1O, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Information"
    }
  ) : ""
] });

const Svg$1N = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.075 12.35v-.7L5.475 5.2l-.575.45v12.7l.575.4 15.6-6.4Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMediaControlsPlay = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1N, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Play"
    }
  ) : ""
] });

const Svg$1M = ({ size }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18.108 7.573a9.717 9.717 0 0 1-.057.328c-.738 3.789-3.262 5.097-6.486 5.097H9.923a.797.797 0 0 0-.788.676l-.84 5.33-.238 1.51A.42.42 0 0 0 8.47 21h2.912a.7.7 0 0 0 .692-.59l.028-.148.548-3.48.036-.19a.7.7 0 0 1 .692-.592h.435c2.82 0 5.029-1.145 5.674-4.459.27-1.384.13-2.54-.583-3.353a2.784 2.784 0 0 0-.797-.615Z",
          fill: "#A7B4C8"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M17.336 7.265a5.83 5.83 0 0 0-.718-.159 9.116 9.116 0 0 0-1.447-.105h-4.385a.697.697 0 0 0-.691.591l-.933 5.91-.027.171a.797.797 0 0 1 .788-.675h1.641c3.224 0 5.748-1.309 6.486-5.097.022-.112.04-.221.058-.328a3.935 3.935 0 0 0-.772-.308Z",
          fill: "#041F4A"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.095 7.592a.697.697 0 0 1 .691-.59h4.385c.52 0 1.005.033 1.447.105a5.807 5.807 0 0 1 .883.21c.218.073.42.158.607.256.22-1.4-.001-2.353-.758-3.216C16.515 3.407 15.01 3 13.082 3H7.487a.8.8 0 0 0-.79.676l-2.33 14.772a.48.48 0 0 0 .473.556h3.454l.868-5.503.933-5.909Z",
          fill: "#052962"
        }
      )
    ]
  }
);
const SvgPayPalBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1M, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "PayPal logo"
    }
  ) : ""
] });

const themeAccordion = {
  textLabel: palette.neutral[7],
  textBody: palette.neutral[7],
  textCta: palette.neutral[7],
  border: palette.neutral[60],
  iconFill: palette.neutral[7]
};
const accordionThemeDefault = {
  accordion: {
    textPrimary: palette.neutral[7],
    borderPrimary: palette.neutral[60]
  }
};
const transformProviderTheme$4 = (providerTheme) => {
  const transformedTheme = {};
  if (providerTheme?.textPrimary) {
    transformedTheme.textLabel = providerTheme.textPrimary;
    transformedTheme.textBody = providerTheme.textPrimary;
    transformedTheme.textCta = providerTheme.textPrimary;
  }
  if (providerTheme?.borderPrimary) {
    transformedTheme.border = providerTheme.borderPrimary;
  }
  return transformedTheme;
};

const text = {
  readerRevenue: {
    ctaPrimary: brand[400],
    ctaTertiary: brand[400]
  },
  readerRevenueBrand: {
    ctaPrimary: brand[400],
    ctaTertiary: brandAlt[400]
  },
  readerRevenueBrandAlt: {
    ctaPrimary: neutral[100],
    ctaTertiary: neutral[7]
  }
};
const background = {
  readerRevenue: {
    ctaPrimary: brandAlt[400],
    ctaPrimaryHover: "#FFD213",
    ctaTertiaryHover: "#E5E5E5"
  },
  readerRevenueBrand: {
    ctaPrimary: brandAlt[400],
    ctaPrimaryHover: "#FFD213",
    ctaTertiaryHover: brand[300]
  },
  readerRevenueBrandAlt: {
    ctaPrimary: neutral[7],
    ctaPrimaryHover: "#454545",
    ctaTertiaryHover: "#FFD213"
  }
};
const border = {
  readerRevenue: {
    ctaTertiary: brand[400]
  },
  readerRevenueBrand: {
    ctaTertiary: brandAlt[400]
  },
  readerRevenueBrandAlt: {
    ctaTertiary: neutral[7]
  }
};
const themeButtonReaderRevenue = {
  textPrimary: text.readerRevenue.ctaPrimary,
  backgroundPrimary: background.readerRevenue.ctaPrimary,
  backgroundPrimaryHover: background.readerRevenue.ctaPrimaryHover,
  textTertiary: text.readerRevenue.ctaTertiary,
  backgroundTertiaryHover: background.readerRevenue.ctaTertiaryHover,
  borderTertiary: border.readerRevenue.ctaTertiary
};
const themeButtonReaderRevenueBrand = {
  textPrimary: text.readerRevenueBrand.ctaPrimary,
  backgroundPrimary: background.readerRevenueBrand.ctaPrimary,
  backgroundPrimaryHover: background.readerRevenueBrand.ctaPrimaryHover,
  textTertiary: text.readerRevenueBrand.ctaTertiary,
  backgroundTertiaryHover: background.readerRevenueBrand.ctaTertiaryHover,
  borderTertiary: border.readerRevenueBrand.ctaTertiary
};
const themeButtonReaderRevenueBrandAlt = {
  textPrimary: text.readerRevenueBrandAlt.ctaPrimary,
  backgroundPrimary: background.readerRevenueBrandAlt.ctaPrimary,
  backgroundPrimaryHover: background.readerRevenueBrandAlt.ctaPrimaryHover,
  textTertiary: text.readerRevenueBrandAlt.ctaTertiary,
  backgroundTertiaryHover: background.readerRevenueBrandAlt.ctaTertiaryHover,
  borderTertiary: border.readerRevenueBrandAlt.ctaTertiary
};
const buttonThemeReaderRevenue = {
  button: themeButtonReaderRevenue
};
const buttonThemeReaderRevenueBrand = {
  button: themeButtonReaderRevenueBrand
};
const buttonThemeReaderRevenueBrandAlt = {
  button: themeButtonReaderRevenueBrandAlt
};

const buttonThemeDefault = {
  button: {
    textPrimary: palette.neutral[100],
    backgroundPrimary: palette.brand[400],
    backgroundPrimaryHover: "#234B8A",
    // One-off colour variant generated from palette.brand[400]
    textSecondary: palette.brand[400],
    backgroundSecondary: palette.brand[800],
    backgroundSecondaryHover: "#ACC9F7",
    // One-off colour variant generated from palette.brand[800]
    textTertiary: palette.brand[400],
    backgroundTertiaryHover: "#E5E5E5",
    // One-off colour variant
    borderTertiary: palette.brand[400],
    textSubdued: palette.brand[400]
  }
};
const buttonThemeBrand = {
  button: {
    textPrimary: palette.brand[400],
    backgroundPrimary: palette.neutral[100],
    backgroundPrimaryHover: "#E0E0E0",
    // One-off colour variant generated from palette.neutral[100]
    textSecondary: palette.neutral[100],
    backgroundSecondary: palette.brand[600],
    backgroundSecondaryHover: "#234B8A",
    // One-off colour variant generated from palette.brand[600]
    textTertiary: palette.neutral[100],
    backgroundTertiaryHover: palette.brand[300],
    borderTertiary: palette.neutral[100],
    textSubdued: palette.neutral[100]
  }
};
const buttonThemeBrandAlt = {
  button: {
    textPrimary: palette.neutral[100],
    backgroundPrimary: palette.neutral[7],
    backgroundPrimaryHover: "#454545",
    // One-off colour variant generated from palette.neutral[7]
    textSecondary: palette.neutral[7],
    backgroundSecondary: palette.brandAlt[200],
    backgroundSecondaryHover: "#F2AE00",
    // One-off colour variant generated from palette.brandAlt[200]
    textTertiary: palette.neutral[0],
    backgroundTertiaryHover: "#FFD213",
    // One-off colour variant
    borderTertiary: palette.neutral[7],
    textSubdued: palette.neutral[7]
  }
};
const themeButton = {
  textPrimary: palette.neutral[100],
  backgroundPrimary: palette.brand[400],
  backgroundPrimaryHover: "#234B8A",
  // One-off colour variant generated from palette.brand[400]
  textSecondary: palette.brand[400],
  backgroundSecondary: palette.brand[800],
  backgroundSecondaryHover: "#ACC9F7",
  // One-off colour variant generated from palette.brand[800]
  textTertiary: palette.brand[400],
  backgroundTertiary: "transparent",
  backgroundTertiaryHover: "#E5E5E5",
  // One-off colour variant
  borderTertiary: palette.brand[400],
  textSubdued: palette.brand[400]
};
const themeButtonBrand = {
  textPrimary: palette.brand[400],
  backgroundPrimary: palette.neutral[100],
  backgroundPrimaryHover: "#E0E0E0",
  // One-off colour variant generated from palette.neutral[100]
  textSecondary: palette.neutral[100],
  backgroundSecondary: palette.brand[600],
  backgroundSecondaryHover: "#234B8A",
  // One-off colour variant generated from palette.brand[600]
  textTertiary: palette.neutral[100],
  backgroundTertiary: "transparent",
  backgroundTertiaryHover: palette.brand[300],
  borderTertiary: palette.neutral[100],
  textSubdued: palette.neutral[100]
};
const themeButtonBrandAlt = {
  textPrimary: palette.neutral[100],
  backgroundPrimary: palette.neutral[7],
  backgroundPrimaryHover: "#454545",
  // One-off colour variant generated from palette.neutral[7]
  textSecondary: palette.neutral[7],
  backgroundSecondary: palette.brandAlt[200],
  backgroundSecondaryHover: "#F2AE00",
  // One-off colour variant generated from palette.brandAlt[200]
  textTertiary: palette.neutral[0],
  backgroundTertiary: "transparent",
  backgroundTertiaryHover: "#FFD213",
  // One-off colour variant
  borderTertiary: palette.neutral[7],
  textSubdued: palette.neutral[7]
};

const labelThemeDefault = {
  label: {
    textLabel: palette.neutral[7],
    textOptional: palette.neutral[46],
    textSupporting: palette.neutral[46],
    textError: palette.error[400],
    textSuccess: palette.success[400]
  }
};
const labelThemeBrand = {
  label: {
    textLabel: palette.neutral[100],
    textOptional: palette.brand[800],
    textSupporting: palette.brand[800],
    textError: palette.error[500],
    textSuccess: palette.success[500]
  }
};
const themeLabel = {
  textLabel: palette.neutral[7],
  textOptional: palette.neutral[46],
  textSupporting: palette.neutral[46],
  textError: palette.error[400],
  textSuccess: palette.success[400]
};
const themeLabelBrand = {
  textLabel: palette.neutral[100],
  textOptional: palette.brand[800],
  textSupporting: palette.brand[800],
  textError: palette.error[500],
  textSuccess: palette.success[500]
};

const userFeedbackThemeDefault = {
  userFeedback: {
    textSuccess: palette.success[400],
    textError: palette.error[400]
  }
};
const userFeedbackThemeBrand = {
  userFeedback: {
    textSuccess: palette.success[500],
    textError: palette.error[500]
  }
};
const themeUserFeedback = {
  textSuccess: palette.success[400],
  textError: palette.error[400]
};
const themeUserFeedbackBrand = {
  textSuccess: palette.success[500],
  textError: palette.error[500]
};

const themeCheckbox = {
  borderUnselected: palette.neutral[46],
  borderHover: palette.brand[500],
  borderSelected: palette.brand[500],
  borderError: palette.error[400],
  fillSelected: palette.brand[500],
  fillUnselected: "transparent",
  textLabel: palette.neutral[7],
  textSupporting: palette.neutral[46],
  textIndeterminate: palette.neutral[46]
};
const themeCheckboxGroup = {
  ...themeLabel
};
const themeCheckboxBrand = {
  borderUnselected: palette.brand[800],
  borderSelected: palette.neutral[100],
  borderHover: palette.neutral[100],
  borderError: palette.error[500],
  fillSelected: palette.neutral[100],
  fillUnselected: "transparent",
  textLabel: palette.neutral[100],
  textSupporting: palette.brand[800],
  textIndeterminate: palette.brand[800]
};
const themeCheckboxGroupBrand = {
  ...themeLabelBrand
};
const checkboxThemeDefault = {
  checkbox: {
    border: palette.neutral[46],
    borderHover: palette.brand[500],
    borderChecked: palette.brand[500],
    borderError: palette.error[400],
    backgroundChecked: palette.brand[500],
    textLabel: palette.neutral[7],
    textLabelSupporting: palette.neutral[46],
    textIndeterminate: palette.neutral[46]
  },
  ...userFeedbackThemeDefault,
  ...labelThemeDefault
};
const checkboxThemeBrand = {
  checkbox: {
    border: palette.brand[800],
    borderHover: palette.neutral[100],
    borderChecked: palette.neutral[100],
    borderError: palette.error[500],
    backgroundChecked: palette.neutral[100],
    textLabel: palette.neutral[100],
    textLabelSupporting: palette.brand[800],
    textIndeterminate: palette.brand[800]
  },
  ...userFeedbackThemeBrand,
  ...labelThemeBrand
};
const transformProviderTheme$3 = (providerTheme) => {
  const transformedTheme = {};
  if (providerTheme?.backgroundChecked) {
    transformedTheme.fillSelected = providerTheme.backgroundChecked;
  }
  if (providerTheme?.borderChecked) {
    transformedTheme.borderSelected = providerTheme.borderChecked;
  }
  if (providerTheme?.border) {
    transformedTheme.borderUnselected = providerTheme.border;
  }
  if (providerTheme?.textLabelSupporting) {
    transformedTheme.textSupporting = providerTheme.textLabelSupporting;
  }
  return { ...transformedTheme, ...providerTheme };
};

const themeChoiceCard = {
  textUnselected: palette.neutral[46],
  textSelected: palette.brand[400],
  textHover: palette.brand[500],
  textError: palette.error[400],
  borderUnselected: palette.neutral[46],
  borderSelected: palette.brand[500],
  borderHover: palette.brand[500],
  borderError: palette.error[400],
  backgroundUnselected: "transparent",
  backgroundHover: "transparent",
  backgroundSelected: "#E3F6FF",
  backgroundTick: palette.brand[500]
};
const themeChoiceCardGroup = {
  ...themeLabel
};
const choiceCardThemeDefault = {
  choiceCard: {
    textLabel: palette.neutral[46],
    textLabelSupporting: palette.neutral[46],
    textGroupLabel: palette.neutral[7],
    textGroupLabelSupporting: palette.neutral[46],
    border: palette.neutral[46],
    textChecked: palette.brand[400],
    backgroundChecked: "#E3F6FF",
    backgroundTick: palette.brand[500],
    borderChecked: palette.brand[500],
    textHover: palette.brand[500],
    borderHover: palette.brand[500],
    textError: palette.error[400],
    borderError: palette.error[400]
  },
  ...userFeedbackThemeDefault
};
const transformProviderTheme$2 = (providerTheme) => {
  const transformedTheme = {};
  if (providerTheme?.textLabel) {
    transformedTheme.textUnselected = providerTheme.textLabel;
  }
  if (providerTheme?.textChecked) {
    transformedTheme.textSelected = providerTheme.textChecked;
  }
  if (providerTheme?.border) {
    transformedTheme.borderUnselected = providerTheme.border;
  }
  if (providerTheme?.borderChecked) {
    transformedTheme.borderSelected = providerTheme.borderChecked;
  }
  if (providerTheme?.backgroundChecked) {
    transformedTheme.backgroundSelected = providerTheme.backgroundChecked;
  }
  return { ...transformedTheme, ...providerTheme };
};

const linkThemeDefault = {
  link: {
    textPrimary: palette.brand[500],
    textPrimaryHover: palette.brand[500],
    textSecondary: palette.neutral[7],
    textSecondaryHover: palette.neutral[7]
  }
};
const linkThemeBrand = {
  link: {
    textPrimary: palette.neutral[100],
    textPrimaryHover: palette.neutral[100]
  }
};
const linkThemeBrandAlt = {
  link: {
    textPrimary: palette.neutral[7],
    textPrimaryHover: palette.neutral[7]
  }
};
const themeLink = {
  textPrimary: palette.brand[500],
  textPrimaryHover: palette.brand[500],
  textSecondary: palette.neutral[7],
  textSecondaryHover: palette.neutral[7]
};
const themeLinkBrand = {
  textPrimary: palette.neutral[100],
  textPrimaryHover: palette.neutral[100]
};
const themeLinkBrandAlt = {
  textPrimary: palette.neutral[7],
  textPrimaryHover: palette.neutral[7]
};

const themeRadio = {
  borderSelected: palette.brand[500],
  borderUnselected: palette.neutral[46],
  borderHover: palette.brand[500],
  borderError: palette.error[400],
  fillSelected: palette.brand[500],
  fillUnselected: "transparent",
  textLabel: palette.neutral[7],
  textSupporting: palette.neutral[46]
};
const themeRadioGroup = {
  borderHover: palette.brand[500],
  borderError: palette.error[400],
  ...themeLabel
};
const themeRadioBrand = {
  borderSelected: palette.neutral[100],
  borderUnselected: palette.brand[800],
  borderHover: palette.neutral[100],
  borderError: palette.error[500],
  fillSelected: palette.neutral[100],
  fillUnselected: "transparent",
  textLabel: palette.neutral[100],
  textSupporting: palette.brand[800]
};
const themeRadioGroupBrand = {
  borderHover: palette.neutral[100],
  borderError: palette.error[500],
  ...themeLabelBrand
};
const transformProviderTheme$1 = (providerTheme) => {
  const transformedTheme = {};
  if (providerTheme?.backgroundChecked) {
    transformedTheme.fillSelected = providerTheme.backgroundChecked;
    transformedTheme.borderSelected = providerTheme.backgroundChecked;
  }
  if (providerTheme?.border) {
    transformedTheme.borderUnselected = providerTheme.border;
  }
  if (providerTheme?.textLabelSupporting) {
    transformedTheme.textLabel = providerTheme.textLabelSupporting;
  }
  return { ...transformedTheme, ...providerTheme };
};
const radioThemeDefault = {
  radio: {
    borderHover: palette.focus[400],
    border: palette.neutral[60],
    backgroundChecked: palette.focus[400],
    textLabel: palette.neutral[7],
    textLabelSupporting: palette.neutral[46],
    borderError: palette.error[400]
  },
  ...labelThemeDefault,
  ...userFeedbackThemeDefault
};
const radioThemeBrand = {
  radio: {
    borderHover: palette.neutral[100],
    border: palette.brand[800],
    backgroundChecked: palette.neutral[100],
    textLabel: palette.neutral[100],
    textLabelSupporting: palette.brand[800],
    borderError: palette.error[500]
  },
  ...labelThemeBrand,
  ...userFeedbackThemeBrand
};

const selectThemeDefault = {
  select: {
    textUserInput: palette.neutral[7],
    textLabel: palette.neutral[7],
    textLabelOptional: palette.neutral[46],
    textLabelSupporting: palette.neutral[46],
    textError: palette.neutral[7],
    textSuccess: palette.success[400],
    backgroundInput: palette.neutral[100],
    border: palette.neutral[46],
    borderActive: palette.focus[400],
    borderError: palette.error[400],
    borderSuccess: palette.success[400]
  },
  ...userFeedbackThemeDefault
};
const themeSelect = {
  textUserInput: palette.neutral[7],
  textLabel: palette.neutral[7],
  textOptional: palette.neutral[46],
  textSupporting: palette.neutral[46],
  textError: palette.neutral[7],
  textSuccess: palette.success[400],
  backgroundInput: palette.neutral[100],
  border: palette.neutral[46],
  borderActive: palette.focus[400],
  borderError: palette.error[400],
  borderSuccess: palette.success[400],
  iconFill: palette.neutral[7]
};
const transformProviderTheme = (providerTheme) => {
  const transformedTheme = {};
  if (providerTheme?.textLabelSupporting) {
    transformedTheme.textSupporting = providerTheme.textLabelSupporting;
  }
  if (providerTheme?.textLabelOptional) {
    transformedTheme.textOptional = providerTheme.textLabelOptional;
  }
  if (providerTheme?.textUserInput) {
    transformedTheme.iconFill = providerTheme.textUserInput;
  }
  return { ...transformedTheme, ...providerTheme };
};

const themeTextInput = {
  textUserInput: palette.neutral[7],
  textLabel: palette.neutral[7],
  textOptional: palette.neutral[46],
  textSupporting: palette.neutral[46],
  textError: palette.neutral[7],
  textSuccess: palette.success[400],
  backgroundInput: palette.neutral[100],
  border: palette.neutral[46],
  borderError: palette.error[400],
  borderSuccess: palette.success[400]
};
const textInputThemeDefault = {
  textInput: {
    textUserInput: palette.neutral[7],
    textLabel: palette.neutral[7],
    textLabelOptional: palette.neutral[46],
    textLabelSupporting: palette.neutral[46],
    textError: palette.neutral[7],
    textSuccess: palette.success[400],
    backgroundInput: palette.neutral[100],
    border: palette.neutral[46],
    borderActive: palette.focus[400],
    borderError: palette.error[400],
    borderSuccess: palette.success[400]
  },
  ...userFeedbackThemeDefault
};

const SvgOfflineCloud = SvgCrossedOutCloud;
const SvgAlert = SvgExclamation;
const SvgMessenger = SvgFacebookMessenger;
const SvgInfo = SvgInfoRound;
const SvgPlay = SvgMediaControlsPlay;
const SvgPayPal = SvgPayPalBrand;

const mergeThemes = (defaultTheme, themeOverrides, providerTheme, transform) => ({
  ...defaultTheme,
  ...transform ? transform(providerTheme) : providerTheme,
  ...themeOverrides
});

const accordion = (accordion2) => css`
	border-bottom: 1px solid ${accordion2.border};
`;
const accordionRow = (accordion2) => css`
	border-top: 1px solid ${accordion2.border};
`;
const buttonStyles$1 = css`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${remSpace[1]} 0 ${remSpace[5]} 0;
	cursor: pointer;
`;
const button$1 = (accordion2) => css`
	${buttonStyles$1};
	color: ${accordion2.textCta};

	/* user agent overrides */
	background: none;
	outline: none;
	border: none;
	text-align: left;

	&:focus div {
		${focusHalo};
	}
`;
const noJsButton = (accordion2) => css`
	${buttonStyles$1};
	color: ${accordion2.textCta};
`;
const labelText$3 = css`
	${headline.xxxsmall({ fontWeight: "bold" })};
	margin-right: ${remSpace[4]};
`;
const expandedBodyStyles = (accordion2) => css`
	/*
	TODO:
	Hardcoded max-height because auto is invalid.
	If content is longer, we'll need to set overflow: auto
	but only after max-height has been reached.
	Otherwise, for short content we'll always see a flash
	of a scrollbar as the row height is transitioning
	*/
	color: ${accordion2.textBody};
	max-height: 500px;
	transition: max-height ${transitions.medium};
	overflow: hidden;
	height: auto;
	padding-bottom: ${remSpace[5]};
`;
const expandedBody = (accordion2) => css`
	${expandedBodyStyles(accordion2)};
`;
const collapsedBodyStyles = css`
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${transitions.short};
	*/
	overflow: hidden;
`;
const collapsedBody = css`
	${collapsedBodyStyles};
`;
const noJsInput = (accordion2) => css`
	${visuallyHidden$4};

	&:focus + [data-target='label'] > [data-target='toggle'] {
		${focusHalo};
	}

	&:not(:checked) ~ [data-target='body'] {
		${collapsedBodyStyles};
		display: none;
	}

	&:checked ~ [data-target='body'] {
		${expandedBodyStyles(accordion2)};
	}

	&:not(:checked) + [data-target='label'] [data-target='toggle-label-hide'] {
		display: none;
	}

	&:checked + [data-target='label'] [data-target='toggle-label-show'] {
		display: none;
	}
`;
const toggle = css`
	width: auto;
	display: flex;
	align-items: center;
`;
const toggleLabel = (accordion2) => css`
	${textSans.small({ fontWeight: "bold" })};
	color: ${accordion2.textLabel};
	${until.tablet} {
		${visuallyHidden$4}
	}
`;
const chevronIcon = css`
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${from.tablet} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${remSpace[1]};
		transition: ${transitions.short};
	}
`;
const chevronIconDown = css`
	${chevronIcon};
	svg {
		transform: translate(0, 0);
		transition: transform ${transitions.short};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${space[1] / 2}px);
		}
	}
`;
const chevronIconUp = css`
	${chevronIcon};
	svg {
		transform: rotate(180deg);
		transition: transform ${transitions.short};
	}
`;
const toggleIconWithLabel = css`
	svg {
		width: 18px;
		height: 18px;
	}
`;

const Accordion = ({
  hideToggleLabel = false,
  children,
  cssOverrides,
  theme,
  ...props
}) => {
  const mergedTheme = (providerTheme) => mergeThemes(
    themeAccordion,
    theme,
    providerTheme,
    transformProviderTheme$4
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      css: (providerTheme) => [
        accordion(mergedTheme(providerTheme.accordion)),
        cssOverrides
      ],
      ...props,
      children: Children.map(children, (child) => {
        return cloneElement(child, { hideToggleLabel });
      })
    }
  );
};

const Svg$1L = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m1 7.224 10.498 10.498h1.004L23 7.224l-.98-.954L12 14.708 1.98 6.27 1 7.224Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronDownSingle = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1L, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Expand to show more"
    }
  ) : ""
] });

const visuallyHidden$3 = css`
	${visuallyHidden$4}
`;
const AccordionRowNoJS = ({
  label,
  hideToggleLabel = false,
  children,
  cssOverrides,
  theme,
  ...props
}) => {
  const mergedTheme = (providerTheme) => mergeThemes(
    themeAccordion,
    theme,
    providerTheme,
    transformProviderTheme$4
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      css: (providerTheme) => [
        accordionRow(mergedTheme(providerTheme.accordion)),
        cssOverrides
      ],
      ...props,
      children: /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            css: (providerTheme) => noJsInput(mergedTheme(providerTheme.accordion)),
            role: "button"
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            css: (providerTheme) => noJsButton(mergedTheme(providerTheme.accordion)),
            "data-target": "label",
            children: [
              /* @__PURE__ */ jsx("strong", { css: labelText$3, children: label }),
              /* @__PURE__ */ jsxs("div", { "data-target": "toggle", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    css: [
                      toggle,
                      chevronIconDown,
                      !hideToggleLabel ? toggleIconWithLabel : ""
                    ],
                    "data-target": "toggle-label-show",
                    children: [
                      /* @__PURE__ */ jsxs(
                        "span",
                        {
                          css: (providerTheme) => [
                            toggleLabel(mergedTheme(providerTheme.accordion)),
                            hideToggleLabel ? visuallyHidden$3 : ""
                          ],
                          children: [
                            "Show",
                            /* @__PURE__ */ jsx("span", { css: visuallyHidden$3, children: " more" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    css: [
                      toggle,
                      chevronIconUp,
                      !hideToggleLabel ? toggleIconWithLabel : ""
                    ],
                    "data-target": "toggle-label-hide",
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          css: (providerTheme) => [
                            toggleLabel(mergedTheme(providerTheme.accordion)),
                            hideToggleLabel ? visuallyHidden$3 : ""
                          ],
                          children: "Hide"
                        }
                      ),
                      /* @__PURE__ */ jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { css: collapsedBody, "data-target": "body", children: /* @__PURE__ */ jsx("div", { children }) })
      ] })
    }
  );
};

const visuallyHidden$2 = css`
	${visuallyHidden$4}
`;
const AccordionRow = ({
  label,
  hideToggleLabel = false,
  children,
  cssOverrides,
  onClick = () => void 0,
  theme
}) => {
  const [expanded, setExpanded] = useState(false);
  const collapse = () => setExpanded(false);
  const expand = () => setExpanded(true);
  const [isBrowser, setIsBrowser] = useState(false);
  const mergedTheme = (providerTheme) => mergeThemes(
    themeAccordion,
    theme,
    providerTheme,
    transformProviderTheme$4
  );
  function handleClick(event) {
    expanded ? collapse() : expand();
    onClick(event);
  }
  useEffect(() => {
    setIsBrowser(true);
  });
  if (isBrowser) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        css: (providerTheme) => [
          accordionRow(mergedTheme(providerTheme.accordion)),
          cssOverrides
        ],
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              "aria-expanded": expanded,
              onClick: handleClick,
              css: (providerTheme) => [
                button$1(mergedTheme(providerTheme.accordion)),
                expanded ? chevronIconUp : chevronIconDown,
                !hideToggleLabel ? toggleIconWithLabel : ""
              ],
              children: [
                /* @__PURE__ */ jsx("strong", { css: labelText$3, children: label }),
                /* @__PURE__ */ jsxs("div", { css: toggle, children: [
                  hideToggleLabel ? /* @__PURE__ */ jsx("span", { css: visuallyHidden$2, children: expanded ? "Hide" : "Show more" }) : /* @__PURE__ */ jsx(
                    "span",
                    {
                      css: (providerTheme) => toggleLabel(mergedTheme(providerTheme.accordion)),
                      children: expanded ? "Hide" : /* @__PURE__ */ jsxs(Fragment, { children: [
                        "Show",
                        /* @__PURE__ */ jsx("span", { css: visuallyHidden$2, children: " more" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              css: (providerTheme) => expanded ? expandedBody(mergedTheme(providerTheme.accordion)) : collapsedBody,
              children: /* @__PURE__ */ jsx("div", { hidden: !expanded, children })
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx(
    AccordionRowNoJS,
    {
      label,
      hideToggleLabel,
      cssOverrides,
      children
    }
  );
};

const circleLineThickness = 5;
const lightblueStyles = css`
	stroke: #a5c0e8;
	stroke-width: ${circleLineThickness};
	fill: transparent;
`;
const darkblueStyles = css`
	stroke: ${brand["400"]};
	stroke-dasharray: 82;
	stroke-dashoffset: 82;
	stroke-width: ${circleLineThickness};
	fill: transparent;
`;
const SvgSpinner = ({
  size
}) => {
  return /* @__PURE__ */ jsx("svg", { width: size ? iconSize[size] : void 0, viewBox: "0 0 30 30", children: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "animateTransform",
      {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: "0 15 15",
        to: "360 15 15",
        dur: "2.5s",
        repeatCount: "indefinite"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "15", cy: "15", r: "12.6", css: lightblueStyles }),
    /* @__PURE__ */ jsx(
      "path",
      {
        css: darkblueStyles,
        d: "M15,15 m0,-12.6 a 12.6,12.6 0 0,1 0,25.2 a 12.6,12.6 0 0,1 0,-25.2",
        children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "stroke-dashoffset",
            dur: "3.5s",
            to: "-82",
            repeatCount: "indefinite"
          }
        )
      }
    )
  ] }) });
};

const buttonContents = ({
  hideLabel,
  iconSvg,
  isLoading,
  children
}) => {
  const contents = [children];
  if (isLoading) {
    if (!hideLabel) {
      contents.push(/* @__PURE__ */ jsx("div", { className: "src-button-space" }, "space"));
    }
    contents.push(
      cloneElement(/* @__PURE__ */ jsx(SvgSpinner, {}), {
        key: "svg"
      })
    );
  } else if (iconSvg) {
    if (!hideLabel) {
      contents.push(/* @__PURE__ */ jsx("div", { className: "src-button-space" }, "space"));
    }
    contents.push(cloneElement(iconSvg, { key: "svg" }));
  }
  if (hideLabel) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          css: css`
						${visuallyHidden$4};
					`,
          children
        }
      ),
      contents[1]
    ] });
  } else {
    return contents;
  }
};

const button = css`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${transitions.medium};
	text-decoration: none;
	white-space: nowrap;
	vertical-align: middle;

	:disabled {
		cursor: not-allowed;
	}

	&:focus {
		${focusHaloSpaced};
	}
`;
const loadingSpinnerSizes = {
  xsmall: 16,
  small: 20,
  default: 24
};
const applyButtonStylesToLoadingSpinner = (size) => {
  return css`
		path,
		circle {
			transition: stroke ${transitions.medium};
			stroke: transparent;
		}
		path {
			stroke: currentColor;
		}
		svg {
			/*
		 * The loading spinner width has been specified as 24px in the design
		 * which falls outside of the icon sizes in source-foundations, so we
		 * override the width here.
		 */
			width: ${loadingSpinnerSizes[size]}px;
		}
	`;
};
const primary$1 = (button2) => css`
	background-color: ${button2.backgroundPrimary};
	color: ${button2.textPrimary};

	&:hover {
		background-color: ${button2.backgroundPrimaryHover};
	}
`;
const secondary$1 = (button2) => css`
	background-color: ${button2.backgroundSecondary};
	color: ${button2.textSecondary};

	&:hover {
		background-color: ${button2.backgroundSecondaryHover};
	}
`;
const tertiary = (button2) => css`
	background-color: ${button2.backgroundTertiary};
	color: ${button2.textTertiary};
	border: 1px solid ${button2.borderTertiary};

	&:hover {
		background-color: ${button2.backgroundTertiaryHover};
	}
`;
const subdued = (button2) => css`
	padding: 0;
	background-color: transparent;
	color: ${button2.textSubdued};
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration-thickness: 4px;
	}

	/* Why is this zero? Because the default is to have rounded corners but here, when
	   there is only text, it is more natural to show a rectangle for the focus halo */
	border-radius: 0;
`;
const defaultSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${height.ctaMedium}px;
	min-height: ${height.ctaMedium}px;
	padding: 0 ${space[5]}px;
	border-radius: ${height.ctaMedium}px;
	padding-bottom: 2px;
`;
const smallSize = css`
	${textSans.medium({ fontWeight: "bold" })};
	height: ${height.ctaSmall}px;
	min-height: ${height.ctaSmall}px;
	padding: 0 ${space[4]}px;
	border-radius: ${height.ctaSmall}px;
	padding-bottom: 2px;
`;
const xsmallSize = css`
	${textSans.xsmall({ fontWeight: "bold" })};
	height: ${height.ctaXsmall}px;
	min-height: ${height.ctaXsmall}px;
	padding: 0 ${space[3]}px;
	border-radius: ${height.ctaXsmall}px;
	padding-bottom: 1px;
`;
const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconMedium}px;
		height: auto;
	}
	.src-button-space {
		width: ${space[3]}px;
	}
`;
const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconSmall}px;
		height: auto;
	}
	.src-button-space {
		width: ${space[2]}px;
	}
`;
const iconXsmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${width.iconXsmall}px;
		height: auto;
	}
	.src-button-space {
		width: ${space[1]}px;
	}
`;
const pullIconTowardEdge = -space[1];
const iconLeft$1 = css`
	flex-direction: row-reverse;
	svg {
		margin-left: ${pullIconTowardEdge}px;
	}
`;
const iconRight$1 = css`
	svg {
		margin-right: ${pullIconTowardEdge}px;
	}
`;
const iconOnly = css`
	justify-content: center;
	padding: 0;
`;
const iconOnlyDefault = css`
	${iconOnly};
	width: ${width.ctaMedium}px;
`;
const iconOnlySmall = css`
	${iconOnly};
	width: ${width.ctaSmall}px;
`;
const iconOnlyXsmall = css`
	${iconOnly};
	width: ${width.ctaXsmall}px;
`;
const iconNudgeAnimation = css`
	svg {
		transform: translate(0, 0);
		transition: ${transitions.short};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${space[1] / 2}px, 0);
		}
	}
`;
const priorities$1 = {
  primary: primary$1,
  secondary: secondary$1,
  tertiary,
  subdued
};
const iconSides$1 = {
  right: iconRight$1,
  left: iconLeft$1
};
const sizes = {
  default: defaultSize,
  small: smallSize,
  xsmall: xsmallSize
};
const iconSizes = {
  default: iconDefault,
  small: iconSmall,
  xsmall: iconXsmall
};
const iconOnlySizes = {
  default: iconOnlyDefault,
  small: iconOnlySmall,
  xsmall: iconOnlyXsmall
};
const mergedTheme$2 = (providerTheme, theme) => mergeThemes(themeButton, theme, providerTheme);
const buttonStyles = ({
  priority = "primary",
  size = "default",
  icon: iconSvg,
  hideLabel,
  iconSide = "left",
  nudgeIcon,
  cssOverrides,
  isLoading,
  theme
}) => (providerTheme) => [
  button,
  sizes[size],
  priorities$1[priority](mergedTheme$2(providerTheme.button, theme)),
  iconSvg ?? isLoading ? iconSizes[size] : "",
  (iconSvg ?? isLoading) && !hideLabel ? iconSides$1[iconSide] : "",
  nudgeIcon ? iconNudgeAnimation : "",
  hideLabel ? iconOnlySizes[size] : "",
  isLoading ? applyButtonStylesToLoadingSpinner(size) : void 0,
  cssOverrides
];

const Button = ({
  priority,
  size,
  icon: iconSvg,
  iconSide,
  hideLabel,
  nudgeIcon,
  type = "button",
  isLoading = false,
  loadingAnnouncement = "Loading",
  cssOverrides,
  children,
  theme,
  ...props
}) => /* @__PURE__ */ jsx(
  "button",
  {
    css: buttonStyles({
      size,
      priority,
      icon: iconSvg,
      hideLabel,
      iconSide,
      nudgeIcon,
      cssOverrides,
      isLoading,
      theme
    }),
    type,
    "aria-live": "polite",
    "aria-label": isLoading ? loadingAnnouncement : void 0,
    ...props,
    children: buttonContents({
      hideLabel,
      iconSvg,
      isLoading,
      children
    })
  }
);

const LinkButton = ({
  priority,
  size,
  iconSide,
  icon: iconSvg,
  nudgeIcon,
  hideLabel,
  cssOverrides,
  children,
  theme,
  ...props
}) => /* @__PURE__ */ jsx(
  "a",
  {
    css: buttonStyles({
      size,
      priority,
      icon: iconSvg,
      hideLabel,
      iconSide,
      nudgeIcon,
      cssOverrides,
      theme
    }),
    ...props,
    children: buttonContents({
      hideLabel,
      iconSvg,
      children
    })
  }
);

const SvgGuardianLogo = ({
  textColor,
  width
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 -3 300 100",
        fill: textColor,
        width,
        focusable: false,
        "aria-hidden": true,
        children: [
          /* @__PURE__ */ jsx("path", { d: "M0 70.8c0-19.5 13-26.4 27.3-26.4 6.1 0 12 1 15.1 2.3l.3 13.6h-1.4L33 47.2c-1.5-.7-2.8-.9-5.4-.9-7.6 0-11.5 8.8-11.4 23.3.1 17.3 3.1 25.1 10.2 25.1 1.8 0 3.2-.2 4.2-.7V75.5l-4.7-2.7v-1.5h22.5V73l-4.6 2.5v18.3a50.1 50.1 0 0 1-17 2.9C10.5 96.7 0 89 0 70.8Z" }),
          /* @__PURE__ */ jsx("path", { d: "m142.8 57.9 1.2.1v11h.3c1.6-8 5.2-11 9.5-11 .7 0 1.5 0 1.9.2v11.2c-.7-.2-2-.2-3.1-.2-3.4 0-6 .6-8.2 1.6v21.7l3.4 1.9v1.4h-19.5v-1.4l3.5-2V63l-4.1-1.2v-1l15-2.8Z" }),
          /* @__PURE__ */ jsx("path", { d: "M110.2 74v-4.9c0-7.4-1.6-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.3 1.6-5 0-7.3-1.6-8.4-4.3h-.4c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10S94.2 77 102 75.5l8.1-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.3 2.8-5.3 8.3 0 6 2 7.6 4.7 7.6 1.5 0 2.4-.5 3.1-1.3Z" }),
          /* @__PURE__ */ jsx("path", { d: "M47.5 61.7v-1.1l15-2.7 1.7.2v29.6c0 3.6 1.7 4.7 4.6 4.7 1.9 0 3.6-.7 4.9-2.3V63.5l-4.1-1.8v-1.1l15-2.7 1.6.1v34l4 1.7v1l-14.9 1.9-1.5-.1V92h-.4a16.8 16.8 0 0 1-11.3 4.7c-7.2 0-10.5-4.2-10.5-10.7V63.5l-4.1-1.8Z" }),
          /* @__PURE__ */ jsx("path", { d: "M261.5 92.5V63l-4.2-1.4v-1.5l15-2.7h1.5V62h.5c3.2-2.9 8-4.7 12.8-4.7 6.5 0 9.4 3 9.4 10v25.1l3.5 2v1.4h-19.5v-1.4l3.5-2V68c0-3.8-1.7-5.3-4.8-5.3-2 0-3.6.5-5.1 1.6v28.3l3.4 1.9v1.4h-19.6v-1.4l3.6-2Z" }),
          /* @__PURE__ */ jsx("path", { d: "m214 57.8 1.4.2v34.5l3.4 1.9v1.4h-19.5v-1.4l3.5-2v-29l-4.2-1.6v-1.2l15.5-2.8Zm1.5-9.3c0 3.7-3.1 6.4-6.7 6.4a6.4 6.4 0 0 1-6.6-6.4c0-3.6 2.9-6.4 6.6-6.4 3.6 0 6.7 2.8 6.7 6.4Z" }),
          /* @__PURE__ */ jsx("path", { d: "M239.8 74v-4.9c0-7.4-1.7-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.4 1.6-5 0-7.3-1.6-8.4-4.3h-.3c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10s3.8-9.6 11.7-11.1l8-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.4 2.8-5.4 8.3 0 6 2 7.6 4.8 7.6 1.5 0 2.4-.5 3-1.3Z" }),
          /* @__PURE__ */ jsx("path", { d: "M180.6 58.8V47.2l-4.1-1.4v-1l15.2-2.7 1.5.2V92l4.2 1.5v1.3l-15 2-1.2-.2v-4h-.4a13.4 13.4 0 0 1-10 4.1c-8.1 0-14.1-6.2-14.1-19 0-13.5 7-20 17.5-20 3 0 5.3.5 6.4 1.1Zm0 31.8V61c-1-.6-1.7-1.4-4.2-1.3-4 .2-6.6 6.3-6.6 17.2 0 9.8 1.9 15.3 7.3 15.1 1.5 0 2.7-.6 3.5-1.3Z" }),
          /* @__PURE__ */ jsx("path", { d: "m68.1 51.6 5.2-2.7V8.5h-4L60 21.1h-1.1l.6-14h41.3l.6 14H100L90.8 8.5h-4v40.3l5.2 2.7V53H68.1v-1.3Z" }),
          /* @__PURE__ */ jsx("path", { d: "M105.4 49.8V5l-4-1.6v-.8L115.9 0h1.5v21.2l.4-.4c3.2-2.8 7.8-4.5 12.4-4.5 6.3 0 9.1 3.5 9.1 10.2v23.3l3.4 1.8V53h-18.9v-1.4l3.4-1.8V26.4c0-3.7-1.6-5.1-4.6-5.1a8 8 0 0 0-5 1.6v27l3.3 1.8V53h-19v-1.3l3.5-2Z" }),
          /* @__PURE__ */ jsx("path", { d: "M153.7 36c.4 7.4 3.7 13.1 11.6 13.1 3.8 0 6.5-1.7 9-3v1.4c-1.9 2.7-6.9 6.5-13.8 6.5-12.2 0-18.5-6.8-18.5-18.5 0-11.5 6.8-18.6 17.9-18.6 10.3 0 15.7 5.2 15.7 18.8v.3h-21.9Zm-.2-1.7 10.8-.6c0-9.2-1.6-15.3-4.8-15.3-3.3 0-6 7-6 16Z" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        css: css`
					${visuallyHidden$4}
				`,
        children: "The Guardian"
      }
    )
  ] });
};

const SvgGuardianBestWebsiteLogo = ({
  textColor,
  textAccentColor,
  width
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 300 116",
        width,
        focusable: false,
        "aria-hidden": true,
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M68.131 51.554L73.283 48.879V8.502H69.387L59.87 21.091H58.795L59.402 7.059H100.664L101.26 21.091H100.131L90.806 8.502H86.814V48.794L91.998 51.522V52.891H68.131V51.554ZM105.401 49.77V5.02L101.398 3.428V2.59L115.866 0H117.388V21.175L117.792 20.835C120.997 18.045 125.596 16.25 130.194 16.25C136.529 16.25 139.328 19.817 139.328 26.461V49.771L142.714 51.606V52.966H123.797V51.617L127.192 49.77V26.376C127.192 22.726 125.596 21.26 122.594 21.26C120.592 21.26 118.868 21.887 117.59 22.906V49.823L120.922 51.66V52.955H101.995V51.67L105.401 49.77V49.77ZM153.732 36.025C154.125 43.423 157.447 49.145 165.324 49.145C169.135 49.145 171.839 47.382 174.384 46.045V47.5C172.414 50.186 167.422 53.954 160.47 53.954C148.26 53.954 142.021 47.192 142.021 35.474C142.021 24.021 148.845 16.889 159.874 16.889C170.243 16.889 175.629 22.058 175.629 35.665V36.015H153.732V36.026V36.025ZM153.529 34.327L164.271 33.669C164.271 24.509 162.695 18.427 159.544 18.427C156.201 18.427 153.529 25.485 153.529 34.327ZM0 70.808C0 51.33 12.934 44.399 27.338 44.399C33.448 44.399 39.218 45.376 42.443 46.713L42.72 60.31H41.347L32.894 47.16C31.447 46.544 30.074 46.3 27.54 46.3C19.886 46.3 15.968 55.12 16.085 69.587C16.235 86.888 19.247 94.743 26.273 94.743C28.104 94.743 29.509 94.467 30.489 94.043V75.498L25.847 72.845V71.295H48.267V72.951L43.7 75.499V93.787C39.91 95.263 33.512 96.664 26.763 96.664C10.39 96.664 0 89.096 0 70.808ZM47.478 61.722V60.597L62.553 57.944L64.203 58.082V87.696C64.203 91.262 65.927 92.366 68.812 92.366C70.675 92.366 72.357 91.666 73.698 90.063V63.505L69.568 61.721V60.554L84.642 57.9L86.153 58.038V91.983L90.22 93.681V94.764L75.348 96.59L73.837 96.452V91.994H73.421C70.664 94.531 66.811 96.728 62.127 96.728C54.898 96.728 51.587 92.472 51.587 86.018V63.507L47.478 61.723V61.722ZM142.767 57.88L144.002 58.018V68.982H144.342C145.95 60.947 149.505 57.944 153.838 57.944C154.53 57.944 155.286 58.007 155.701 58.219V69.439C155.009 69.237 153.774 69.163 152.603 69.163C149.165 69.163 146.631 69.778 144.406 70.797V92.472L147.834 94.372V95.772H128.289V94.382L131.813 92.482V62.9L127.682 61.67V60.66L142.767 57.88Z",
              fill: textColor
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M180.622 58.804V47.234L176.491 45.791V44.867L191.704 42.076L193.151 42.277V91.963L197.356 93.481V94.765L182.346 96.781L181.175 96.644V92.536H180.835C178.631 94.733 175.597 96.718 170.849 96.718C162.652 96.718 156.669 90.477 156.669 77.708C156.669 64.248 163.621 57.636 174.16 57.636C177.173 57.636 179.451 58.188 180.622 58.804V58.804ZM180.59 90.614V60.917C179.621 60.301 178.929 59.537 176.427 59.622C172.361 59.76 169.849 65.895 169.849 76.806C169.849 86.625 171.658 92.112 177.077 91.932C178.599 91.879 179.834 91.337 180.59 90.616V90.614ZM214.07 57.848L215.379 57.986V92.46L218.818 94.36V95.76H199.273V94.37L202.786 92.47V63.43L198.581 61.785V60.638L214.07 57.847V57.848ZM215.454 48.538C215.454 52.18 212.356 54.918 208.779 54.918C205.064 54.918 202.168 52.169 202.168 48.538C202.168 44.898 205.064 42.085 208.779 42.085C212.356 42.085 215.454 44.898 215.454 48.539V48.538ZM261.453 92.472V63.112L257.322 61.669V60.247L272.332 57.455L273.844 57.593V61.987H274.259C277.495 59.1 282.318 57.253 287.066 57.253C293.602 57.253 296.498 60.343 296.498 67.21V92.408L300 94.36V95.76H280.455V94.37L283.968 92.47V67.9C283.968 64.122 282.318 62.615 279.22 62.615C277.219 62.615 275.579 63.125 274.057 64.249V92.462L277.495 94.362V95.762H257.94V94.372L261.453 92.472V92.472ZM239.768 74.024V69.099C239.768 61.679 238.15 59.249 233.551 59.249C233.008 59.249 232.54 59.312 231.997 59.386L223.811 70.446H222.661V60.269C226.174 59.186 230.571 57.912 236.394 57.912C246.4 57.912 252.223 60.682 252.223 69.036V93.046L255.811 93.99V94.935C254.395 95.815 251.553 96.622 248.434 96.622C243.494 96.622 241.131 95.009 240.045 92.302H239.704C237.607 95.136 234.637 96.75 229.964 96.75C224.013 96.75 219.957 93.045 219.957 86.634C219.957 80.425 223.811 77.06 231.656 75.574L239.768 74.024V74.024ZM239.768 90.614V75.774L237.267 75.977C233.338 76.317 231.923 78.811 231.923 84.341C231.923 90.338 233.881 91.898 236.66 91.898C238.214 91.888 239.098 91.42 239.768 90.614ZM110.202 74.024V69.099C110.202 61.679 108.584 59.249 103.975 59.249C103.432 59.249 102.963 59.312 102.42 59.386L94.234 70.446H93.084V60.269C96.597 59.186 100.994 57.912 106.817 57.912C116.824 57.912 122.647 60.682 122.647 69.036V93.046L126.234 93.99V94.935C124.818 95.815 121.976 96.622 118.857 96.622C113.917 96.622 111.554 95.009 110.468 92.302H110.128C108.031 95.136 105.05 96.75 100.387 96.75C94.437 96.75 90.38 93.045 90.38 86.634C90.38 80.425 94.234 77.06 102.08 75.574L110.202 74.024V74.024ZM110.202 90.614V75.774L107.701 75.977C103.772 76.317 102.357 78.811 102.357 84.341C102.357 90.338 104.315 91.898 107.094 91.898C108.637 91.888 109.521 91.42 110.202 90.614Z",
              fill: textColor
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M73.848 100.316H76.094L79.043 105.411C79.969 107.003 81.001 109.359 81.001 109.359H81.055C81.055 109.359 80.895 106.886 80.895 105.22V100.316H82.715V112.023H80.745L77.51 106.355C76.594 104.763 75.55 102.364 75.55 102.364H75.487C75.487 102.364 75.679 104.912 75.679 106.557V112.034H73.859V100.316H73.848V100.316ZM84.6 108.053V107.257C84.6 104.402 86.26 103.085 88.464 103.085C91.019 103.085 92.084 104.402 92.084 107.129V108.212H86.622C86.675 110.165 87.506 110.579 89.177 110.579C90.317 110.579 91.051 110.324 91.796 109.963V111.375C91.21 111.747 90.263 112.192 88.783 112.192C85.93 112.192 84.6 110.738 84.6 108.053ZM86.601 106.832H90.114C90.114 105.081 89.528 104.54 88.432 104.54C87.548 104.54 86.654 104.932 86.601 106.832ZM92.87 103.245H94.904L95.681 106.493C96.021 107.894 96.394 110.59 96.394 110.59H96.458C96.458 110.59 96.831 107.926 97.225 106.493L98.108 103.245H99.865L100.748 106.493C101.121 107.894 101.568 110.59 101.568 110.59H101.632C101.632 110.59 101.994 107.926 102.334 106.493L103.101 103.245H104.879L102.515 112.034H100.525L99.535 108.457C99.162 107.141 98.928 104.784 98.928 104.784H98.864C98.864 104.784 98.651 107.141 98.278 108.457L97.288 112.034H95.255L92.871 103.245H92.87ZM105.752 111.609V110.048C106.487 110.345 107.104 110.579 108.329 110.579C109.5 110.579 109.968 110.239 109.968 109.602C109.968 109.019 109.808 108.743 108.84 108.509L107.882 108.286C106.583 107.979 105.763 107.31 105.763 105.739C105.763 104.115 106.774 103.075 108.935 103.075C110.106 103.075 110.862 103.287 111.426 103.563V105.091C110.926 104.879 110.096 104.656 109.116 104.656C108.126 104.656 107.615 104.985 107.615 105.601C107.615 106.185 107.892 106.429 108.659 106.609L109.617 106.832C111.299 107.225 111.884 107.904 111.884 109.443C111.884 111.248 110.713 112.171 108.573 112.171C107.477 112.171 106.466 111.98 105.752 111.609V111.609ZM116.728 103.245H118.761L119.538 106.493C119.879 107.894 120.251 110.59 120.251 110.59H120.315C120.315 110.59 120.688 107.926 121.082 106.493L121.965 103.245H123.722L124.605 106.493C124.978 107.894 125.425 110.59 125.425 110.59H125.489C125.489 110.59 125.851 107.926 126.191 106.493L126.958 103.245H128.736L126.372 112.034H124.382L123.392 108.457C123.019 107.141 122.785 104.784 122.785 104.784H122.721C122.721 104.784 122.508 107.141 122.135 108.457L121.145 112.034H119.112L116.728 103.245V103.245ZM129.641 108.053V107.257C129.641 104.402 131.301 103.085 133.505 103.085C136.06 103.085 137.124 104.402 137.124 107.129V108.212H131.663C131.716 110.165 132.547 110.579 134.218 110.579C135.357 110.579 136.092 110.324 136.837 109.963V111.375C136.251 111.747 135.304 112.192 133.824 112.192C130.971 112.192 129.641 110.738 129.641 108.053ZM131.642 106.832H135.155C135.155 105.081 134.569 104.54 133.473 104.54C132.589 104.54 131.685 104.932 131.642 106.832V106.832ZM138.71 111.525V99.541H140.669V104.01H140.754C141.372 103.479 142.128 103.086 143.245 103.086C144.842 103.086 146.471 104.01 146.471 107.077V107.788C146.471 110.792 144.991 112.225 142.138 112.225C140.893 112.225 139.52 111.928 138.71 111.525V111.525ZM144.427 108.064V107.247C144.427 105.198 143.778 104.7 142.309 104.7C141.627 104.7 141.01 104.954 140.659 105.135V110.368C140.989 110.527 141.404 110.707 142.234 110.707C143.384 110.707 144.427 110.272 144.427 108.064V108.064ZM147.632 111.609V110.048C148.366 110.345 148.984 110.579 150.208 110.579C151.379 110.579 151.847 110.239 151.847 109.602C151.847 109.019 151.688 108.743 150.73 108.509L149.772 108.286C148.473 107.979 147.653 107.31 147.653 105.739C147.653 104.115 148.664 103.075 150.825 103.075C151.996 103.075 152.752 103.287 153.317 103.563V105.091C152.816 104.879 151.986 104.656 151.006 104.656C150.016 104.656 149.505 104.985 149.505 105.601C149.505 106.185 149.782 106.429 150.549 106.609L151.507 106.832C153.189 107.225 153.774 107.904 153.774 109.443C153.774 111.248 152.603 112.171 150.464 112.171C149.356 112.171 148.345 111.98 147.632 111.609ZM155.253 99.816H157.276V101.684H155.253V99.816ZM155.285 103.244H157.244V112.033H155.285V103.244ZM159.969 109.9V104.784H158.521V103.245H159.969V101.122H161.928V103.245H164.196V104.784H161.928V109.592C161.928 110.356 162.184 110.579 163.025 110.579C163.386 110.579 164.004 110.484 164.313 110.356V111.683C163.951 111.906 163.237 112.14 162.386 112.14C160.917 112.14 159.969 111.588 159.969 109.9V109.9ZM165.313 108.053V107.257C165.313 104.402 166.974 103.085 169.178 103.085C171.733 103.085 172.797 104.402 172.797 107.129V108.212H167.336C167.389 110.165 168.22 110.579 169.891 110.579C171.03 110.579 171.765 110.324 172.51 109.963V111.375C171.924 111.747 170.977 112.192 169.497 112.192C166.644 112.192 165.313 110.738 165.313 108.053ZM167.315 106.832H170.828C170.828 105.081 170.242 104.54 169.146 104.54C168.262 104.54 167.368 104.932 167.315 106.832V106.832ZM178.035 108.053V107.31C178.035 104.55 179.76 103.085 182.07 103.085C184.561 103.085 186.041 104.518 186.041 107.225V107.968C186.041 110.76 184.348 112.192 182.048 112.192C179.526 112.192 178.035 110.738 178.035 108.053V108.053ZM184.007 108.127V107.236C184.007 105.038 183.124 104.593 182.038 104.593C180.814 104.593 180.068 105.357 180.068 107.161V108.074C180.068 110.229 180.963 110.685 182.091 110.685C183.305 110.675 184.007 109.963 184.007 108.127V108.127ZM188.318 104.784H186.881V103.245H188.318V102.162C188.318 100.241 189.489 99.402 191.139 99.402C191.937 99.402 192.544 99.551 192.832 99.71V101.079C192.608 101.016 192.15 100.952 191.661 100.952C190.766 100.952 190.277 101.355 190.277 102.353V103.266H192.374V104.805H190.277V112.044H188.318V104.784V104.784ZM198.496 109.9V104.784H197.048V103.245H198.496V101.122H200.454V103.245H202.722V104.784H200.454V109.592C200.454 110.356 200.71 110.579 201.551 110.579C201.913 110.579 202.53 110.484 202.839 110.356V111.683C202.477 111.906 201.764 112.14 200.912 112.14C199.443 112.14 198.496 111.588 198.496 109.9V109.9ZM204.212 99.541H206.171V104.137H206.256C206.874 103.532 207.906 103.086 208.96 103.086C210.589 103.086 211.409 103.797 211.409 105.506V112.034H209.45V105.994C209.45 105.114 209.173 104.763 208.045 104.763C207.406 104.763 206.672 104.976 206.171 105.23V112.034H204.212V99.541V99.541ZM212.995 108.053V107.257C212.995 104.402 214.655 103.085 216.859 103.085C219.414 103.085 220.478 104.402 220.478 107.129V108.212H215.017C215.07 110.165 215.901 110.579 217.572 110.579C218.711 110.579 219.446 110.324 220.191 109.963V111.375C219.605 111.747 218.658 112.192 217.178 112.192C214.325 112.192 212.995 110.738 212.995 108.053ZM214.996 106.832H218.509C218.509 105.081 217.923 104.54 216.827 104.54C215.933 104.54 215.039 104.932 214.996 106.832V106.832ZM225.609 115.112V113.732C225.833 113.785 226.163 113.817 226.472 113.817C227.249 113.817 227.739 113.509 228.047 112.681L228.356 111.853L225.29 103.245H227.355L228.313 106.1C228.931 107.915 229.325 110.335 229.325 110.335H229.378C229.378 110.335 229.814 107.915 230.4 106.1L231.315 103.245H233.253L229.878 112.989C229.303 114.645 228.473 115.388 226.898 115.388C226.45 115.388 225.865 115.271 225.609 115.112V115.112ZM233.86 108.053V107.257C233.86 104.402 235.521 103.085 237.724 103.085C240.279 103.085 241.344 104.402 241.344 107.129V108.212H235.882C235.936 110.165 236.766 110.579 238.437 110.579C239.576 110.579 240.311 110.324 241.056 109.963V111.375C240.471 111.747 239.523 112.192 238.044 112.192C235.201 112.192 233.86 110.738 233.86 108.053V108.053ZM235.872 106.832H239.385C239.385 105.081 238.799 104.54 237.703 104.54C236.809 104.54 235.914 104.932 235.872 106.832V106.832ZM242.408 109.666C242.408 108.042 243.42 107.278 245.133 107.066L247.092 106.811V106.142C247.092 105.017 246.634 104.731 245.187 104.731C244.356 104.731 243.611 104.858 243.09 104.975V103.563C243.888 103.234 244.835 103.075 245.953 103.075C247.923 103.075 249.051 103.85 249.051 105.707V112.023H247.443L247.284 111.142H247.188C246.783 111.715 246.134 112.182 245.038 112.182C243.473 112.192 242.408 111.375 242.408 109.666V109.666ZM247.082 110.271V108.042L245.57 108.191C244.74 108.276 244.367 108.722 244.367 109.571C244.367 110.42 244.857 110.77 245.623 110.77C246.219 110.781 246.762 110.568 247.082 110.271ZM251.01 103.245H252.883V104.444H252.979C253.416 103.712 254.384 103.118 255.279 103.118C255.523 103.118 255.736 103.15 255.8 103.203V104.986C255.575 104.948 255.347 104.927 255.119 104.922C254.352 104.922 253.511 105.177 252.969 105.527V112.044H251.01V103.245V103.245Z",
              fill: textAccentColor
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        css: css`
					${visuallyHidden$4}
				`,
        children: "The Guardian: news website of the year"
      }
    )
  ] });
};

const SvgGuardianLiveLogo = ({
  textColor,
  width
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 380 200",
        fill: textColor,
        width,
        focusable: false,
        "aria-hidden": true,
        children: [
          /* @__PURE__ */ jsx("defs", {}),
          /* @__PURE__ */ jsx("path", { d: "M84.69 196.22l5.82-1.3v-57.13l-5.82-1.3V135h30.44v1.48l-6.27 1.22v58.37h9.92l14.28-22.36h1.48l-1.13 24H84.7v-1.5zm69.56-47.05l2.18.17v45.49l4.87 1.4v1.47h-25.76v-1.48l4.95-1.4v-39.3l-5.3-2.1v-1.48l19.06-2.77zm2.25-11.27a8.24 8.24 0 01-.7 3.15 8.26 8.26 0 01-7.74 4.94 8.13 8.13 0 01-5.99-2.25 8.13 8.13 0 01-2.51-5.88 8.14 8.14 0 018.5-8.14 8.33 8.33 0 018.44 8.18zm46.84 17.19l-14.1 42.62h-9.52l-16.84-43.94-4-2.18v-1.47h26.81v1.47l-5.47 2.08 11.1 31.06h.43l9.92-29.56-6.7-3.58v-1.47h13.83v1.47l-5.46 3.5zm16.63 17.14c.6 11.74 4.35 18.96 16.52 18.96a25.95 25.95 0 0010.62-1.92v1.4c-2.7 4.1-9.3 8.35-18.79 8.35-16.1 0-24.36-9.75-24.36-25.32 0-15.22 9.05-24.7 23.66-24.7s20.87 7.82 20.87 22v1.23h-28.52zm0-1.75l13.5-.6c0-14.97-2-19.22-6.18-19.22-4.54-.07-7.32 6.08-7.32 19.82zM85.47 68.86l6.46-3.36V14.7h-4.9L75.1 30.54h-1.35l.77-17.65h51.75l.75 17.64h-1.42L113.9 14.7h-5v50.69l6.5 3.42v1.72H85.47v-1.67zm47.45-2.25V10.35l-5.01-2.03V7.27L146 4h1.92v26.63l.51-.43A24.22 24.22 0 01164 24.42c7.93 0 11.45 4.48 11.45 12.84v29.35l4.24 2.32v1.73H156v-1.73l4.3-2.32V37.19c0-4.6-2-6.45-5.77-6.45a9.92 9.92 0 00-6.35 2.07v33.88l4.2 2.38v1.59h-23.82v-1.6l4.37-2.45zm61.82-17.28c.49 9.3 4.66 16.5 14.53 16.5 4.77 0 8.16-2.22 11.37-3.9v1.82a22.22 22.22 0 01-17.46 8.13c-15.31 0-23.14-8.5-23.14-23.25 0-14.41 8.56-23.38 22.4-23.38 13 0 19.75 6.5 19.75 23.63v.45h-27.45zm-.26-2.15l13.48-.82c0-11.52-1.99-19.17-5.92-19.17-4.2 0-7.54 8.88-7.54 20h-.02zM0 93.08c0-24.5 16.22-33.23 34.28-33.23a55.07 55.07 0 0118.95 2.87l.35 17.1h-1.71L41.27 63.3a15.55 15.55 0 00-6.72-1.08c-9.6 0-14.5 11.1-14.28 29.3.19 21.77 3.97 31.64 12.78 31.64 1.8.06 3.6-.25 5.28-.89v-23.3l-5.81-3.33V93.7h28.03v2.08l-5.73 3.17v23.03a62.88 62.88 0 01-21.24 3.62C13.05 125.6 0 116.08 0 93.08zm60.31-11.44v-1.46l18.92-3.33 2.03.15v37.33c0 4.5 2.16 5.87 5.8 5.87a7.72 7.72 0 006.12-2.9V83.9l-5.2-2.25v-1.47l18.93-3.33 1.9.17v42.7l5.1 2.15v1.36l-18.68 2.27-1.9-.17v-5.6h-.53a20.95 20.95 0 01-14.16 5.95c-9.06 0-13.22-5.35-13.22-13.48V83.9l-5.11-2.26zM181.2 76.8l1.59.18v13.79h.42c2.02-10.11 6.48-13.89 11.92-13.89a6.02 6.02 0 012.34.35V91.3a16.12 16.12 0 00-3.9-.35 23.81 23.81 0 00-10.26 2.05v27.32l4.3 2.38v1.77h-24.57v-1.75l4.41-2.4V83.13l-5.17-1.59v-1.27l18.92-3.46z" }),
          /* @__PURE__ */ jsx("path", { d: "M228.67 77.97V63.44l-5.17-1.81v-1.16l19.04-3.51 1.81.25v62.48l5.27 1.92v1.6l-18.82 2.53-1.46-.17v-5.16h-.43a16.81 16.81 0 01-12.52 5.27c-10.29 0-17.8-7.94-17.8-23.92 0-16.93 8.73-25.25 21.94-25.25a18.71 18.71 0 018.1 1.46h.04zm-.03 40.01V80.64a6.97 6.97 0 00-5.22-1.59c-5.11.18-8.26 7.94-8.26 21.62 0 12.34 2.27 19.25 9.07 19.04a6.68 6.68 0 004.4-1.59v-.14zm42-41.2l1.58.18v43.35l4.32 2.38v1.77h-24.48v-1.75l4.4-2.4v-36.5l-5.25-2.05v-1.44l19.42-3.54zm1.72-11.71a8.22 8.22 0 01-2.52 5.75 8.21 8.21 0 01-5.86 2.28 8.08 8.08 0 01-7.46-4.99 8.08 8.08 0 017.46-11.17 8.29 8.29 0 018.38 8.13zm59.34 55.26V83.35l-5.18-1.8V79.8l18.82-3.51 1.9.17V82h.53a24.84 24.84 0 0116.06-5.95c8.2 0 11.82 3.88 11.82 12.52v31.74l4.4 2.46v1.76H355.5v-1.75l4.41-2.4V89.42c0-4.76-2.08-6.65-5.95-6.65a10.3 10.3 0 00-6.47 2.07v35.48l4.31 2.4v1.76h-24.57v-1.74l4.46-2.4zm-27.26-23.22v-6.19c0-9.33-2.03-12.38-7.81-12.38a15.13 15.13 0 00-1.95.18L284.4 92.64h-1.45V79.8a55.28 55.28 0 0117.22-2.96c12.56 0 19.86 3.47 19.86 14V121l4.5 1.19v1.19a19.29 19.29 0 01-9.26 2.12c-6.2 0-9.16-2.03-10.53-5.42h-.42c-2.64 3.57-6.35 5.6-12.22 5.6-7.46 0-12.56-4.67-12.56-12.7 0-7.8 4.76-12.04 14.68-13.92l10.2-1.95zm0 20.87V99.33l-3.18.26c-4.92.43-6.7 3.57-6.7 10.52 0 7.55 2.47 9.52 5.94 9.52a4.56 4.56 0 003.9-1.59l.04-.06zm-164.1-20.87v-6.19c0-9.33-2.02-12.38-7.8-12.38-.66.02-1.3.08-1.95.18l-10.27 13.92h-1.45V79.8a55.31 55.31 0 0117.24-2.96c12.55 0 19.85 3.47 19.85 14V121l4.5 1.19v1.19a19.29 19.29 0 01-9.26 2.12c-6.19 0-9.15-2.03-10.52-5.42h-.43c-2.63 3.57-6.35 5.6-12.22 5.6-7.46 0-12.55-4.67-12.55-12.7 0-7.8 4.76-12.04 14.68-13.92l10.19-1.95zm0 20.87V99.33l-3.17.26c-4.92.43-6.7 3.57-6.7 10.52 0 7.55 2.47 9.52 5.94 9.52a4.56 4.56 0 003.9-1.59" }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("path", { d: "M0 0h380v200H0z" }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        css: css`
					${visuallyHidden$4}
				`,
        children: "The Guardian Live"
      }
    )
  ] });
};

const SvgRoundel = ({
  textColor = "#fff",
  backgroundColor: bgColor = "#000",
  width
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 42 42",
        xmlns: "http://www.w3.org/2000/svg",
        width,
        focusable: false,
        "aria-hidden": true,
        children: [
          /* @__PURE__ */ jsx("circle", { cx: "21", cy: "21", r: "21", fill: bgColor }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M33.7 22.15l-2.16.96v9.94a17.44 17.44 0 01-7.27 3.58V22.9l-2.3-.81v-.6H33.7v.66z\n				M22.95 5.6h-.06c-4.86 0-7.64 6.55-7.5 15.38-.14 8.87 2.64 15.43 7.5 15.43h.06v.68c-7.28.48-17.23-4.94-17.09-16.07-.14-11.17 9.8-16.6 17.1-16.1v.68zm1.47-.72c2.85.44 6.1 2.31 7.32 3.64v6.13h-.7l-6.62-9.09v-.68z",
              fill: textColor
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        css: css`
					${visuallyHidden$4}
				`,
        children: "The Guardian"
      }
    )
  ] });
};

const SvgRoundelBrand = (args) => {
  return /* @__PURE__ */ jsx(SvgRoundel, { textColor: "white", backgroundColor: brand[400], ...args });
};
SvgRoundelBrand.args = {
  width: 300
};

const SvgRoundelBrandInverse = (args) => {
  return /* @__PURE__ */ jsx(SvgRoundel, { textColor: brand[400], backgroundColor: "white", ...args });
};

const SvgRoundelDefault = (args) => {
  return /* @__PURE__ */ jsx(SvgRoundel, { textColor: "white", backgroundColor: neutral[7], ...args });
};

const SvgRoundelInverse = (args) => {
  return /* @__PURE__ */ jsx(SvgRoundel, { textColor: neutral[7], backgroundColor: "white", ...args });
};

const textSize = {
  medium: textSans.medium({ fontWeight: "bold" }),
  small: textSans.xsmall({ fontWeight: "bold" })
};
const legend = css`
	${resets.legend};
`;
const labelText$2 = (label, size) => css`
	${textSize[size]};
	color: ${label.textLabel};
`;
const optionalText = (label) => css`
	${textSans.xsmall()};
	color: ${label.textOptional};
	font-style: italic;
`;
const supportingText$2 = (label) => css`
	${textSans.xsmall()};
	color: ${label.textSupporting};
	margin: 2px 0 0;
`;

const mergedTheme$1 = (providerTheme, themeProp) => mergeThemes(
  themeLabel,
  themeProp,
  providerTheme
);

const visuallyHidden$1 = css`
	${visuallyHidden$4}
`;
const SupportingText = ({
  hideLabel,
  children,
  theme
}) => {
  return /* @__PURE__ */ jsx(
    "p",
    {
      css: (providerTheme) => [
        supportingText$2(mergedTheme$1(providerTheme.label, theme)),
        hideLabel ? visuallyHidden$1 : ""
      ],
      children
    }
  );
};

const visuallyHidden = css`
	${visuallyHidden$4}
`;
const Text = ({
  text,
  optional,
  hideLabel,
  size = "medium",
  theme
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    css: (providerTheme) => [
      labelText$2(mergedTheme$1(providerTheme.label, theme), size),
      hideLabel ? visuallyHidden : ""
    ],
    children: [
      text,
      " ",
      optional ? /* @__PURE__ */ jsx(
        "span",
        {
          css: (providerTheme) => optionalText(mergedTheme$1(providerTheme.label, theme)),
          children: "Optional"
        }
      ) : ""
    ]
  }
);

const Legend = ({
  text,
  supporting,
  optional = false,
  hideLabel = false,
  cssOverrides,
  theme,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("legend", { css: [legend, cssOverrides], ...props, children: /* @__PURE__ */ jsx(
      Text,
      {
        text,
        optional,
        hideLabel,
        theme
      }
    ) }),
    supporting ? /* @__PURE__ */ jsx(SupportingText, { hideLabel, theme, children: supporting }) : ""
  ] });
};

const Svg$1K = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91.66 8.636Zm2.068 3.637c0-.75-.614-1.364-1.364-1.364-.75 0-1.364.614-1.364 1.364 0 .75.614 1.363 1.364 1.363.75 0 1.364-.613 1.364-1.363Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgAlertRound = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1K, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Warning"
    }
  ) : ""
] });

const mergedTheme = (providerTheme, themeProp) => mergeThemes(
  themeUserFeedback,
  themeProp,
  providerTheme
);

const inlineMessage = css`
	display: flex;
	align-items: flex-start;

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -4px);
	}
`;
const inlineMessageSmall = css`
	${textSans.xsmall()};
	svg {
		width: ${remWidth.iconSmall}rem;
		height: ${remHeight.iconSmall}rem;
	}
`;
const inlineMessageMedium = css`
	${textSans.medium()};
	svg {
		width: ${remWidth.iconMedium}rem;
		height: ${remHeight.iconMedium}rem;
	}
`;
const inlineMessageSize = {
  small: inlineMessageSmall,
  medium: inlineMessageMedium
};
const inlineError = (userFeedback, size) => css`
	${inlineMessage};
	${inlineMessageSize[size]};
	color: ${userFeedback.textError};
`;
const inlineSuccess = (userFeedback, size) => css`
	${inlineMessage};
	${inlineMessageSize[size]};
	color: ${userFeedback.textSuccess};
`;

const InlineError = ({
  children,
  size = "medium",
  cssOverrides,
  theme,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      css: (providerTheme) => [
        inlineError(mergedTheme(providerTheme.userFeedback, theme), size),
        cssOverrides
      ],
      role: "alert",
      ...props,
      children: [
        /* @__PURE__ */ jsx(SvgAlertRound, {}),
        children
      ]
    }
  );
};

const fieldset$2 = css`
	${resets.fieldset};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
const checkboxContainer = (checkbox2, error = false) => css`
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;
	cursor: pointer;

	&:hover {
		input {
			border: ${error ? `2px solid ${checkbox2.borderError}` : `2px solid ${checkbox2.borderHover}`};
			/*
				In the indeterminate state, we increase the border width by 1px on
				hover. This causes the position of the indeterminate dash to shift as it
				is absolutely positioned. This negative margin accounts for the extra
				border width and prevents the shift. We need to locate this css here as
				the hover sits on the container, rather than the input element.
			*/
			&:indeterminate {
				&:after {
					margin: -1px;
				}
			}
		}
	}
	&:active {
		input {
			border-color: ${checkbox2.borderHover};
		}
	}
`;
const label$1 = css`
	cursor: pointer;
`;
const checkboxContainerWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;
const checkbox = (checkbox2, error = false) => css`
	flex: 0 0 auto;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 1px solid currentColor;
	background: ${checkbox2.fillUnselected};
	border-radius: 4px;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;
	color: ${checkbox2.borderUnselected};

	&:focus {
		${focusHalo};
	}

	@supports (${appearance}) {
		appearance: none;
		&:checked {
			border: ${error ? `2px solid ${checkbox2.borderError}` : `2px solid ${checkbox2.borderSelected}`};
			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}

		&:indeterminate {
			&:after {
				${textSans.xlarge()};
				color: ${checkbox2.textIndeterminate};
				content: '-';
				position: absolute;
				top: -7px;
				left: 6px;
				z-index: 5;
			}
		}
	}
`;
const labelText$1 = (checkbox2) => css`
	${textSans.medium()};
	color: ${checkbox2.textLabel};
	width: 100%;
`;
const labelTextWithSupportingText$1 = css`
	${textSans.medium()};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`;
const supportingText$1 = (checkbox2) => css`
	${textSans.small()};
	color: ${checkbox2.textSupporting};
`;
const tick$1 = (checkbox2) => css`
	@supports (
		(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)
	) {
		/* overall positional properties */
		position: absolute;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		/*
		these properties are very sensitive and are overridden
		if the checkbox has a label or supporting text
	*/
		top: 14px;
		left: 9px;
		/*
			this prevents simulated click events to the checkbox, eg from Selenium tests
			from being intercepted by the tick
		*/
		pointer-events: none;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${checkbox2.fillSelected};
			transition: all ${transitions.short} ease-in-out;
			content: '';
		}

		/* the short side */
		&:before {
			height: 2px;
			bottom: 0;
			left: 0;
			right: 100%;
			transition-delay: 0.05s;
		}

		/* the long side */
		&:after {
			bottom: 0;
			right: 0;
			top: 100%;
			width: 2px;
			transition-delay: 0.1s;
		}
	}
`;
const tickWithLabelText = css`
	@supports (${appearance}) {
		top: 15px;
		left: 9px;
	}
`;
const tickWithSupportingText = css`
	@supports (${appearance}) {
		top: 5px;
	}
`;
const errorCheckbox = (checkbox2) => css`
	border: 2px solid ${checkbox2.borderError};
	border-radius: 4px;
	&:not(:checked):hover,
	&:active {
		border: 2px solid ${checkbox2.borderHover};
	}
`;

const CheckboxGroup = ({
  id,
  name,
  label,
  hideLabel,
  optional = false,
  supporting,
  error,
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  const groupId = id ?? generateSourceId();
  const legend = label ? /* @__PURE__ */ jsx(
    Legend,
    {
      text: label,
      supporting,
      hideLabel,
      optional,
      theme
    }
  ) : "";
  const message = typeof error === "string" ? /* @__PURE__ */ jsx(InlineError, { theme, id: descriptionId(groupId), children: error }) : "";
  return /* @__PURE__ */ jsxs("fieldset", { css: [fieldset$2, cssOverrides], id: groupId, ...props, children: [
    legend,
    message,
    Children.map(children, (child) => {
      return cloneElement(
        child,
        Object.assign(
          error ? {
            error: true,
            "aria-describedby": descriptionId(groupId)
          } : {},
          {
            name
          }
        )
      );
    })
  ] });
};

const Checkbox = ({
  id,
  label: labelContent,
  checked,
  supporting,
  defaultChecked,
  error,
  indeterminate,
  cssOverrides,
  theme,
  ...props
}) => {
  const checkboxId = id ?? generateSourceId();
  const isChecked = () => {
    if (checked != null) {
      return checked;
    }
    return !!defaultChecked;
  };
  const setIndeterminate = (el) => {
    if (el) {
      el.indeterminate = !!indeterminate;
    }
  };
  const mergedTheme = (providerTheme) => mergeThemes(
    themeCheckbox,
    theme,
    providerTheme,
    transformProviderTheme$3
  );
  const SupportingText = ({
    children
  }) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        css: (providerTheme) => supportingText$1(mergedTheme(providerTheme.checkbox)),
        children
      }
    );
  };
  const LabelText = ({
    hasSupportingText,
    children
  }) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        css: (providerTheme) => [
          labelText$1(mergedTheme(providerTheme.checkbox)),
          hasSupportingText ? labelTextWithSupportingText$1 : ""
        ],
        children
      }
    );
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      css: (providerTheme) => [
        checkboxContainer(mergedTheme(providerTheme.checkbox), error),
        supporting ? checkboxContainerWithSupportingText : ""
      ],
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: checkboxId,
            type: "checkbox",
            css: (providerTheme) => [
              checkbox(mergedTheme(providerTheme.checkbox), error),
              error ? errorCheckbox(mergedTheme(providerTheme.checkbox)) : "",
              cssOverrides
            ],
            "aria-invalid": !!error,
            ref: setIndeterminate,
            defaultChecked: defaultChecked ?? void 0,
            checked: checked != null ? isChecked() : void 0,
            ...props
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            css: (providerTheme) => [
              tick$1(mergedTheme(providerTheme.checkbox)),
              labelContent ?? supporting ? tickWithLabelText : "",
              supporting ? tickWithSupportingText : ""
            ]
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: checkboxId, css: label$1, children: supporting ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(LabelText, { hasSupportingText: true, children: labelContent }),
          /* @__PURE__ */ jsx(SupportingText, { children: supporting })
        ] }) : /* @__PURE__ */ jsx(LabelText, { children: labelContent }) })
      ]
    }
  );
};

const fieldset$1 = css`
	${resets.fieldset};
`;
const flexContainer = css`
	width: 100%;

	${from.mobileLandscape} {
		display: flex;
		justify-content: flex-start;
	}
`;
const containerTopMargin = css`
	margin-top: ${space[2]}px;
`;
const gridContainer = css`
	width: 100%;
	${from.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${space[2]}px;
			column-gap: ${space[2]}px;
			& > label {
				margin: 0;
			}
		}
	}
`;
const gridColumnsStyle$1 = (columns) => css`
	${from.mobileLandscape} {
		grid-template-columns: repeat(${columns}, 1fr);
	}
`;
const gridColumns = {
  2: gridColumnsStyle$1(2),
  3: gridColumnsStyle$1(3),
  4: gridColumnsStyle$1(4),
  5: gridColumnsStyle$1(5)
};
const input = (theme) => css`
	${visuallyHidden$4};

	&:focus + label {
		html:not(.src-focus-disabled) & {
			outline: 3px solid ${palette.focus[400]};
		}
	}

	&:checked + label {
		box-shadow: inset 0 0 0 2px ${theme.borderSelected};
		background-color: ${theme.backgroundSelected};

		& > * {
			color: ${theme.textSelected};

			/* last child is the tick */
			&:last-child {
				&:before {
					right: 0;
				}
				&:after {
					top: 0;
				}
			}
		}
	}
`;
const tickAnimation = css`
	@keyframes labelFadeOutIn {
		0% {
			opacity: 1;
		}
		1%,
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes tickFadeInOut {
		0% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		70% {
			opacity: 0;
		}
	}

	&:checked + label {
		& > * {
			animation-duration: 1s;
			animation-name: labelFadeOutIn;

			/* last child is the tick */
			&:last-child {
				animation-name: tickFadeInOut;
			}
		}
	}
`;
const choiceCard = (theme) => css`
	flex: 1;
	display: flex;
	justify-content: center;
	min-height: ${height.inputMedium}px;
	margin: 0 0 ${space[2]}px 0;
	box-shadow: inset 0 0 0 1px ${theme.borderUnselected};
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	background-color: ${theme.backgroundUnselected};
	color: ${theme.textUnselected};

	${from.mobileLandscape} {
		margin: 0 ${space[2]}px 0 0;
		&:last-child {
			margin: 0;
		}
	}

	&:hover {
		box-shadow: inset 0 0 0 2px ${theme.borderHover};
		background-color: ${theme.backgroundHover};
		color: ${theme.textHover};
	}
`;
const contentWrapper = css`
	flex: 0 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	${from.mobileLandscape} {
		flex-direction: column;
		padding: ${space[2]}px ${space[6]}px;
	}

	& > * {
		${textSans.medium({ fontWeight: "bold" })};
		text-align: center;
	}

	& svg {
		width: ${width.iconMedium}px;
		max-height: ${height.iconMedium}px;
		fill: currentColor;
		margin-right: ${space[1]}px;

		${from.mobileLandscape} {
			margin-bottom: -${space[1]}px;
			margin-right: 0;
		}
	}
`;
const contentWrapperLabelOnly = css`
	width: 100%;
	${from.mobileLandscape} {
		& > div {
			width: 100%;
		}
	}
`;
const tick = (theme) => css`
	/* overall positional properties */
	position: absolute;
	top: 50%;
	left: 50%;
	width: 7px;
	height: 20px;
	transform: rotate(45deg) translateX(-100%) translateY(-35%);
	opacity: 0;

	/* the checkmark ✓ */
	&:after,
	&:before {
		position: absolute;
		display: block;
		background-color: ${theme.backgroundTick};
		transition: all ${transitions.short} ease-in-out;
		content: '';
	}

	/* the short side */
	&:before {
		height: 2px;
		bottom: 0;
		left: 0;
		right: 100%;
		transition-delay: 0.05s;
	}

	/* the long side */
	&:after {
		bottom: 0;
		right: 0;
		top: 100%;
		width: 2px;
		transition-delay: 0.1s;
	}
`;
const errorChoiceCard = (theme) => css`
	box-shadow: inset 0 0 0 2px ${theme.borderError};

	& > * {
		color: ${theme.textError};
	}
`;

const ChoiceCardGroup = ({
  id,
  name,
  label,
  hideLabel,
  supporting,
  multi,
  error,
  columns,
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  const groupId = id ?? generateSourceId();
  const showLabel = !!(label && !hideLabel);
  const topMargin = (showLabel || supporting) ?? error ? containerTopMargin : "";
  return /* @__PURE__ */ jsxs("fieldset", { css: [fieldset$1, cssOverrides], id: groupId, ...props, children: [
    label ? /* @__PURE__ */ jsx(
      Legend,
      {
        text: label,
        supporting,
        hideLabel,
        theme
      }
    ) : "",
    typeof error === "string" && /* @__PURE__ */ jsx(InlineError, { id: descriptionId(groupId), theme, children: error }),
    /* @__PURE__ */ jsx(
      "div",
      {
        css: [
          columns ? [gridContainer, gridColumns[columns]] : flexContainer,
          topMargin
        ],
        children: Children.map(children, (child) => {
          return cloneElement(
            child,
            Object.assign(
              {
                type: multi ? "checkbox" : "radio"
              },
              error ? {
                error: true,
                "aria-describedby": descriptionId(groupId)
              } : {},
              {
                name
              }
            )
          );
        })
      }
    )
  ] });
};

const ChoiceCard = ({
  id,
  label: labelContent,
  value,
  icon: iconSvg,
  checked,
  defaultChecked,
  cssOverrides,
  error,
  onChange,
  theme = {},
  type = "radio",
  ...props
}) => {
  const isChecked = () => {
    if (checked != null) {
      return checked;
    }
    return !!defaultChecked;
  };
  const mergedTheme = (providerTheme) => mergeThemes(
    themeChoiceCard,
    theme,
    providerTheme,
    transformProviderTheme$2
  );
  const [userChanged, setUserChanged] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        css: (providerTheme) => [
          input(mergedTheme(providerTheme.choiceCard)),
          userChanged ? tickAnimation : "",
          cssOverrides
        ],
        id,
        value,
        "aria-invalid": !!error,
        defaultChecked: defaultChecked ?? void 0,
        checked: checked != null ? isChecked() : void 0,
        onChange: (event) => {
          if (onChange) {
            onChange(event);
          }
          setUserChanged(true);
        },
        type,
        ...props
      }
    ),
    /* @__PURE__ */ jsxs(
      "label",
      {
        css: (providerTheme) => [
          choiceCard(mergedTheme(providerTheme.choiceCard)),
          error ? errorChoiceCard(mergedTheme(providerTheme.choiceCard)) : ""
        ],
        htmlFor: id,
        children: [
          /* @__PURE__ */ jsxs("div", { css: [contentWrapper, !iconSvg ? contentWrapperLabelOnly : ""], children: [
            iconSvg ? iconSvg : "",
            /* @__PURE__ */ jsx("div", { children: labelContent })
          ] }),
          /* @__PURE__ */ jsx(
            "span",
            {
              css: (providerTheme) => [
                tick(mergedTheme(providerTheme.choiceCard))
              ]
            }
          )
        ]
      }
    )
  ] });
};

const Svg$1J = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 16.768 12.502 6.27h-1.004L1 16.768l.98.954L12 9.284l10.02 8.438.98-.954Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronUpSingle = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1J, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Collapse to show less"
    }
  ) : ""
] });

const footerThemeBrand = {
  footer: {
    border: palette.brand[600],
    background: palette.brand[400],
    text: palette.neutral[100],
    anchor: palette.neutral[100],
    anchorHover: palette.brandAlt[400]
  }
};

const footer = (footer2 = footerThemeBrand.footer) => css`
	color: ${footer2.text};
	background-color: ${footer2.background};
	padding: 0 ${space[3]}px ${space[3]}px ${space[3]}px;

	${from.desktop} {
		padding-bottom: ${space[6]}px;
	}
`;
const linksWrapper = css`
	display: flex;
	align-items: center;
`;
const linksWrapperSpace = css`
	margin-bottom: ${space[6]}px;
	${from.desktop} {
		margin-bottom: ${space[1]}px;
	}
`;
const backToTopSpace = (initial) => initial - height.ctaMedium / 2;
const linksWrapperSpaceWithBackToTop = css`
	margin-bottom: ${backToTopSpace(space[6])}px;
	${from.desktop} {
		margin-bottom: ${backToTopSpace(space[1])}px;
	}
`;
const links = (footer2 = footerThemeBrand.footer) => css`
	border-style: solid;
	border-color: ${footer2.border};
	border-width: 0 0 1px 0;
	flex: 1 1 auto;

	/* TODO: viewport-specific layout for when footer supports content */
	/* border-width: 1px 0 1px 0;

	${from.desktop} {
		border-width: 1px;
	} */
`;
const copyright = css`
	${textSans.xxsmall()};
	display: block;
`;
const copyrightExtraPadding = css`
	${between.mobile.and.tablet} {
		padding-right: ${height.ctaMedium}px;
	}
`;
const backToTop = (footer2 = footerThemeBrand.footer) => css`
	display: flex;
	align-items: center;
	height: ${height.ctaMedium}px;
	padding-left: ${space[2]}px;

	${textSans.small({ fontWeight: "bold" })};
	color: ${footer2.anchor};
	background-color: ${footer2.background};
	text-decoration: none;
	white-space: nowrap;

	& :hover {
		color: ${footer2.anchorHover};
	}

	& :focus {
		${focusHalo};
	}
`;
const backToTopIcon = (footer2 = footerThemeBrand.footer) => css`
	height: ${height.ctaMedium}px;
	width: ${width.ctaMedium}px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${height.ctaMedium}px;
	background: currentColor;
	margin-left: ${space[2]}px;

	svg {
		height: ${height.iconSmall}px;
		width: ${width.iconSmall}px;
		fill: ${footer2.background};
	}
`;

const BackToTop = /* @__PURE__ */ jsxs("a", { href: "#top", css: (theme) => backToTop(theme.footer), children: [
  "Back to top",
  /* @__PURE__ */ jsx("div", { css: (theme) => backToTopIcon(theme.footer), children: /* @__PURE__ */ jsx(SvgChevronUpSingle, {}) })
] });

const Footer = ({
  showBackToTop,
  children,
  cssOverrides,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      css: (theme) => [footer(theme.footer), cssOverrides],
      ...props,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            css: [
              linksWrapper,
              showBackToTop ? linksWrapperSpaceWithBackToTop : linksWrapperSpace
            ],
            children: [
              /* @__PURE__ */ jsx("div", { css: (theme) => links(theme.footer), children }),
              showBackToTop ? BackToTop : ""
            ]
          }
        ),
        /* @__PURE__ */ jsx("small", { css: [copyright, showBackToTop ? copyrightExtraPadding : ""], children: "\xA9 2021 Guardian News and Media Limited or its affiliated companies. All rights reserved." })
      ]
    }
  );
};

const Svg$1I = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.41 2 1 19.057l.668.943h20.664l.668-.943L12.59 2h-1.18Zm-.063 12.178h1.306l.621-6.917-.856-.728h-.835l-.857.728.62 6.917ZM12 15.452c.7 0 1.274.573 1.274 1.274 0 .7-.573 1.274-1.274 1.274-.7 0-1.274-.573-1.274-1.274 0-.7.573-1.274 1.274-1.274Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgAlertTriangle = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1I, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Warning"
    }
  ) : ""
] });

const Svg$1H = ({ size }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12.379 5.615c.903 0 2.034-.61 2.708-1.424.61-.737 1.055-1.767 1.055-2.797 0-.14-.012-.28-.038-.394-1.004.038-2.212.674-2.937 1.526-.572.648-1.093 1.665-1.093 2.708 0 .153.025.305.038.356.063.013.165.025.267.025ZM9.2 21c1.234 0 1.78-.826 3.319-.826 1.564 0 1.907.8 3.28.8 1.348 0 2.25-1.245 3.102-2.466.954-1.399 1.348-2.772 1.374-2.835-.09-.026-2.67-1.081-2.67-4.044 0-2.568 2.034-3.725 2.148-3.814-1.347-1.933-3.395-1.983-3.954-1.983-1.513 0-2.746.915-3.522.915-.839 0-1.945-.865-3.255-.865C6.53 5.882 4 7.942 4 11.832c0 2.417.94 4.972 2.098 6.625C7.09 19.856 7.954 21 9.2 21Z",
        fill: "black"
      }
    )
  }
);
const SvgAppleBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1H, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Apple logo"
    }
  ) : ""
] });

const Svg$1G = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.045 1v18.274l-8.576-7.167-.931.932L11.523 23h.955l9.985-9.96-.932-.932-8.575 7.166V1h-1.911Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowDownStraight = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1G, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Arrow down"
    }
  ) : ""
] });

const Svg$1F = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 11.044H4.726l7.167-8.575-.932-.932L1 11.522v.956l9.96 9.984.932-.931-7.166-8.575H23v-1.912Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowLeftStraight = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1F, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Arrow left"
    }
  ) : ""
] });

const Svg$1E = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1v1.912Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowRightStraight = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1E, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Arrow right"
    }
  ) : ""
] });

const Svg$1D = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.956 23V4.726l8.575 7.167.932-.932L12.478 1h-.956l-9.984 9.96.931.932 8.576-7.166V23h1.91Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowUpStraight = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1D, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Arrow up"
    }
  ) : ""
] });

const Svg$1C = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM21.3 12c0 2.7-.925 5.175-2.5 7.175l.55.525A9.906 9.906 0 0 0 23 12c0-3.125-1.425-5.9-3.65-7.725l-.55.525c1.575 2 2.5 4.475 2.5 7.2Zm-5.2 0c0 1.575-.425 2.975-1.275 4.2l.65.65C16.75 15.575 17.5 13.9 17.5 12c0-1.925-.75-3.6-2.025-4.875l-.65.65C15.675 9 16.1 10.425 16.1 12Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgAudio = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1C, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Audio"
    }
  ) : ""
] });

const Svg$1B = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 6.5v10.975l-1.475 1.55H2.5L1 17.55V6.5L2.5 5h4.975l2.5-2.5H14L16.5 5h5.025L23 6.5Zm-11 9.75c2.5 0 4.525-2 4.525-4.475 0-2.5-2.025-4.5-4.525-4.5-2.5 0-4.5 2-4.5 4.5 0 2.475 2 4.475 4.5 4.475Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCamera = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1B, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Camera"
    }
  ) : ""
] });

const Svg$1A = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.011 11.883 2 12.896l5.057 7.08h.48L22 5.005l-1.011-.986L7.537 16.207l-4.526-4.324Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCheckmark = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1A, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Checkmark"
    }
  ) : ""
] });

const Svg$1z = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m11.258 2 .953.977L4.842 12l7.369 9.023-.953.977-9.498-9.499V11.5L11.258 2Zm10.026 0 .952.977L14.867 12l7.369 9.023-.952.977-9.5-9.499V11.5L21.285 2Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronLeftDouble = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1z, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Double chevron left"
    }
  ) : ""
] });

const Svg$1y = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.721 1 6.25 11.471v1.058L16.721 23l.982-.956L9.321 12l8.382-10.043L16.721 1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronLeftSingle = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1y, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Chevron left"
    }
  ) : ""
] });

const Svg$1x = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m2.712 2 9.499 9.499V12.5L2.712 22l-.952-.977L9.128 12 1.76 2.977 2.712 2Zm10.025 0 9.499 9.499V12.5L12.737 22l-.952-.977L19.153 12l-7.368-9.023.952-.977Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronRightDouble = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1x, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Double chevron right"
    }
  ) : ""
] });

const Svg$1w = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m7.232 1-.982.957L14.632 12 6.25 22.044l.982.956 10.471-10.471V11.47L7.232 1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronRightSingle = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1w, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Chevron right"
    }
  ) : ""
] });

const Svg$1v = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-8.909-.318-.659-7.864h-.886l-.682 8.523 1.159 1.159 6.34-.59V12l-5.272-.318Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgClock = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1v, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Clock"
    }
  ) : ""
] });

const Svg$1u = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m23 6.57-1.833-1.81H2.833L1 6.57v1.664h22V6.569Zm0 3.69H1v7.164l1.803 1.81h18.364L23 17.424V10.26Zm-17.368 5.5h2.29v-1.158h-2.29v1.158Zm5.772 0h-2.29v-1.158h2.29v1.158Zm1.192 0h2.29v-1.158h-2.29v1.158Zm5.772 0h-2.29v-1.158h2.29v1.158Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCreditCard = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1u, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Credit card"
    }
  ) : ""
] });

const Svg$1t = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291 8.722-7.928Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCross = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1t, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Close"
    }
  ) : ""
] });

const Svg$1s = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.29 14.786h1.903s1.885-.038 1.866 1.675c-.02 1.275-1.827 1.466-1.827 1.466H2.29v-3.14Zm5.694 6.148c.053.25.233.524.834.552.8.019 1.257-.286 1.257-.286v.59S9.199 22 8.78 22c-.437 0-1.732-.095-1.732-1.294 0-.97 1.066-1.275 1.675-1.275 1.066.038 1.58.418 1.56 1.503 0 .016-1.753.004-2.3 0Zm.002-.476h1.46s0-.552-.704-.552c-.53 0-.703.286-.756.552Zm4.62-.596c.211-.23.566-.413 1.16-.413 1.181 0 1.371.99 1.352 1.256-.018.267-.114 1.276-1.484 1.276-.518 0-.834-.177-1.028-.396v.32h-.933v-3.427h.933v1.384Zm.8 1.586c.551-.02.799-.495.799-.723 0-.229-.134-.705-.838-.705-.546 0-.713.413-.761.615v.248c.048.206.215.565.8.565Zm8.05-.095.02.533s-.438.095-.724.095c-.285 0-1.028-.171-1.028-.895v-1.104h-.78v-.494h.78v-.59h.952v.59h.78v.494h-.78v.952s0 .476.38.476c.381 0 .4-.057.4-.057ZM18.563 15.3h1.104v2.646h.933V15.3h1.123v-.552h-3.16v.552Zm-.38.133.114-.552s-.476-.209-1.313-.209c-.819 0-2.132.457-2.132 1.694 0 1.218 1.39 1.637 2.246 1.637.856 0 1.142-.133 1.142-.133l-.095-.61s-.381.115-1.028.115c-.628-.02-1.275-.514-1.275-1.066.019-.495.59-1.047 1.332-1.047.57 0 1.009.171 1.009.171Zm-8.413-.666s1.56-.076 1.56.838c0 .78-.894.837-.894.837s.248.038.362.21c.095.152.723 1.294.723 1.294h-.952s-.152-.19-.228-.324a5.25 5.25 0 0 0-.229-.419s-.133-.475-.59-.475l-.342-.013v1.23h-.914v-3.178H9.77Zm-.59 1.428h.495s.685-.038.723-.457c.02-.4-.666-.457-.666-.457H9.18v.914Zm3.825.495h1.523v-.59h-1.523v-.724h1.657v-.609h-2.589v3.179h2.608v-.571h-1.675v-.685Zm3.712 2.436h.933v-.648h-.933v.648Zm0 2.779h.933v-2.417h-.933v2.417Zm-10.163-3.96h.913v-3.178h-.913v3.179Zm-4.264.8h1.903s1.885-.038 1.866 1.675c-.02 1.275-1.827 1.466-1.827 1.466H2.29v-3.14Zm.933 2.55h.609s1.256-.076 1.256-1.046c0-.97-1.332-1.066-1.332-1.066h-.533v2.113Zm0-3.958h.609s1.256-.096 1.256-1.047c0-.99-1.332-1.066-1.332-1.066h-.533v2.113Zm8.732-10.951v6.368s-3.693-.666-3.693-3.198c0-2.018 2.734-2.908 3.693-3.17Zm0-.12c-2.22-.16-7.252.88-7.252 3.157 0 1.484 2.665 3.654 7.004 3.711.171 0 5.1-.19 5.025-5.481-.064-4.444-3.39-5.223-4.454-5.358v-.271c4.24.27 7.575 2.82 7.575 5.914 0 3.274-3.73 5.938-8.317 5.938s-8.298-2.664-8.298-5.938C3.238 4.665 6.949 2 11.536 2c.14 0 .28.003.419.008v4.259Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgDirectDebit = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1s, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Direct Debit logo"
    }
  ) : ""
] });

const Svg$1r = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: void 0,
    height: size ? iconSize[size] : void 0,
    viewBox: "-1 2 50 20",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.64 7.676h2.386s2.362-.048 2.338 2.1c-.023 1.598-2.29 1.836-2.29 1.836H22.64V7.676Zm7.137 7.707c.067.312.293.656 1.047.691 1.002.024 1.574-.358 1.574-.358v.74s-1.097.263-1.622.263c-.549 0-2.171-.12-2.171-1.623 0-1.216 1.336-1.598 2.1-1.598 1.335.047 1.98.525 1.956 1.884 0 .02-2.199.005-2.884 0Zm.003-.597h1.831s0-.692-.883-.692c-.664 0-.881.358-.948.692Zm5.791-.747c.265-.288.71-.518 1.456-.518 1.48 0 1.718 1.24 1.694 1.575-.024.334-.143 1.598-1.86 1.598-.65 0-1.046-.221-1.29-.496v.4h-1.168v-4.294h1.169v1.735Zm1.003 1.987c.692-.024 1.002-.62 1.002-.906 0-.286-.167-.883-1.05-.883-.685 0-.894.518-.955.77v.312c.06.257.27.707 1.003.707Zm10.092-.119.024.668s-.549.12-.907.12c-.357 0-1.288-.215-1.288-1.122v-1.384h-.978v-.62h.978v-.74h1.193v.74h.978v.62h-.978v1.193s0 .597.477.597.501-.072.501-.072ZM43.04 8.32h1.383v3.316h1.17V8.32H47v-.692h-3.96v.692Zm-.478.167.143-.692s-.596-.262-1.646-.262c-1.026 0-2.672.572-2.672 2.123 0 1.527 1.742 2.052 2.816 2.052 1.073 0 1.43-.167 1.43-.167l-.118-.764s-.478.144-1.289.144c-.787-.024-1.598-.645-1.598-1.336.024-.62.74-1.313 1.67-1.313.716 0 1.264.215 1.264.215Zm-10.545-.835s1.956-.095 1.956 1.05c0 .978-1.121 1.05-1.121 1.05s.31.047.453.262c.12.19.907 1.622.907 1.622h-1.194s-.19-.238-.286-.405a6.55 6.55 0 0 0-.286-.525s-.167-.597-.74-.597l-.43-.015v1.542h-1.145V7.652h1.886Zm-.74 1.79h.62s.86-.048.907-.573c.024-.501-.835-.573-.835-.573h-.692v1.145Zm4.795.62h1.91v-.74h-1.91v-.907h2.076v-.763h-3.244v3.984h3.269v-.715h-2.1v-.86Zm4.653 3.054h1.169v-.812h-1.17v.812Zm0 3.483h1.169v-3.03h-1.17v3.03Zm-12.74-4.963h1.145V7.652h-1.145v3.984ZM22.64 12.64h2.386s2.362-.049 2.338 2.099c-.023 1.598-2.29 1.837-2.29 1.837H22.64V12.64Zm1.17 3.197h.763s1.574-.096 1.574-1.313c0-1.216-1.67-1.336-1.67-1.336h-.668v2.649Zm0-4.963h.763s1.574-.12 1.574-1.312c0-1.241-1.67-1.336-1.67-1.336h-.668v2.648Zm-11.883-.825v7.983s-4.629-.836-4.629-4.009c0-2.53 3.427-3.646 4.63-3.974Zm0-.15c-2.782-.2-9.09 1.103-9.09 3.957 0 1.86 3.34 4.581 8.78 4.652.215 0 6.394-.238 6.299-6.87-.08-5.572-4.25-6.548-5.583-6.717v-.34c5.315.338 9.496 3.534 9.496 7.414 0 4.104-4.677 7.444-10.427 7.444S1 16.098 1 11.994 5.652 4.55 11.402 4.55c.177 0 .352.003.526.01v5.339Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgDirectDebitWide = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1r, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Direct Debit logo"
    }
  ) : ""
] });

const Svg$1q = ({ size, theme }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2.571 4 1 5.699l9.952 7.926h2.096L23 5.699 21.429 4H2.57Z",
          fill: theme?.fill
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M1 17.625v-9.5l9.952 7h2.096l9.952-7v9.5l-1.571 1.5H2.57L1 17.625Z",
          fill: theme?.fill
        }
      )
    ]
  }
);
const SvgEnvelope = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1q, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Email"
    }
  ) : ""
] });

const Svg$1p = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 10.75h-1.25l-.6-4.525L15.4 12 14 10.575l5.725-5.75-4.475-.575V3h7.275l.475.475v7.275ZM11 8 9.975 9H3v10h16v-5l.975-1H21v6.975L19.975 21h-18L1 19.975V8l.975-1H11v1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgExternal = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1p, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "External link"
    }
  ) : ""
] });

const Svg$1o = ({ size, theme }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.216 5.698c-.75-.251-1.497-.4-2.216-.4-4.626 0-10.437 6.145-10.437 6.145v1.114s1.25 1.322 3.053 2.74l2.916-2.916a4.48 4.48 0 0 1 4.838-4.838l1.845-1.845Zm-4.333 7.016 2.119-2.12v.014l-2.116 2.117a.79.79 0 0 1-.003-.01ZM8.207 14.39l-2.04 2.042a.379.379 0 0 0 .008.005l2.038-2.038a.545.545 0 0 1-.006-.009Zm3.324 2.058-1.828 1.828c.777.267 1.552.426 2.297.426 4.626 0 10.437-6.144 10.437-6.144v-1.114s-1.279-1.352-3.114-2.788l-2.866 2.866c.017.161.026.325.026.49 0 2.468-2.016 4.46-4.483 4.46-.158 0-.315-.008-.469-.024Zm2.861-8.229-.008-.005 1.7-1.7.01.004-1.702 1.701Z",
          fill: theme?.fill
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: 20.0598,
          y: 2.55109,
          width: 1.8977,
          height: 24.6701,
          transform: "rotate(45 20.0598 2.55109)",
          fill: "#052962"
        }
      )
    ]
  }
);
const SvgEyeStrike = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1o, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Not visible"
    }
  ) : ""
] });

const Svg$1n = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4.9c4.875 0 11 6.475 11 6.475v1.175s-6.125 6.475-11 6.475S1 12.55 1 12.55v-1.175S7.125 4.9 12 4.9Zm0 11.775c2.6 0 4.725-2.1 4.725-4.7A4.721 4.721 0 0 0 12 7.25c-2.6 0-4.725 2.1-4.725 4.725 0 2.6 2.125 4.7 4.725 4.7Zm0-6.275c0 .85.7 1.575 1.575 1.575h.775c0 1.3-1.05 2.35-2.35 2.35s-2.35-1.05-2.35-2.35A2.353 2.353 0 0 1 12 9.6v.8Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgEye = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1n, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "View"
    }
  ) : ""
] });

const Svg$1m = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.575 6.125V9.25H6.15v3.45h3.425V23H13.7V12.7h3.375l.75-3.45H13.7V6.5c0-1.525.9-2.05 2.075-2.05h2.05L17.7 1.175c-1.025-.1-1.825-.175-3-.175-2.925 0-5.125 1.825-5.125 5.125Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgFacebook = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1m, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Facebook logo"
    }
  ) : ""
] });

const Svg$1l = ({ size }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.575 6.125V9.25H6.15v3.45h3.425V23H13.7V12.7h3.375l.75-3.45H13.7V6.5c0-1.525.9-2.05 2.075-2.05h2.05L17.7 1.175c-1.025-.1-1.825-.175-3-.175-2.925 0-5.125 1.825-5.125 5.125Z",
        fill: "#1877F2"
      }
    )
  }
);
const SvgFacebookBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1l, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Facebook logo"
    }
  ) : ""
] });

const Svg$1k = ({ size, theme }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5.91 3.763 8.21 1l3.78 4.498L15.77 1l2.299 2.763-3.881 2.21H19.5l1 1.106v5.637h-7.4v-6.19h-2.2v6.19H3.5V7.079l1-1.105h5.291l-3.88-2.21Z",
          fill: theme?.fill
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M10.9 15H4v5.804L5.192 22H10.9v-7Z", fill: theme?.fill }),
      /* @__PURE__ */ jsx("path", { d: "M20 15h-6.9v7h5.521L20 20.787V15Z", fill: theme?.fill })
    ]
  }
);
const SvgGift = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1k, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Gift"
    }
  ) : ""
] });

const Svg$1j = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 12c0 .715-.094 1.408-.27 2.068h-3.328a21.996 21.996 0 0 0 0-4.132h3.33c.175.659.268 1.35.268 2.064Zm-5.607-2.064c.068.656.105 1.346.105 2.064 0 .72-.037 1.411-.106 2.068H9.608A19.888 19.888 0 0 1 9.502 12c0-.718.037-1.408.106-2.064h4.785Zm1.718-2h2.781a8.03 8.03 0 0 0-3.871-3.346c.46.928.834 2.066 1.09 3.346ZM12 4c.003 0 .026 0 .079.024.06.027.163.088.302.219.288.27.638.756.976 1.506.277.617.52 1.355.71 2.187H9.933c.19-.832.432-1.57.71-2.187.337-.75.687-1.235.975-1.506.139-.13.243-.192.303-.22A.21.21 0 0 1 11.998 4H12Zm-3.02.59c-.461.928-.835 2.066-1.091 3.346H5.108A8.03 8.03 0 0 1 8.98 4.59ZM7.598 9.936h-3.33A8.011 8.011 0 0 0 4 12c0 .715.094 1.408.27 2.068h3.328a21.993 21.993 0 0 1 0-4.132Zm.292 6.132H5.11a8.03 8.03 0 0 0 3.87 3.342c-.46-.927-.834-2.064-1.09-3.342ZM12 20h-.002a.215.215 0 0 1-.076-.024 1.178 1.178 0 0 1-.303-.219c-.288-.27-.638-.756-.976-1.506a11.705 11.705 0 0 1-.708-2.183h4.13c-.189.83-.431 1.567-.708 2.183-.338.75-.688 1.235-.976 1.506a1.18 1.18 0 0 1-.303.22.212.212 0 0 1-.076.023H12Zm3.02-.59a8.03 8.03 0 0 0 3.87-3.342h-2.78c-.256 1.278-.63 2.415-1.09 3.342ZM12 2c4.076 0 7.582 2.438 9.14 5.936h.01v.022A9.965 9.965 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgGlobe = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1j, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Globe"
    }
  ) : ""
] });

const Svg$1i = ({ size }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.545 7.648c.395-.87.954-1.629 1.61-2.316 1.483-1.554 3.278-2.55 5.404-2.889 2.974-.475 5.637.226 7.938 2.207.145.126.18.199.023.354-.812.795-1.611 1.603-2.415 2.407-.083.082-.139.183-.285.048-2.026-1.856-5.332-1.834-7.485.167a6.183 6.183 0 0 0-1.608 2.455c-.05-.033-.103-.062-.15-.098L3.545 7.648Z",
          fill: "#D7282A"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.143 21.691c-2.159-.002-4.18-.695-6.039-2.162a9.003 9.003 0 0 1-2.567-3.199l3.166-2.458c.29.737.651 1.435 1.188 2.027 1.363 1.506 3.053 2.156 5.079 1.945.94-.097 1.798-.416 2.599-.906l.073.067c.052.048.103.096.158.139l2.168 1.69.647.503a8.058 8.058 0 0 1-3.631 1.984 11.55 11.55 0 0 1-2.821.37h-.02Z",
          fill: "#45AC43"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "m18.615 19.337-.541-.421-2.274-1.772a2.506 2.506 0 0 1-.158-.14 5.087 5.087 0 0 0-.073-.066c.635-.485 1.165-1.058 1.514-1.787.139-.29.236-.594.328-.902.064-.212.044-.294-.218-.292-1.175.01-2.35.009-3.526.007h-1.16c-.33 0-.33 0-.33-.343v-.847c.001-.776.002-1.552-.005-2.329v-.014c0-.192.039-.267.261-.267h.003c2.88.008 5.761.006 8.642.002.155 0 .253.011.28.2.092.643.141 1.279.142 1.905v.04c-.003 1.816-.414 3.562-1.39 5.206-.403.68-.888 1.303-1.495 1.82Z",
          fill: "#5D7FBE"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.703 13.872 3.537 16.33c-.515-.958-.813-1.988-.951-3.06a9.58 9.58 0 0 1 .811-5.349c.044-.094.099-.182.148-.273 1.01.778 2.02 1.557 3.032 2.335.047.036.1.065.15.098-.423 1.261-.402 2.525-.024 3.79Z",
          fill: "#F4C300"
        }
      )
    ]
  }
);
const SvgGoogleBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1i, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Google logo"
    }
  ) : ""
] });

const Svg$1h = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m19 21 1-1V9.375L12.6 2h-1.2L4 9.375V20l1 1h4.5v-6.5h5V21H19Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgHouse = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1h, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Home"
    }
  ) : ""
] });

const Svg$1g = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.025 11.5V7H3v5.45l1.025 1.025H17.75L15 17.05l.85.9L21 12.825v-.675l-5.1-5.125-.9.875 2.75 3.6H5.025Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgIndent = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1g, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Indent"
    }
  ) : ""
] });

const Svg$1f = ({ size, theme }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M7.075 3.952c0 1.085-.785 1.95-2.08 1.95C3.786 5.902 3 5.037 3 3.952 3 2.843 3.81 2 5.05 2c1.242 0 2 .843 2.025 1.952ZM3.101 19.997V7.442H6.95v12.555H3.1Z",
          fill: theme?.fill
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.25 11.447c0-1.565-.05-2.868-.1-4.005h3.34l.179 1.746h.076c.5-.821 1.747-2.024 3.826-2.024 2.531 0 4.43 1.72 4.43 5.417v7.422H17.15V13.04c0-1.618-.558-2.721-1.95-2.721-1.063 0-1.696.743-1.974 1.462a2.84 2.84 0 0 0-.128.977v7.239H9.25v-8.55Z",
          fill: theme?.fill
        }
      )
    ]
  }
);
const SvgLinkedIn = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1f, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "LinkedIn logo"
    }
  ) : ""
] });

const Svg$1e = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 10.75v2.5h22v-2.5H1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMinus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1e, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Minus sign"
    }
  ) : ""
] });

const Svg$1d = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.975 4.95c0 2.5-2.15 4.55-3.975 4.55-1.625 0-3.95-2.05-3.95-4.55S9.5 1 12 1s3.975 1.45 3.975 3.95Zm-11 8.407L6 12.303c2-.694 3.8-1.003 6-1.003 2.175 0 4 .36 6 1.003l1 1.054 2 7.714-1.025 1.029h-16L3 21.071l1.975-7.714Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPerson = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1d, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Account"
    }
  ) : ""
] });

const Svg$1c = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.324 13.99a7.11 7.11 0 0 0-3.604-3.456l-.59-6.87A6.99 6.99 0 0 0 16.89 2H7.114a6.845 6.845 0 0 0 2.76 1.665l-.569 6.87A7.073 7.073 0 0 0 5.68 13.99H11.01v6.006l.99 4.004.991-4.004V13.99h5.332Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPinned = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1c, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Pinned"
    }
  ) : ""
] });

const Svg$1b = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10.577 15.303c-.54 2.831-1.2 5.546-3.153 6.963-.604-4.279.885-7.489 1.576-10.905-1.182-1.984.142-5.977 2.628-4.993 3.059 1.21-2.649 7.376 1.183 8.146 4 .804 5.634-6.941 3.153-9.46-3.584-3.637-10.434-.083-9.592 5.124.205 1.273 1.52 1.66.526 3.416-2.294-.508-2.979-2.317-2.89-4.73.141-3.941 3.547-6.713 6.963-7.095 4.32-.483 8.375 1.586 8.935 5.65.63 4.587-1.95 9.555-6.57 9.198-1.252-.098-1.777-.718-2.759-1.314Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPinterest = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1b, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Pinterest logo"
    }
  ) : ""
] });

const Svg$1a = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPlus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1a, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Plus sign"
    }
  ) : ""
] });

const Svg$19 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.506 4.7h4.976c-.6 4.745-1.13 9.399-1.36 14.605H1c.83-5.068 2.557-9.86 5.506-14.605Zm11.587 0H23c-.53 4.745-1.129 9.399-1.36 14.605h-9.098c.944-5.068 2.603-9.86 5.551-14.605Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgQuote = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$19, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Quote"
    }
  ) : ""
] });

const Svg$18 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.705 14.195c-.174.823-.548 1.646-.923 2.345l1.173 1.895a12.866 12.866 0 0 1-2.47 2.47l-1.895-1.223c-.774.425-1.522.749-2.345 1.023l-.474 2.12c-.574.1-1.123.175-1.746.175a9.86 9.86 0 0 1-1.746-.175l-.474-2.17c-.823-.224-1.646-.548-2.345-.973l-1.895 1.223c-.923-.699-1.796-1.547-2.47-2.47l1.222-1.92c-.424-.674-.748-1.497-.972-2.32l-2.17-.474A9.863 9.863 0 0 1 1 11.975c0-.623.075-1.172.175-1.746l2.17-.474c.224-.823.548-1.596.972-2.345L3.095 5.515a12.863 12.863 0 0 1 2.47-2.47L7.46 4.218c.699-.374 1.522-.749 2.345-.923l.474-2.22C10.803 1 11.45 1 12.025 1c.574 0 1.172.025 1.746.075l.474 2.22c.823.174 1.571.549 2.345.923l1.895-1.173a14.456 14.456 0 0 1 2.47 2.47L19.782 7.41c.375.724.749 1.522.923 2.345l2.22.474a20.432 20.432 0 0 1 0 3.492l-2.22.474Zm-8.68 4.839c3.891 0 7.059-3.168 7.059-7.059s-3.168-7.059-7.06-7.059c-3.89 0-7.058 3.168-7.058 7.06 0 3.89 3.168 7.058 7.059 7.058Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgSettings = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$18, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Settings"
    }
  ) : ""
] });

const Svg$17 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21 6.5 19.5 5h-15L3 6.5v9L4.475 17H7v5h.975L11 17h8.5l1.5-1.5v-9Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgSpeechBubble = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$17, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Comments"
    }
  ) : ""
] });

const Svg$16 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m19.151 21.336-2.418-7.386L23 9.348l-.312-.989h-7.75L12.546 1h-1.092L9.087 8.36H1.312L1 9.347l6.267 4.602-2.366 7.386.806.624L12 17.357l6.293 4.603.858-.624Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgStar = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$16, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Star"
    }
  ) : ""
] });

const Svg$15 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1.773-7.853-2.27-2.17-.8.8 2.709 3.791h.454l7.455-7.716-.82-.8-6.728 6.095Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgTickRound = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$15, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Ticked"
    }
  ) : ""
] });

const Svg$14 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 6.1c-.875.375-1.65.6-2.625.725 1.025-.575 1.7-1.425 2.025-2.5-.875.425-1.9 1-2.875 1.075C19.7 4.575 18.6 4 17.2 4c-2.45 0-4.5 2.05-4.5 4.5 0 .275.025.75.125 1.025C9 9.325 5.875 7.575 3.5 4.8c-.325.675-.6 1.475-.6 2.275 0 1.5.8 3.025 2.025 3.75-.4.075-1.675-.325-2.075-.525 0 2.325 1.625 4 3.65 4.475-.775.2-1.375.25-2.05.075.625 1.8 2.2 3.1 4.2 3.1-1.5 1.275-3.475 1.95-5.575 1.975-.375-.075-.775 0-1.075-.075 1.925 1.275 4.425 1.975 6.925 1.975 8.275 0 12.85-6.85 12.85-12.8 0-.175-.05-.4-.05-.575A10.12 10.12 0 0 0 24 6.1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgTwitter = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$14, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Twitter logo"
    }
  ) : ""
] });

const Svg$13 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 5 1 7v10l2 2h11.5V5H3Zm18.5.5-5 5v3l5 5H23v-13h-1.5Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgVideo = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$13, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Video"
    }
  ) : ""
] });

const Svg$12 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M19.09 4.52a9.9 9.9 0 0 0-7.05-2.92c-5.49 0-9.96 4.47-9.96 9.96 0 1.75.46 3.47 1.33 4.98L2 21.69l5.28-1.38c1.45.79 3.09 1.21 4.76 1.21 5.49 0 9.96-4.47 9.96-9.96a9.92 9.92 0 0 0-2.91-7.04Zm-7.05 15.32c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.41c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.222 8.222 0 0 1 2.42 5.85c0 4.56-3.72 8.27-8.28 8.27Zm4.54-6.2c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.283 7.283 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.66.31-.22.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.57.12.17 1.75 2.68 4.25 3.76.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.08-.23-.14-.48-.27Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgWhatsApp = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$12, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "WhatsApp logo"
    }
  ) : ""
] });

const Svg$11 = ({ size }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "mask",
        {
          id: "whats-app-brand__a",
          style: {
            maskType: "luminance"
          },
          maskUnits: "userSpaceOnUse",
          x: 2,
          y: 2,
          width: 20,
          height: 20,
          children: /* @__PURE__ */ jsx("path", { d: "M2 2h20v20H2V2Z", fill: "white" })
        }
      ),
      /* @__PURE__ */ jsxs("g", { mask: "url(#whats-app-brand__a)", children: [
        /* @__PURE__ */ jsx(
          "mask",
          {
            id: "whats-app-brand__b",
            style: {
              maskType: "luminance"
            },
            maskUnits: "userSpaceOnUse",
            x: 2,
            y: 2,
            width: 20,
            height: 20,
            children: /* @__PURE__ */ jsx("path", { d: "M22 2H2v20h20V2Z", fill: "white" })
          }
        ),
        /* @__PURE__ */ jsxs("g", { mask: "url(#whats-app-brand__b)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M12 20.89A8.892 8.892 0 0 0 20.888 12 8.891 8.891 0 0 0 12 3.11 8.892 8.892 0 0 0 3.11 12 8.892 8.892 0 0 0 12 20.89Z",
              fill: "#2EDB2A"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "m4.274 15.162 4.25 4.102-5.682 1.628 1.432-5.73Z",
              fill: "#2EDB2A"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.086 4.906A9.922 9.922 0 0 0 12.042 2c-5.489 0-9.956 4.446-9.959 9.91a9.85 9.85 0 0 0 1.33 4.954L2 22l5.28-1.378a9.995 9.995 0 0 0 4.757 1.206h.005c5.488 0 9.955-4.445 9.958-9.91a9.824 9.824 0 0 0-2.914-7.012Zm-7.044 15.249h-.004a8.292 8.292 0 0 1-4.212-1.148l-.303-.179-3.132.818.837-3.04-.197-.311a8.195 8.195 0 0 1-1.266-4.383c.002-4.542 3.715-8.237 8.28-8.237 2.212 0 4.29.858 5.853 2.416a8.174 8.174 0 0 1 2.422 5.827c-.003 4.543-3.715 8.239-8.277 8.239l-.001-.002Zm4.54-6.17c-.25-.124-1.473-.723-1.7-.805-.228-.082-.394-.124-.56.124-.166.248-.643.805-.788.971-.145.166-.29.186-.539.063-.248-.124-1.05-.385-2.002-1.23-.74-.656-1.239-1.467-1.384-1.716-.145-.248-.015-.381.11-.505.111-.11.248-.289.373-.434.124-.145.165-.247.249-.413.083-.166.042-.31-.021-.434s-.56-1.344-.767-1.838c-.201-.484-.406-.418-.56-.425-.145-.007-.311-.01-.477-.01a.917.917 0 0 0-.663.31c-.229.248-.871.847-.871 2.066 0 1.22.891 2.396 1.015 2.562.125.166 1.755 2.666 4.251 3.739.594.255 1.057.407 1.42.522a3.424 3.424 0 0 0 1.567.098c.478-.07 1.473-.6 1.68-1.177.206-.579.207-1.075.144-1.178-.062-.103-.228-.165-.477-.29Z",
              fill: "white"
            }
          )
        ] })
      ] })
    ]
  }
);
const SvgWhatsAppBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$11, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "WhatsApp logo"
    }
  ) : ""
] });

const Svg$10 = ({ size }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "m9.6 2.292.225.91A9.037 9.037 0 0 0 7.313 4.24l-.481-.803A9.955 9.955 0 0 1 9.6 2.292Zm4.8 0-.225.91a9.037 9.037 0 0 1 2.512 1.039l.485-.803A9.95 9.95 0 0 0 14.4 2.292ZM3.438 6.832a9.965 9.965 0 0 0-1.145 2.768l.909.225A9.048 9.048 0 0 1 4.24 7.312l-.803-.481Zm-.5 5.168c0-.454.033-.908.101-1.357l-.926-.141c-.15.993-.15 2.003 0 2.997l.926-.141a9.14 9.14 0 0 1-.101-1.358Zm14.231 8.562-.482-.803c-.779.47-1.625.82-2.509 1.039l.225.909a9.973 9.973 0 0 0 2.766-1.145Zm3.893-8.562c0 .455-.033.908-.101 1.358l.927.14c.15-.993.15-2.003 0-2.996l-.927.14c.068.45.102.904.102 1.358Zm.645 2.4-.909-.225a9.05 9.05 0 0 1-1.039 2.513l.803.484c.52-.861.905-1.795 1.145-2.772Zm-8.35 6.562c-.9.136-1.815.136-2.715 0l-.141.927c.993.15 2.003.15 2.997 0l-.14-.927Zm5.938-3.586a9.087 9.087 0 0 1-1.92 1.918l.557.755a10.017 10.017 0 0 0 2.119-2.112l-.756-.561Zm-1.92-12.67a9.079 9.079 0 0 1 1.92 1.92l.755-.563a10.017 10.017 0 0 0-2.113-2.113l-.562.755Zm-12.67 1.92a9.079 9.079 0 0 1 1.92-1.92l-.562-.755A10.017 10.017 0 0 0 3.95 6.062l.755.563Zm15.857.206-.803.48c.471.78.821 1.626 1.04 2.51l.909-.225a9.933 9.933 0 0 0-1.145-2.765Zm-9.92-3.792a9.156 9.156 0 0 1 2.716 0l.141-.927c-.993-.15-2.003-.15-2.997 0l.14.927ZM5.188 20.298l-1.936.451.452-1.936-.913-.214-.452 1.936a.937.937 0 0 0 1.127 1.127l1.934-.444-.212-.92Zm-2.202-2.535.913.213.312-1.343a9.025 9.025 0 0 1-1.007-2.459l-.91.225c.205.829.514 1.628.922 2.377l-.23.987Zm4.375 2.031-1.342.313.212.912.988-.23c.749.409 1.548.718 2.376.922l.225-.91a9.02 9.02 0 0 1-2.453-1.013l-.006.006ZM12 3.875a8.125 8.125 0 0 0-6.875 12.448l-.78 3.332 3.332-.78a8.125 8.125 0 1 0 4.323-15Z",
        fill: "#3A76F0"
      }
    )
  }
);
const SvgSignalBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$10, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Signal logo"
    }
  ) : ""
] });

const Svg$$ = ({ size }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.478 2 12c0 5.523 4.478 10 10 10Z",
          fill: "url(#telegram-brand__a)"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m6.527 11.894 5.831-2.516 3.731-1.362a.658.658 0 0 1 .388.116c.079.069.13.166.142.27.02.13.026.263.017.394-.151 1.58-.802 5.419-1.132 7.19-.14.755-.417 1.006-.683 1.025-.581.053-1.022-.383-1.584-.755l-2.231-1.5c-.988-.65-.348-1.005.215-1.592l2.755-2.691a.199.199 0 0 0-.002-.095.212.212 0 0 0-.044-.083.231.231 0 0 0-.208-.02c-.088.02-1.494.95-4.217 2.787-.4.275-.761.408-1.084.4-.358-.007-1.044-.201-1.555-.367-.63-.204-1.124-.31-1.081-.657.02-.174.267-.356.742-.544Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
        "linearGradient",
        {
          id: "telegram-brand__a",
          x1: 11.8742,
          y1: 1.81167,
          x2: 11.8742,
          y2: 21.9375,
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ jsx("stop", { stopColor: "#2AABEE" }),
            /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#229ED9" })
          ]
        }
      ) })
    ]
  }
);
const SvgTelegramBrand = ({
  size,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$$, { size }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Telegram logo"
    }
  ) : ""
] });

const Svg$_ = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.488 1 18 2.512v18.976l-1.512 1.488L7.512 23 6 21.488V2.512L7.512 1h8.976Zm-4.39 20.488c.536 0 1-.44 1-1 0-.561-.464-1-1-1a1.01 1.01 0 0 0-1.025 1c0 .56.464 1 1.025 1Zm3.975-3v-14h-8v14h8Zm-4.073-4a.99.99 0 1 1 0 1.975c-.561 0-1-.439-1-.975 0-.561.439-1 1-1Zm.683-1.317H11.39l-.658-6.025.658-.658h1.293l.659.658-.66 6.025Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgAlertPhone = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$_, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Mobile phone with exclamation mark"
    }
  ) : ""
] });

const Svg$Z = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.975 2.275v7.25l.475.475h7.275V8.75l-4.5-.6 5.75-5.725L21.55 1l-5.725 5.775-.6-4.5h-1.25Zm-4 19.45v-7.25L9.5 14H2.25v1.25l4.475.575L1 21.575 2.4 23l5.75-5.775.575 4.5h1.25Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowContract = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$Z, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Collapse"
    }
  ) : ""
] });

const Svg$Y = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 8.75V1.5l-.5-.5h-7.25v1.25l4.5.6L14 8.575 15.4 10l5.75-5.725.6 4.475H23Zm-22 6.5v7.25l.475.5h7.25v-1.25l-4.475-.6 5.725-5.775L8.6 14l-5.775 5.725-.575-4.475H1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowExpand = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$Y, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Expand"
    }
  ) : ""
] });

const Svg$X = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.262 11.463v7.5h2v-8.476l-1.025-1.025H6.987l2.75-3.525-.85-.9-5.15 5.125v.675l5.1 5.125.9-.875-2.75-3.624h11.275Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowOutdent = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$X, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Up left arrow"
    }
  ) : ""
] });

const Svg$W = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m23 2.975-.475-.475H15.25v1.25l4.475.575L14 10.075l1.4 1.425 5.75-5.775.6 4.525H23V2.975ZM11 8.5v-2H1v2h10Zm-2 4v-2H1v2h8Zm6 4v-2H1v2h14Zm-4 4v-2H1v2h10Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowPopOut = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$W, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Pop out"
    }
  ) : ""
] });

const Svg$V = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.68 5.36V18.64l-3.528-2.72-.882.882 5.046 4.998h.686L23 16.801l-.858-.882-3.503 2.72V5.36l3.503 2.72.858-.882L18.002 2.2h-.686L12.27 7.198l.882.882 3.527-2.72Zm-5.88-.22V3.18H1v1.96h9.8Zm-.98 3.92V7.1H1v1.96h8.82Zm1.96 3.92v-1.96H1v1.96h10.78ZM8.84 16.9v-1.96H1v1.96h7.84Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowScroll = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$V, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Scroll content"
    }
  ) : ""
] });

const Svg$U = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.45 6.125 12.35 1h-.7l-5.1 5.125.85.85 3.6-2.75V10h2V4.225l3.6 2.75.85-.85ZM7.4 17l-.85.9 5.1 5.1h.7l5.1-5.1-.85-.9-3.6 2.75V14h-2v5.75L7.4 17Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowUpAndDownSmall = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$U, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Up and down arrow"
    }
  ) : ""
] });

const Svg$T = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.175 10.85 12.325 5h-.7L5.8 10.85l.875.875 4.3-3.45V19h2V8.275l4.3 3.45.9-.875Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgArrowUpStraightSmall = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$T, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Arrow up"
    }
  ) : ""
] });

const Svg$S = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m10.85 14 .4 9h1.5l.4-9 8.025 4.15.725-1.3L14.325 12 21.9 7.15l-.725-1.325L13.15 10l-.4-9h-1.5l-.4 8.975-7.975-4.15L2.1 7.15 9.725 12 2.1 16.85l.775 1.3L10.85 14Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgAsterisk = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$S, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Asterisk"
    }
  ) : ""
] });

const Svg$R = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM17.28 12l-3.4 3.85.725.725 3.825-3.425 3.85 3.425.725-.725L19.58 12l3.425-3.85-.725-.725-3.85 3.425-3.825-3.425-.725.725 3.4 3.85Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgAudioMute = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$R, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Sound off"
    }
  ) : ""
] });

const Svg$Q = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.125 3h-8.25L6.5 4.389v18.148l.458.463L12 19.99 17.042 23l.458-.463V4.389L16.125 3Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgBookMark = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$Q, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Bookmark"
    }
  ) : ""
] });

const Svg$P = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m15.324 6.777-1.058-1.083 2.318-2.318-2.293-2.293L15.324.025l2.292 2.318L19.96 0l1.084 1.058L18.7 3.401l2.343 2.343-1.058 1.033-2.343-2.318-2.318 2.318ZM17.5 8.625v13.912l-.458.463L12 20.69 6.958 23l-.458-.463V4.389L7.875 3H12c0 3.056 2.475 5.625 5.5 5.625Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgBookMarkCross = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$P, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Remove bookmark"
    }
  ) : ""
] });

const Svg$O = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.636 2h1.819v3.636H5.636V2Zm10.91 0h1.818v3.636h-1.819V2Zm4.051 1L22 4.422v16.165l-1.403 1.39L3.403 22 2 20.587V4.422L3.403 3h1.324v3.545h3.637V3h7.272v3.545h3.637V3h1.324ZM3.818 9.273h16.364v10.909H3.818V9.272Zm6.364 4.036 1.345-.173v4.773h1.482v-6.363h-.827l-2 .827v.936Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCalendar = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$O, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Calendar"
    }
  ) : ""
] });

const Svg$N = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m2 2.712.977-.952L12 9.128l9.023-7.368.977.952-9.499 9.5H11.5L2 2.711Zm0 10.026.977-.953L12 19.154l9.023-7.369.977.953-9.499 9.498H11.5L2 12.738Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronDownDouble = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$N, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Double chevron down"
    }
  ) : ""
] });

const Svg$M = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.806 10.712 11.634 15h.731l3.829-4.288L15.5 10 12 13l-3.5-3-.694.712Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronDownSingleXsmall = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$M, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Expand to show more"
    }
  ) : ""
] });

const Svg$L = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m2 11.259 9.499-9.499H12.5L22 11.259l-.977.952L12 4.843 2.977 12.21 2 11.26Zm0 10.025 9.499-9.499H12.5L22 21.284l-.977.952L12 14.868l-9.023 7.368L2 21.284Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgChevronUpDouble = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$L, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Double chevron up"
    }
  ) : ""
] });

const Svg$K = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.975 4C16.95 4 21 8.05 21 13.025c0 4.975-4.05 9-9.025 9C7 22.025 3 18 3 13.025S7 4 11.975 4Zm-.6 1.65-.625 7.675 1.25 1.05 6.35-.525v-1.225l-5.2-.3-.55-6.675h-1.225Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgClockBaselineSmall = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$K, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Clock"
    }
  ) : ""
] });

const Svg$J = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm5.138-14.358-.782-.78-4.349 3.982-4.364-3.967-.782.78L10.85 12l-3.988 4.342.782.781 4.364-3.967 4.35 3.982.781-.78L13.165 12l3.973-4.358Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCrossRound = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$J, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Close"
    }
  ) : ""
] });

const Svg$I = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m21 20.5-.5.5h-17l-.5-.5v-17l.5-.5h17l.5.5v17Zm-9.5-16h-7v7h7v-7Zm8 7v-7h-7v7h7ZM5.225 8.05v-.4h.5V5.825L5.2 5.9v-.35l.775-.35h.3v2.45h.5v.4h-1.55ZM11.5 12.5h-7v7h7v-7Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgCrosswords = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$I, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Crosswords"
    }
  ) : ""
] });

const Svg$H = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m20 21-.975 1H5l-1-1V3l1-1h11.025L20 6v15ZM18 8H6v1.5h12V8Zm0 3H6v1.5h12V11Zm-5 3H6v1.5h7V14Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgDocument = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$H, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Document"
    }
  ) : ""
] });

const Svg$G = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m16.575 7 .9.875L12.35 13h-.7l-5.1-5.125L7.425 7 11 9.725V1h2v8.725L16.575 7ZM21 11l1-1h1v9.975L21.975 21h-20L1 19.975V10h1l1 1v8h18v-8Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgDownload = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$G, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Download"
    }
  ) : ""
] });

const Svg$F = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 5h2V3H7v2Zm8 0h2V3h-2v2ZM7 9h2V7H7v2Zm8 0h2V7h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgDragHandle = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$F, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Drag"
    }
  ) : ""
] });

const Svg$E = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.404 1 4.397 15.2l2.121 2.149 2.122 2.15L20.759 7.215l-4.24-4.298.73-.74 4.24 4.298 1.187-1.204L18.405 1Zm-3.622 5.71-9.38 9.507.67.679 9.38-9.506-.67-.68ZM3.69 15.915 2.63 16.992 2 21.369l.554.561 4.32-.639 1.058-1.077-4.243-4.3Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgEdit = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$E, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Edit"
    }
  ) : ""
] });

const Svg$D = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.05 10.207 6.344 9.5H2.707L2 10.207v3.636l.707.707h3.636l.708-.707v-3.636Zm7.475 0-.707-.707h-3.636l-.707.707v3.636l.707.707h3.636l.707-.707v-3.636Zm7.475 0-.707-.707h-3.636l-.707.707v3.636l.707.707h3.636l.707-.707v-3.636Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgEllipsis = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$D, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "More"
    }
  ) : ""
] });

const Svg$C = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 9V7h4V4.5l1-1h2.5l1 1V7H23v2H9.5v2.5l-1 1H6l-1-1V9H1Zm7-4H6.5v6H8V5Zm8.5 12H1v-2h15.5v-2.525l.975-.975H20l1 1V15h2v2h-2v2.5l-1 1h-2.525l-.975-1V17Zm3-4H18v6h1.5v-6Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgFilter = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$C, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Filter"
    }
  ) : ""
] });

const Svg$B = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m2.6 10.725.05.675 7.6 1.9 2.375 8.15.775.05 8-18.3-.7-.7-18.1 8.225Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgGps = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$B, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Location"
    }
  ) : ""
] });

const Svg$A = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.001 1.723c-2.697 0-5.169.949-7.167 2.472l-.524-.524C6.133 1.448 8.88 0 12.001 0c3.122 0 5.869 1.448 7.692 3.67l-.525.525c-1.998-1.523-4.47-2.472-7.167-2.472Zm7.017 11.287L17.52 22h-7.017l-.999-2.972-4.22-4.67v-.649l1.199-1.223 3.37 1.823L10.978 4.02H13l.25 6.743 5.244 1.248.524 1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgHandPointed = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$A, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Interactive"
    }
  ) : ""
] });

const Svg$z = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.3 8.35 18 6.05l-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3 1.05-1.05 2.3 2.3 2.3-2.3 1.05 1.05-2.3 2.3 2.3 2.3-1.05 1.05ZM12 4.975C12 8.275 14.725 11 18 11v9l-1 1h-4.5v-6.5h-5V21H3l-1-1V9.375L9.4 2h1l1.725 1.7c-.075.4-.125.85-.125 1.275Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgHouseCross = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$z, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Remove from home"
    }
  ) : ""
] });

const Svg$y = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.25 9V5.75H14v-1.5h3.25V1h1.5v3.25H22v1.5h-3.25V9h-1.5ZM12 4.975C12 8.275 14.725 11 18 11v9l-1 1h-4.5v-6.5h-5V21H3l-1-1V9.375L9.4 2h1l1.725 1.7c-.075.4-.125.85-.125 1.275Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgHousePlus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$y, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Add to home"
    }
  ) : ""
] });

const Svg$x = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19 21H5l-1-1V9.375L11.4 2h1.2L20 9.375V20l-1 1Zm-1.075-6.525c.025-.375.075-.65.075-.95 0-.375-.05-.625-.075-1L16.7 12.25c-.075-.475-.25-.85-.475-1.25l.65-1.05c-.4-.5-.825-.95-1.35-1.325l-1.025.65c-.4-.225-.825-.4-1.3-.475l-.225-1.225a6.99 6.99 0 0 0-1-.075c-.275 0-.6.025-.95.075L10.8 8.8c-.475.075-.9.25-1.3.475l-1-.65C7.925 9 7.525 9.45 7.125 9.95l.65 1.05c-.25.425-.4.85-.475 1.25l-1.225.275c-.025.375-.075.625-.075 1 0 .3.05.575.075.95l1.225.2c.075.5.25.85.475 1.325l-.65.975c.375.525.85 1 1.375 1.4l1-.65c.375.225.825.375 1.3.475l.225 1.225c.375.025.65.075.95.075.375 0 .625-.05 1-.075L13.2 18.2c.475-.1.925-.25 1.3-.475l1.025.65c.525-.4.95-.825 1.35-1.4l-.65-.975c.225-.4.4-.825.475-1.325l1.225-.2Zm-5.95 1.9c-1.6 0-2.85-1.35-2.85-2.85 0-1.65 1.25-2.9 2.85-2.9 1.675 0 2.9 1.225 2.9 2.9 0 1.5-1.25 2.85-2.9 2.85Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgHouseSetting = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$x, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Settings"
    }
  ) : ""
] });

const Svg$w = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 7c0 .825-.15 1.7-.5 2.65L12.5 23h-1L6.55 9.6C6.25 8.8 6 7.875 6 7c0-3.3 2.7-6 6-6s6 2.7 6 6ZM7.75 7c0 2.325 1.925 4.25 4.25 4.25S16.25 9.325 16.25 7 14.325 2.75 12 2.75 7.75 4.675 7.75 7Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgLocationMarker = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$w, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Location"
    }
  ) : ""
] });

const Svg$v = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432Zm7.295 10.887L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMagnifyingGlass = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$v, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Search"
    }
  ) : ""
] });

const Svg$u = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432ZM5.636 9.956V8.59h7.273v1.364H5.636Zm10.932 4.772L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMagnifyingGlassMinus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$u, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Zoom out"
    }
  ) : ""
] });

const Svg$t = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432ZM8.59 5.637h1.364v2.955h2.954v1.364H9.955v2.954H8.59V9.955H5.636V8.59h2.955V5.636Zm7.977 9.091L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMagnifyingGlassPlus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$t, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Zoom in"
    }
  ) : ""
] });

const Svg$s = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.273 2c1 0 1.954.182 2.84.568.887.387 1.637.91 2.296 1.568.66.66 1.16 1.432 1.545 2.319a6.94 6.94 0 0 1 .569 2.818c0 1-.182 1.931-.569 2.818-.386.886-.886 1.659-1.545 2.318-.659.66-1.409 1.16-2.295 1.545-.887.387-1.841.569-2.841.569-1 0-1.932-.182-2.818-.569-.887-.386-1.66-.886-2.319-1.545a7.457 7.457 0 0 1-1.568-2.318A6.942 6.942 0 0 1 2 9.273c0-1 .182-1.932.568-2.818.387-.887.91-1.66 1.568-2.319a7.457 7.457 0 0 1 2.319-1.568A6.942 6.942 0 0 1 9.273 2Zm0 1.84c-.75 0-1.455.137-2.114.41-.659.295-1.25.682-1.727 1.16-.5.5-.887 1.067-1.16 1.726a5.205 5.205 0 0 0-.431 2.137 5.1 5.1 0 0 0 .432 2.113c.272.66.659 1.228 1.159 1.728S6.5 14 7.159 14.295a5.1 5.1 0 0 0 2.114.432 5.1 5.1 0 0 0 2.113-.431 5.798 5.798 0 0 0 1.75-1.182 5.76 5.76 0 0 0 1.16-1.728c.295-.659.431-1.363.431-2.113s-.136-1.478-.432-2.137C14 6.477 13.636 5.91 13.136 5.41s-1.09-.864-1.75-1.159a5.473 5.473 0 0 0-2.113-.41Zm-.546 3.796c0 .5-.409.91-.909.91s-.909-.41-.909-.91c0-.522.41-.909.91-.909s.908.387.908.91Zm2.91 0c0 .5-.41.91-.91.91s-.909-.41-.909-.91c0-.522.41-.909.91-.909s.908.387.908.91ZM9.272 11.25c-1 0-1.91.273-2.682.818l-.41-.432a5.013 5.013 0 0 1 1.387-.954c.523-.228 1.091-.318 1.705-.318.613 0 1.181.09 1.704.318.523.25 1 .568 1.387.954l-.41.432c-.772-.545-1.659-.818-2.681-.818Zm5.454 5.318v-.932l.91-.909h.931L22 20.16 20.16 22l-5.433-5.432Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMagnifyingGlassSadFace = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$s, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "No results"
    }
  ) : ""
] });

const Svg$r = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m12.488 12.383 9.936 6.633.576-.426V5.425L22.424 5l-9.936 6.633v.75ZM1 12.383l9.961 6.633.55-.426V5.425L10.962 5 1 11.633v.75Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMediaControlsBack = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$r, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Rewind"
    }
  ) : ""
] });

const Svg$q = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.512 11.633 1.576 5 1 5.425V18.59l.576.426 9.936-6.633v-.75Zm11.488 0L13.039 5l-.55.425V18.59l.55.426L23 12.383v-.75Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMediaControlsForward = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$q, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Fast forward"
    }
  ) : ""
] });

const Svg$p = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 5H7L6 6v13h4V5Zm4 14h3l1-1V5h-4v14Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMediaControlsPause = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$p, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Pause"
    }
  ) : ""
] });

const Svg$o = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19 18V6l-1-1H6L5 6v12l1 1h12l1-1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMediaControlsStop = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$o, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Stop"
    }
  ) : ""
] });

const Svg$n = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23 7V5H1v2h22Zm0 6v-2H1v2h22Zm0 6v-2H1v2h22Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMenu = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$n, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Menu"
    }
  ) : ""
] });

const Svg$m = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.035 0A12.487 12.487 0 0 0 4.48 2.312a11.536 11.536 0 0 0-.299 16.212c4.451 4.525 11.662 4.65 16.212.273 1.044-1.02 1.89-2.213 2.436-3.48-4.177 1.74-9.25.87-12.63-2.587C6.841 9.25 6.145 4.127 8.034 0Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMoon = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$m, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Dark mode"
    }
  ) : ""
] });

const Svg$l = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19 3.5V6H3V3.5h16Zm-5.5 5V11H3V8.5h10.5ZM21 16v-2.5H3V16h18Zm-4.5 2.5V21H3v-2.5h13.5Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMessage = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$l, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Message"
    }
  ) : ""
] });

const Svg$k = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.336-14.444v1.27H7.558v-1.27h7.778Zm-2.699 2.54v1.27h-5.08v-1.27h5.08Zm3.81 2.539v1.27h-8.89v-1.27h8.89Zm-2.223 2.54v1.27H7.558v-1.27h6.666Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgMessageRound = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$k, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Message"
    }
  ) : ""
] });

const Svg$j = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.364 2H5.636v5.68H3.43L2 9.29l9.048 7.504h1.904L22 9.289 20.571 7.68h-2.207V2Zm-1.819 5.68v-.946h-9.09v.946h9.09Zm0-3.787h-9.09v.947h9.09v-.947ZM2 20.58v-8.994l9.048 6.627h1.904L22 11.586v8.994L20.571 22H3.43L2 20.58ZM7.455 9.574h9.09v.947h-9.09v-.947Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgNewsletter = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$j, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Newsletter"
    }
  ) : ""
] });

const Svg$i = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.672 11.924c0 2.655.935 5.09 2.435 7.057l-.517.516A9.743 9.743 0 0 1 0 11.924 9.743 9.743 0 0 1 3.59 4.35l.517.516c-1.5 1.968-2.435 4.402-2.435 7.058Zm20.607 0c0-2.656-.861-5.09-2.435-7.058l.566-.516A9.743 9.743 0 0 1 24 11.924a9.743 9.743 0 0 1-3.59 7.573l-.566-.516c1.574-1.967 2.435-4.402 2.435-7.057Zm-17.09 0c0 1.574.467 2.975 1.278 4.13l-.664.64c-1.254-1.254-1.967-2.901-1.967-4.77 0-1.87.713-3.59 1.967-4.77l.664.614a7.234 7.234 0 0 0-1.278 4.156Zm13.622 0a7.403 7.403 0 0 0-1.254-4.156l.615-.615c1.254 1.18 1.992 2.902 1.992 4.77 0 1.87-.738 3.517-1.992 4.771l-.615-.64a7.264 7.264 0 0 0 1.254-4.13Zm-2.877 0A3.915 3.915 0 0 1 12 15.858a3.915 3.915 0 0 1-3.934-3.934A3.915 3.915 0 0 1 12 7.989a3.915 3.915 0 0 1 3.934 3.935Zm-1.475 0c0-1.353-1.131-2.46-2.459-2.46a2.435 2.435 0 0 0-2.459 2.46A2.435 2.435 0 0 0 12 14.383c1.328 0 2.459-1.107 2.459-2.46Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgNotificationsOff = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$i, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Notification off"
    }
  ) : ""
] });

const Svg$h = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.672 11.924c0 2.655.935 5.09 2.435 7.057l-.517.516A9.743 9.743 0 0 1 0 11.924 9.743 9.743 0 0 1 3.59 4.35l.517.516c-1.5 1.968-2.435 4.402-2.435 7.058Zm20.607 0c0-2.656-.861-5.09-2.435-7.058l.566-.516A9.743 9.743 0 0 1 24 11.924a9.743 9.743 0 0 1-3.59 7.573l-.566-.516c1.574-1.967 2.435-4.402 2.435-7.057Zm-17.09 0c0 1.574.467 2.975 1.278 4.13l-.664.64c-1.254-1.254-1.967-2.901-1.967-4.77 0-1.87.713-3.59 1.967-4.77l.664.614a7.234 7.234 0 0 0-1.278 4.156Zm13.622 0a7.403 7.403 0 0 0-1.254-4.156l.615-.615c1.254 1.18 1.992 2.902 1.992 4.77 0 1.87-.738 3.517-1.992 4.771l-.615-.64a7.264 7.264 0 0 0 1.254-4.13Zm-2.877 0A3.915 3.915 0 0 0 12 7.989a3.915 3.915 0 0 0-3.934 3.935A3.915 3.915 0 0 0 12 15.858a3.915 3.915 0 0 0 3.934-3.934Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgNotificationsOn = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$h, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Notification on"
    }
  ) : ""
] });

const Svg$g = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.753 6.957a4.255 4.255 0 0 1 8.51 0h1.703a5.958 5.958 0 0 0-11.915 0h1.702Zm-1.702 0v2.128l-.851.851V20.15l.851.851h11.915l.851-.851V9.936l-.851-.85V6.956h-1.702v2.128h-8.51V6.957H6.05Zm7.234 6.809c0 .556-.355 1.029-.851 1.204v1.775h-.851V14.97a1.277 1.277 0 1 1 1.702-1.204Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPadlock = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$g, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Lock"
    }
  ) : ""
] });

const Svg$f = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.072 1.1c1.689 0 3.088 1.375 3.088 3.064 0 1.712-1.399 3.087-3.088 3.087a3.073 3.073 0 0 1-3.063-3.087v-.097a10 10 0 0 0-1.423-.12c-2.775 0-5.476 1.35-6.803 3.739l-.12.217-.025-.025-.217-.603-.844-.434-.627.217c1.76-3.063 5.041-5.017 8.636-5.017.675 0 1.375.096 2.074.241A3.017 3.017 0 0 1 17.072 1.1Zm4.077 5.862a10.04 10.04 0 0 1 1.351 5.017 9.903 9.903 0 0 1-1.327 4.97 9.15 9.15 0 0 1-1.23 1.688c.145.362.217.772.217 1.158 0 .53-.12 1.037-.41 1.52a3.077 3.077 0 0 1-2.678 1.544 3.195 3.195 0 0 1-1.52-.41 3.077 3.077 0 0 1-1.543-2.678c0-.506.144-1.037.41-1.52a3.116 3.116 0 0 1 2.702-1.544c.506 0 1.061.097 1.52.41l.072.049c.313-.386.603-.772.82-1.158a8.083 8.083 0 0 0 1.085-4.029c0-1.278-.29-2.605-.916-3.739l-.12-.217h.023l.627.12.797-.53.12-.651Zm-8.515 14.956-.507-.434-.048-.965.434-.483v-.024h-.241c-2.75 0-5.283-1.592-6.658-4.004a8.006 8.006 0 0 1-.603-1.303c.048-.024.072-.024.096-.048a3.077 3.077 0 0 0 1.544-2.678c0-.506-.144-1.037-.41-1.52a3.106 3.106 0 0 0-2.677-1.543c-.531 0-1.038.144-1.52.41A3.077 3.077 0 0 0 .5 12.004c0 .506.145 1.037.41 1.52a3.133 3.133 0 0 0 2.22 1.519c.216.675.506 1.303.844 1.906a9.914 9.914 0 0 0 8.66 4.969Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPartyOfThree = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$f, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Share"
    }
  ) : ""
] });

const Svg$e = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.3 9.5c1.825 0 3.975-2.05 3.975-4.55S12.8 1 10.3 1 6.35 2.45 6.35 4.95 8.675 9.5 10.3 9.5Zm12.35 3.8-1.05 1.05-2.3-2.3-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3L17 7.65l2.3 2.3 2.3-2.3 1.05 1.05-2.3 2.3 2.3 2.3ZM10.3 11.5c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15l1.1 4.1-1.025 1h-16L1.3 21l1.975-7.5L4.3 12.475c2-.675 3.8-.975 6-.975Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPersonCross = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$e, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Remove user"
    }
  ) : ""
] });

const Svg$d = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 9.5c1.825 0 3.975-2.05 3.975-4.55S12.5 1 10 1 6.05 2.45 6.05 4.95 8.375 9.5 10 9.5Zm9.75 5.5h-1.5v-3.25H15v-1.5h3.25V7h1.5v3.25H23v1.5h-3.25V15ZM10 11.5c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15L19 21l-1.025 1h-16L1 21l1.975-7.5L4 12.475c2-.675 3.8-.975 6-.975Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPersonPlus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$d, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Add user"
    }
  ) : ""
] });

const Svg$c = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.236 18.718A9.135 9.135 0 0 1 12 21.167c-2.41 0-4.603-.93-6.239-2.45l1.188-4.648.737-.759c1.438-.5 2.732-.722 4.314-.722 1.564 0 2.876.26 4.314.722l.719.76 1.203 4.648ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10.01-.588c1.355 0 2.951-1.703 2.951-3.779 0-2.076-1.094-3.28-2.95-3.28s-2.932 1.204-2.932 3.28c0 2.076 1.726 3.779 2.932 3.779Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPersonRound = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$c, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Account"
    }
  ) : ""
] });

const Svg$b = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.4 9.5c1.825 0 3.975-2.05 3.975-4.55S12.9 1 10.4 1 6.45 2.45 6.45 4.95 8.775 9.5 10.4 9.5Zm5.75 2 1.075-1.05 1.1 1.125L21.6 8.3l1.05 1.075-4.325 4.325-1.05-1.075L16.15 11.5Zm-5.75 0c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15l1.1 4.1-1.025 1h-16L1.4 21l1.975-7.5L4.4 12.475c2-.675 3.8-.975 6-.975Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPersonTick = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$b, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Verified user"
    }
  ) : ""
] });

const Svg$a = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.488 1 18 2.512v18.976l-1.512 1.488L7.512 23 6 21.488V2.512L7.512 1h8.976Zm-4.39 20.488c.536 0 1-.44 1-1 0-.561-.464-1-1-1a1.01 1.01 0 0 0-1.025 1c0 .56.464 1 1.025 1Zm3.975-3v-14h-8v14h8Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgPhone = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$a, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Mobile phone"
    }
  ) : ""
] });

const Svg$9 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.019 22a9.935 9.935 0 0 0 8.223-4.35l-.114-.616-.797-.478-.615.16c-1.48 2.095-3.895 3.485-6.697 3.485-4.487 0-8.178-3.69-8.178-8.224 0-4.51 3.69-8.177 8.178-8.177 2.574 0 4.784 1.139 6.31 2.96l-3.303.548v1.138h5.831l.433-.432V2h-1.116l-.57 3.44C17.782 3.32 15.094 2 12.02 2 6.484 2 1.996 6.465 1.996 11.977A10.008 10.008 0 0 0 12.02 22Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgReload = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$9, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Reload"
    }
  ) : ""
] });

const Svg$8 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19 16c1.675 0 3 1.35 3 3 0 1.675-1.325 3-3 3a2.972 2.972 0 0 1-2.975-3c0-.125 0-.275.025-.375L7.1 14.15a2.908 2.908 0 0 1-2.075.825C3.325 14.975 2 13.65 2 12a3.004 3.004 0 0 1 3.025-3.025c.775 0 1.5.35 2.075.875l8.95-4.475c-.025-.1-.025-.225-.025-.4A2.966 2.966 0 0 1 19 2c1.675 0 3 1.325 3 2.975C22 6.65 20.675 8 19 8c-.8 0-1.475-.325-2.05-.825l-8.975 4.45C8 11.7 8 11.825 8 12s0 .3-.025.375l8.975 4.45c.575-.5 1.25-.825 2.05-.825Zm0-12.8c-.975 0-1.8.775-1.8 1.775 0 1 .825 1.825 1.8 1.825 1 0 1.825-.825 1.825-1.825S20 3.2 19 3.2Zm0 17.6c1 0 1.825-.825 1.825-1.8 0-1-.825-1.8-1.825-1.8-.975 0-1.8.8-1.8 1.8 0 .975.825 1.8 1.8 1.8Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgShare = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$8, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Share"
    }
  ) : ""
] });

const Svg$7 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19 16c1.675 0 3 1.35 3 3 0 1.675-1.325 3-3 3a2.972 2.972 0 0 1-2.975-3c0-.125 0-.275.025-.375L7.1 14.15a2.908 2.908 0 0 1-2.075.825C3.325 14.975 2 13.65 2 12a3.004 3.004 0 0 1 3.025-3.025c.775 0 1.5.35 2.075.875l8.95-4.475c-.025-.1-.025-.225-.025-.4A2.966 2.966 0 0 1 19 2c1.675 0 3 1.325 3 2.975C22 6.65 20.675 8 19 8c-.8 0-1.475-.325-2.05-.825l-8.975 4.45C8 11.7 8 11.825 8 12s0 .3-.025.375l8.975 4.45c.575-.5 1.25-.825 2.05-.825Zm0-12.8c-.975 0-1.8.775-1.8 1.775 0 1 .825 1.825 1.8 1.825 1 0 1.825-.825 1.825-1.825S20 3.2 19 3.2Zm0 17.6c1 0 1.825-.825 1.825-1.8 0-1-.825-1.8-1.825-1.8-.975 0-1.8.8-1.8 1.8 0 .975.825 1.8 1.8 1.8Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgShareCallout = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$7, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Share callout"
    }
  ) : ""
] });

const Svg$6 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.3 9.7 20 7.4l-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3L17.7 3 20 5.3 22.3 3l1.05 1.05-2.3 2.3 2.3 2.3L22.3 9.7ZM14 6.35c0 3.3 2.7 6 6 6v3.5l-1.5 1.5H10l-3.025 5H6v-5H3.475L2 15.85v-9l1.5-1.5h10.575c-.05.325-.075.675-.075 1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgSpeechBubbleCross = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$6, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Remove comment"
    }
  ) : ""
] });

const Svg$5 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.25 10V6.75H16v-1.5h3.25V2h1.5v3.25H24v1.5h-3.25V10h-1.5ZM14 6c0 3.3 2.7 6 6 6v3.5L18.5 17H10l-3.025 5H6v-5H3.475L2 15.5v-9L3.5 5h10.575c-.05.325-.075.675-.075 1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgSpeechBubblePlus = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$5, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Add comment"
    }
  ) : ""
] });

const Svg$4 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m14.381 13.196 3.863-2.837h-4.758l-1.479-4.547-1.462 4.547H5.756l3.855 2.831-1.438 4.488L12 14.88l3.856 2.82-1.475-4.503Zm4.77 8.14-.858.624L12 17.357 5.707 21.96l-.806-.624 2.366-7.386L1 9.348l.312-.989h7.775L11.454 1h1.092l2.393 7.36h7.749l.312.988-6.267 4.602 2.418 7.386Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgStarOutline = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$4, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Star outline"
    }
  ) : ""
] });

const Svg$3 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m13.9 19.975 2.025-.5L14.5 15.05H8.575l-1.5 4.425 2.1.5V21H3.5v-1.075l1.75-.45L11.025 3.05h2.15L18.7 19.475l1.825.45V21H13.9v-1.025ZM8.95 14h5.2L11.7 6.275h-.125L8.95 14Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgTextLarge = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$3, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Large text"
    }
  ) : ""
] });

const Svg$2 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.43 14.604 4.16 18.51l1.82.417v.943H1v-.987l1.58-.373L7.623 4.12h1.843l4.913 14.389 1.535.373v.987h-5.79v-.943l1.798-.417-1.272-3.905h-5.22Zm.352-.92h4.606L8.194 6.95h-.11l-2.302 6.733Zm16.143 5.198 1.075.307v.68h-4.102v-.68l1.294-.307-.877-2.632h-3.729v.044l-.57-1.514 2.106-6.032h1.316l3.487 10.134Zm-6.032-3.422h3.159l-1.514-4.716h-.065l-1.58 4.716Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgTextSize = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$2, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Text size"
    }
  ) : ""
] });

const Svg$1 = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m13.345 17.69 1.475-.325-1-3.1H9.495l-1.05 3.1 1.525.325v.775h-4.1v-.775l1.3-.325L11.295 5.54h1.55l4 11.825 1.275.325v.775h-4.775v-.775ZM9.82 13.315h3.7l-1.75-5.45h-.1l-1.85 5.45Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgTextSmall = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg$1, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Small text"
    }
  ) : ""
] });

const Svg = ({ size, theme }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: size ? iconSize[size] : void 0,
    height: void 0,
    viewBox: "-3 -3 30 30",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false,
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m17.475 6.125-.9.875L13 4.275V13h-2V4.275L7.425 7l-.875-.875L11.65 1h.7l5.125 5.125ZM22 10h1v9.975L21.975 21h-20L1 19.975V10h1l1 1v8h18v-8l1-1Z",
        fill: theme?.fill
      }
    )
  }
);
const SvgUpload = ({
  size,
  theme,
  isAnnouncedByScreenReader = false
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Svg, { size, theme }),
  isAnnouncedByScreenReader ? /* @__PURE__ */ jsx(
    "span",
    {
      css: css`
					${visuallyHidden$4}
				`,
      children: "Upload"
    }
  ) : ""
] });

const Label = ({
  text,
  supporting,
  optional = false,
  hideLabel = false,
  size,
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  return /* @__PURE__ */ jsxs("label", { css: cssOverrides, ...props, children: [
    /* @__PURE__ */ jsx(
      Text,
      {
        hideLabel,
        text,
        optional,
        size,
        theme
      }
    ),
    supporting ? /* @__PURE__ */ jsx(SupportingText, { hideLabel, theme, children: supporting }) : "",
    children
  ] });
};

const columns = css`
	box-sizing: border-box;
	display: flex;
	margin-right: -${space[5]}px;
	& > * {
		margin-right: ${space[5]}px;
	}
`;
const collapseBelowColumnsCSS = (breakpoint) => css`
	${until[breakpoint]} {
		display: block;
		margin-right: 0;
		& > * {
			margin-right: 0;
		}
	}
`;
const collapseBelowSpaceYCSS = (spaceY) => css`
	margin-bottom: ${-space[spaceY]}px;
	& > * {
		margin-bottom: ${space[spaceY]}px;
	}
`;
const collapseBelowSpaceY = {
  1: collapseBelowSpaceYCSS(1),
  2: collapseBelowSpaceYCSS(2),
  3: collapseBelowSpaceYCSS(3),
  4: collapseBelowSpaceYCSS(4),
  5: collapseBelowSpaceYCSS(5),
  6: collapseBelowSpaceYCSS(6),
  9: collapseBelowSpaceYCSS(9),
  12: collapseBelowSpaceYCSS(12),
  24: collapseBelowSpaceYCSS(24)
};
const collapseBelowWidth = css`
	width: 100% !important;
`;
const collapseBelowTablet = css`
	& > * {
		${until.tablet} {
			${collapseBelowWidth}
		}
	}
`;
const collapseBelowDesktop = css`
	& > * {
		${until.desktop} {
			${collapseBelowWidth}
		}
	}
`;
const collapseBelowleftCol = css`
	& > * {
		${until.leftCol} {
			${collapseBelowWidth}
		}
	}
`;
const collapseBelowWide = css`
	& > * {
		${until.wide} {
			${collapseBelowWidth}
		}
	}
`;
const calculateWidth = (width) => {
  if (width === 0) {
    return `
			display: none;
		`;
  }
  return `
		width: calc((100%) * ${width} - ${space[5]}px);

		/* Reset value that might have been set at a lower breakpoint */
		display: block;
	`;
};
const generateWidthCSS = (width) => {
  const widths = Array.isArray(width) ? width : [width];
  const breakpoints = [
    "mobile",
    "tablet",
    "desktop",
    "leftCol",
    "wide"
  ];
  let widthCSS = "";
  for (const [i, width2] of widths.entries()) {
    const breakpoint = breakpoints[i];
    if (breakpoint) {
      widthCSS += `
				${from[breakpoint]} {
					${calculateWidth(width2)};
				}
			`;
    }
  }
  return widthCSS;
};
const generateSpanCSS = (span) => {
  const spans = Array.isArray(span) ? span : [span];
  const breakpoints = [
    "mobile",
    "tablet",
    "desktop",
    "leftCol",
    "wide"
  ];
  let spanCSS = "";
  for (const [i, span2] of spans.entries()) {
    const breakpoint = breakpoints[i];
    if (breakpoint) {
      spanCSS += `
				${from[breakpoint]} {
					${calculateSpan(span2)};
				}
			`;
    }
  }
  return spanCSS;
};
const columnBreakpoints = [
  { totalColumns: 4, rule: until.tablet },
  { totalColumns: 12, rule: between.tablet.and.leftCol },
  { totalColumns: 14, rule: between.leftCol.and.wide },
  { totalColumns: 16, rule: from.wide }
];
const calculateSpan = (span) => {
  const columnBreakpointCss = columnBreakpoints.reduce(
    (acc, cur) => {
      if (span === 0) {
        return `
					display: none;
				`;
      }
      const inferredWidth = span / cur.totalColumns;
      const cappedWidth = inferredWidth < 1 ? inferredWidth : 1;
      const cssForBreakpoint = calculateWidth(cappedWidth);
      return `
				${acc}
				${cur.rule} {
					${cssForBreakpoint}
				}
			`;
    },
    ``
  );
  return `
		${columnBreakpointCss}
	`;
};
const column = css`
	box-sizing: border-box;
`;
const flexGrow = css`
	flex: 1;
`;
const setWidth = (value) => css`
	${generateWidthCSS(value)};
`;
const setSpan = (value) => css`
	${generateSpanCSS(value)}
`;

const collapseBelowMap = {
  tablet: collapseBelowTablet,
  desktop: collapseBelowDesktop,
  leftCol: collapseBelowleftCol,
  wide: collapseBelowWide
};
const collapseBelowColumnsMap = {
  tablet: collapseBelowColumnsCSS("tablet"),
  desktop: collapseBelowColumnsCSS("desktop"),
  leftCol: collapseBelowColumnsCSS("leftCol"),
  wide: collapseBelowColumnsCSS("wide")
};
const Columns = ({
  collapseBelow,
  collapseUntil = collapseBelow,
  // deprecated
  cssOverrides,
  children,
  spaceY,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      css: [
        columns,
        collapseUntil ? collapseBelowColumnsMap[collapseUntil] : "",
        collapseUntil ? collapseBelowMap[collapseUntil] : "",
        spaceY ? collapseBelowSpaceY[spaceY] : "",
        cssOverrides
      ],
      ...props,
      children
    }
  );
};

const Column = ({
  width,
  span,
  cssOverrides,
  children,
  ...props
}) => {
  const columnCss = [column];
  if (width) {
    columnCss.push(setWidth(width));
  } else if (span) {
    columnCss.push(setSpan(span));
  } else {
    columnCss.push(flexGrow);
  }
  return /* @__PURE__ */ jsx("div", { css: [columnCss, cssOverrides], ...props, children });
};

const container = css`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${space[3]}px;
	width: 100%;
	${from.mobileLandscape} {
		padding: 0 ${space[5]}px;
	}
	${from.tablet} {
		width: ${breakpoints.tablet}px;
	}
	${from.desktop} {
		width: ${breakpoints.desktop}px;
	}
	${from.leftCol} {
		width: ${breakpoints.leftCol}px;
	}
	${from.wide} {
		width: ${breakpoints.wide}px;
	}
	border-color: ${palette.neutral[86]};
`;
const containerSideBorders = css`
	border-left-style: solid;
	border-right-style: solid;
	border-left-width: 0;
	border-right-width: 0;

	${from.tablet} {
		width: ${breakpoints.tablet + 2}px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	${from.desktop} {
		width: ${breakpoints.desktop + 2}px;
	}
	${from.leftCol} {
		width: ${breakpoints.leftCol + 2}px;
	}
	${from.wide} {
		width: ${breakpoints.wide + 2}px;
	}
`;
const containerTopBorder = css`
	border-top-width: 1px;
	border-top-style: solid;
`;
const containerBorderColor = (color) => css`
	border-color: ${color};
`;
const containerBackground = (color) => css`
	background-color: ${color};
`;

const Container = ({
  element: Element = "section",
  border = false,
  sideBorders = false,
  topBorder = false,
  backgroundColor,
  borderColor,
  cssOverrides,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Element,
    {
      css: [
        backgroundColor && containerBackground(backgroundColor),
        cssOverrides
      ],
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          css: [
            container,
            backgroundColor && containerBackground(backgroundColor),
            topBorder && containerTopBorder,
            (sideBorders || border) && containerSideBorders,
            borderColor && containerBorderColor(borderColor)
          ],
          children
        }
      )
    }
  );
};

const Hide = ({
  children,
  above,
  // deprecated
  below,
  // deprecated
  from: from$1 = above,
  until: until$1 = below
}) => {
  let whenToHide;
  if (until$1) {
    whenToHide = css`
			${until[until$1]} {
				display: none;
			}
		`;
  }
  if (from$1) {
    whenToHide = css`
			${whenToHide}
			${from[from$1]} {
				display: none;
			}
		`;
  }
  return /* @__PURE__ */ jsx("span", { css: whenToHide, children });
};

const stack = css`
	& > * {
		width: 100%;
	}
`;
const stackSpaceStyle = (number) => css`
	& > * + * {
		margin-top: ${space[number]}px;
	}
`;
const stackSpace = {
  1: stackSpaceStyle(1),
  2: stackSpaceStyle(2),
  3: stackSpaceStyle(3),
  4: stackSpaceStyle(4),
  5: stackSpaceStyle(5),
  6: stackSpaceStyle(6),
  9: stackSpaceStyle(9),
  12: stackSpaceStyle(12),
  24: stackSpaceStyle(24)
};

const Stack = ({
  cssOverrides,
  children,
  space,
  ...props
}) => {
  return /* @__PURE__ */ jsx("div", { css: [stack, space ? stackSpace[space] : "", cssOverrides], ...props, children });
};

const collapseUntilTilesSpacing = css`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${space[5]}px;
	}
`;
const collapseUntilTabletTiles = css`
	${until.tablet} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilDesktopTiles = css`
	${until.desktop} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilLeftColTiles = css`
	${until.leftCol} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilWideTiles = css`
	${until.wide} {
		${collapseUntilTilesSpacing}
	}
`;
const collapseUntilWidth = css`
	width: 100% !important;
`;
const tilesCollapseUntilTablet = css`
	& > * {
		${until.tablet} {
			${collapseUntilWidth}
		}
	}
`;
const tilesCollapseUntilDesktop = css`
	& > * {
		${until.desktop} {
			${collapseUntilWidth}
		}
	}
`;
const tilesCollapseUntilleftCol = css`
	& > * {
		${until.leftCol} {
			${collapseUntilWidth}
		}
	}
`;
const tilesCollapseUntilWide = css`
	& > * {
		${until.wide} {
			${collapseUntilWidth}
		}
	}
`;
const tilesGridContainer = css`
	width: 100%;
	${from.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${space[5]}px;
			column-gap: ${space[5]}px;
		}
	}
`;
const gridColumnsStyle = (columns) => css`
	${from.mobileLandscape} {
		grid-template-columns: repeat(${columns}, 1fr);
	}
`;
const tileGridColumns = {
  2: gridColumnsStyle(2),
  3: gridColumnsStyle(3),
  4: gridColumnsStyle(4),
  5: gridColumnsStyle(5)
};

const collapseUntilMap = {
  tablet: tilesCollapseUntilTablet,
  desktop: tilesCollapseUntilDesktop,
  leftCol: tilesCollapseUntilleftCol,
  wide: tilesCollapseUntilWide
};
const collapseUntilColumnsMap = {
  tablet: collapseUntilTabletTiles,
  desktop: collapseUntilDesktopTiles,
  leftCol: collapseUntilLeftColTiles,
  wide: collapseUntilWideTiles
};
const Tiles = ({
  columns,
  collapseBelow,
  // deprecated
  collapseUntil = collapseBelow,
  cssOverrides,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      css: [
        tilesGridContainer,
        tileGridColumns[columns],
        collapseUntil ? collapseUntilColumnsMap[collapseUntil] : "",
        collapseUntil ? collapseUntilMap[collapseUntil] : "",
        cssOverrides
      ],
      ...props,
      children
    }
  );
};

const inline = css`
	display: flex;
	flex-wrap: wrap;
`;
const inlineSpaceStyle = (number) => css`
	margin-left: -${space[number]}px;
	& > * {
		margin-left: ${space[number]}px;
		margin-bottom: ${space[number]}px;
	}
`;
const inlineSpace = {
  1: inlineSpaceStyle(1),
  2: inlineSpaceStyle(2),
  3: inlineSpaceStyle(3),
  4: inlineSpaceStyle(4),
  5: inlineSpaceStyle(5),
  6: inlineSpaceStyle(6),
  9: inlineSpaceStyle(9),
  12: inlineSpaceStyle(12),
  24: inlineSpaceStyle(24)
};

const Inline = ({
  cssOverrides,
  children,
  space,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      css: [inline, space ? inlineSpace[space] : "", cssOverrides],
      ...props,
      children
    }
  );
};

const linkContents = ({
  children,
  iconSvg,
  iconSide
}) => {
  const spacer = /* @__PURE__ */ jsx(Fragment$1, { children: "\xA0\xA0\xA0\xA0\xA0\xA0" }, "spacer");
  const linkContents2 = [children];
  if (iconSvg) {
    if (iconSide === "left") {
      linkContents2.unshift(
        spacer,
        cloneElement(iconSvg, {
          key: "svg"
        })
      );
    } else {
      linkContents2.push(
        spacer,
        cloneElement(iconSvg, {
          key: "svg"
        })
      );
    }
  }
  return linkContents2;
};

const link = css`
	position: relative;
	${textSans.medium()};
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
	text-underline-offset: 5%;

	display: inline;
	align-items: center;

	&:focus {
		${focusHalo};
	}

	&:hover {
		/* If the hover text decoration thickness is not set, we default to the initial value. */
		text-decoration-thickness: var(--source-text-decoration-thickness, auto);
	}
`;
const buttonLink = css`
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
`;
const primary = (link2) => css`
	color: ${link2.textPrimary};

	&:hover {
		color: ${link2.textPrimaryHover};
	}
`;
const secondary = (link2) => css`
	color: ${link2.textSecondary};

	&:hover {
		color: ${link2.textSecondaryHover};
	}
`;
const icon = css`
	svg {
		fill: currentColor;
		/*
		TODO: hardcoded bottom margin to vertically align
		icons with text. This needs to be revisited when
		the rules of icon spacing have been formalised
		 */
		margin-bottom: -3px;
		width: ${width.iconXsmall}px;
		height: auto;
	}
`;
const iconRight = css`
	svg {
		margin-left: -${space[5]}px;
	}
`;
const iconLeft = css`
	svg {
		margin-left: -${space[6]}px;
		margin-right: ${space[1]}px;
	}
`;
const priorities = {
  primary,
  secondary
};
const iconSides = {
  right: iconRight,
  left: iconLeft
};
const linkStyles = ({
  isButton,
  priority,
  iconSvg,
  iconSide = "left",
  cssOverrides,
  theme
}) => {
  const mergedTheme = (providerTheme) => mergeThemes(themeLink, theme, providerTheme);
  return (providerTheme) => [
    link,
    isButton ? buttonLink : "",
    priorities[priority](mergedTheme(providerTheme.link)),
    iconSvg ? icon : "",
    iconSvg ? iconSides[iconSide] : "",
    cssOverrides
  ];
};

const Link = ({
  priority = "primary",
  icon: iconSvg,
  iconSide = "left",
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      css: linkStyles({
        priority,
        iconSvg,
        iconSide,
        cssOverrides,
        theme
      }),
      ...props,
      children: linkContents({ children, iconSvg, iconSide })
    }
  );
};

const ButtonLink = ({
  priority = "primary",
  icon: iconSvg,
  iconSide = "left",
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      css: linkStyles({
        isButton: true,
        priority,
        iconSvg,
        iconSide,
        cssOverrides,
        theme
      }),
      ...props,
      children: linkContents({ children, iconSvg, iconSide })
    }
  );
};

const fieldset = (radio2) => css`
	${resets.fieldset};

	&[aria-invalid='true'] input {
		border: 2px solid ${radio2.borderError};

		&:not(:checked):hover,
		&:active {
			border: 2px solid ${radio2.borderHover};
		}
	}
`;
const radioContainer = (radio2) => css`
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${height.inputMedium}px;
	cursor: pointer;

	&:hover {
		input {
			border: 2px solid ${radio2.borderHover};
		}
	}
`;
const label = css`
	cursor: pointer;
`;
const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;
const radio = (radio2) => css`
	flex: 0 0 auto;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 1px solid currentColor;
	border-radius: 50%;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${radio2.borderUnselected};

	&:checked {
		border: 2px solid ${radio2.borderSelected};
		color: ${radio2.fillSelected};
	}

	&:focus {
		${focusHalo};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes radio buttons look horrible on older browsers
	*/
	@supports (${appearance}) {
		appearance: none;
		background-color: ${radio2.fillUnselected};

		&:after {
			background: currentColor;
			position: absolute;
			content: '';
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${transitions.short};
		}

		&:checked {
			&:after {
				transform: scale(0.6);
			}
		}
	}
`;
const labelText = (radio2) => css`
	${textSans.medium()};
	color: ${radio2.textLabel};
	width: 100%;
`;
const labelTextWithSupportingText = css`
	${textSans.medium({ fontWeight: "bold" })};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`;
const supportingText = (radio2) => css`
	${textSans.small()};
	color: ${radio2.textSupporting};
`;

const RadioGroup = ({
  id,
  name,
  label,
  hideLabel = false,
  supporting,
  orientation = "vertical",
  error,
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  const groupId = id ?? generateSourceId();
  const legend = label ? /* @__PURE__ */ jsx(
    Legend,
    {
      text: label,
      supporting,
      hideLabel,
      theme
    }
  ) : "";
  const message = error && /* @__PURE__ */ jsx(InlineError, { id: descriptionId(groupId), theme, children: error });
  const radioContainers = /* @__PURE__ */ jsx(Fragment, { children: Children.map(children, (child) => {
    return cloneElement(
      child,
      Object.assign(
        error ? {
          "aria-describedby": descriptionId(groupId)
        } : {},
        {
          name
        }
      )
    );
  }) });
  const mergedTheme = (providerTheme) => mergeThemes(
    themeRadioGroup,
    theme,
    providerTheme.radio
  );
  return /* @__PURE__ */ jsxs(
    "fieldset",
    {
      "aria-invalid": !!error,
      id: groupId,
      css: (providerTheme) => [
        fieldset(mergedTheme(providerTheme)),
        cssOverrides
      ],
      ...props,
      children: [
        legend,
        message,
        orientation === "vertical" ? /* @__PURE__ */ jsx(Stack, { children: radioContainers }) : /* @__PURE__ */ jsx(Inline, { space: 5, children: radioContainers })
      ]
    }
  );
};

const Radio = ({
  id,
  label: labelContent,
  value,
  supporting,
  checked,
  defaultChecked,
  cssOverrides,
  theme,
  ...props
}) => {
  const radioId = id ?? generateSourceId();
  const isChecked = () => {
    if (checked != null) {
      return checked;
    }
    return !!defaultChecked;
  };
  const mergedTheme = (providerTheme) => mergeThemes(
    themeRadio,
    theme,
    providerTheme.radio,
    transformProviderTheme$1
  );
  const LabelText = ({
    hasSupportingText,
    children
  }) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        css: (providerTheme) => [
          hasSupportingText ? labelTextWithSupportingText : "",
          labelText(mergedTheme(providerTheme))
        ],
        children
      }
    );
  };
  const SupportingText = ({ children }) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        css: (providerTheme) => supportingText(mergedTheme(providerTheme)),
        children
      }
    );
  };
  const radioControl = /* @__PURE__ */ jsx(
    "input",
    {
      id: radioId,
      type: "radio",
      css: (providerTheme) => [
        radio(mergedTheme(providerTheme)),
        cssOverrides
      ],
      value,
      defaultChecked: defaultChecked ?? void 0,
      checked: checked != null ? isChecked() : void 0,
      ...props
    }
  );
  const labelledRadioControl = /* @__PURE__ */ jsxs(
    "div",
    {
      css: (providerTheme) => [
        radioContainer(mergedTheme(providerTheme)),
        supporting ? labelWithSupportingText : ""
      ],
      children: [
        radioControl,
        /* @__PURE__ */ jsx("label", { htmlFor: radioId, css: label, children: supporting ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(LabelText, { hasSupportingText: true, children: labelContent }),
          /* @__PURE__ */ jsx(SupportingText, { children: supporting })
        ] }) : /* @__PURE__ */ jsx(LabelText, { children: labelContent }) })
      ]
    }
  );
  return /* @__PURE__ */ jsx(Fragment, { children: labelContent ?? supporting ? labelledRadioControl : radioControl });
};

const Option = ({
  cssOverrides,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx("option", { css: cssOverrides, ...props, children });
};

const InlineSuccess = ({
  children,
  size = "medium",
  cssOverrides,
  theme,
  ...props
}) => /* @__PURE__ */ jsxs(
  "span",
  {
    css: (providerTheme) => [
      inlineSuccess(mergedTheme(providerTheme.userFeedback, theme), size),
      cssOverrides
    ],
    role: "alert",
    ...props,
    children: [
      /* @__PURE__ */ jsx(SvgTickRound, {}),
      children
    ]
  }
);

const errorInput$2 = (select2) => css`
	border: 2px solid ${select2.borderError};
	border-radius: 4px;
	color: ${select2.textError};
	/* When select is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 2px solid ${select2.borderError};
	}
`;
const successInput$2 = (select2) => css`
	border: 2px solid ${select2.borderSuccess};
	border-radius: 4px;
	color: ${select2.textSuccess};
	/* When select is active and in an success state, we want the border to remain the same. */
	&:active {
		border: 2px solid ${select2.borderSuccess};
	}
`;
const errorChevron = (select2) => css`
	svg {
		fill: ${select2.textError};
	}
`;
const successChevron = (select2) => css`
	svg {
		fill: ${select2.textSuccess};
	}
`;
const selectWrapper = (select2) => css`
	position: relative;

	svg {
		display: none;
		position: absolute;
		right: ${space[3]}px;
		top: ${space[2]}px;
		width: ${width.iconMedium}px;
		height: ${height.iconMedium}px;
		fill: ${select2.textUserInput};
		pointer-events: none;
	}
`;
const select = (select2) => css`
	color: ${select2.textUserInput};
	box-sizing: border-box;
	height: ${height.inputMedium}px;
	width: 100%;
	${textSans.medium()};
	background-color: ${select2.backgroundInput};
	border: 1px solid ${select2.border};
	border-radius: 4px;
	padding-left: ${space[2]}px;

	@supports (${appearance}) {
		appearance: none;
		padding-right: ${space[2]}px;

		& ~ svg {
			display: block;
		}
	}

	&:focus {
		${focusHalo};
	}

	&:invalid {
		${errorInput$2(select2)};
	}
`;
css`
	margin-top: ${space[1]}px;
`;
const supportingTextMargin$2 = css`
	margin-top: 6px;
`;
const inlineMessageMargin$2 = css`
	margin-top: ${space[1]}px;
`;

const Select = ({
  id,
  label: labelText,
  optional = false,
  hideLabel = false,
  supporting,
  error,
  success,
  cssOverrides,
  children,
  theme,
  ...props
}) => {
  const selectId = id ?? generateSourceId();
  const mergedTheme = (providerTheme) => mergeThemes(
    themeSelect,
    theme,
    providerTheme,
    transformProviderTheme
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Label,
      {
        text: labelText,
        optional: !!optional,
        supporting,
        hideLabel,
        htmlFor: selectId,
        theme,
        children: [
          error && /* @__PURE__ */ jsx("div", { css: inlineMessageMargin$2, children: /* @__PURE__ */ jsx(InlineError, { id: descriptionId(selectId), theme, children: error }) }),
          !error && success && /* @__PURE__ */ jsx("div", { css: inlineMessageMargin$2, children: /* @__PURE__ */ jsx(InlineSuccess, { id: descriptionId(selectId), theme, children: success }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        css: (theme2) => [
          selectWrapper(mergedTheme(theme2.select)),
          error ? errorChevron(mergedTheme(theme2.select)) : "",
          !error && success ? successChevron(mergedTheme(theme2.select)) : "",
          !error && !success ? supportingTextMargin$2 : ""
        ],
        children: [
          /* @__PURE__ */ jsx(
            "select",
            {
              css: (theme2) => [
                select(mergedTheme(theme2.select)),
                error ? errorInput$2(mergedTheme(theme2.select)) : "",
                !error && success ? successInput$2(mergedTheme(theme2.select)) : "",
                cssOverrides
              ],
              "aria-required": !optional,
              "aria-invalid": !!error,
              "aria-describedby": error ?? success ? descriptionId(selectId) : "",
              id: selectId,
              ...props,
              children
            }
          ),
          /* @__PURE__ */ jsx(SvgChevronDownSingle, { theme: { fill: theme?.iconFill } })
        ]
      }
    )
  ] });
};

const textAreaSize = {
  medium: textSans.medium(),
  small: textSans.xsmall()
};
const errorInput$1 = (textArea2) => css`
	border: 2px solid ${textArea2.borderError};
	border-radius: 4px;
	color: ${textArea2.textError};
	margin-top: 0;
`;
const successInput$1 = (textArea2) => css`
	border: 2px solid ${textArea2.borderSuccess};
	border-radius: 4px;
	color: ${textArea2.textSuccess};
	margin-top: 0;
`;
const textArea = (textArea2, size) => css`
	box-sizing: border-box;
	${textAreaSize[size]};
	color: ${textArea2.textUserInput};
	background-color: ${textArea2.backgroundInput};
	border: 1px solid ${textArea2.border};
	border-radius: 4px;
	padding: ${space[2]}px ${space[2]}px 0 ${space[2]}px;

	&:focus {
		${focusHalo};
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
		We automatically apply error styling to fields in an invalid state,
		but stop short of applying it to empty required fields.

		Note: the following class will only be applied to a controlled
		component: https://reactjs.org/docs/forms.html#controlled-components
		*/
		.src-has-value {
			${errorInput$1(textArea2)}
		}
	}
`;
const labelMargin$1 = css`
	margin-top: ${space[1]}px;
`;
const supportingTextMargin$1 = css`
	margin-top: 6px;
`;
const inlineMessageMargin$1 = css`
	margin-top: 2px;
`;
const widthFluid$1 = css`
	width: 100%;
`;

const themeTextArea = {
  textUserInput: palette.neutral[7],
  textLabel: palette.neutral[7],
  textOptional: palette.neutral[46],
  textSupporting: palette.neutral[46],
  textError: palette.neutral[7],
  textSuccess: palette.success[400],
  backgroundInput: palette.neutral[100],
  border: palette.neutral[46],
  borderError: palette.error[400],
  borderSuccess: palette.success[400]
};

const TextArea = ({
  id,
  label: labelText,
  optional = false,
  hideLabel = false,
  supporting,
  size = "medium",
  error,
  success,
  cssOverrides,
  rows = 3,
  className,
  value,
  theme,
  ...props
}) => {
  const textAreaId = id ?? generateSourceId();
  const getClassName = () => {
    const HAS_VALUE_CLASS = "src-has-value";
    if (className) {
      return `${className}${value ? ` ${HAS_VALUE_CLASS}` : ""}`;
    }
    if (value) {
      return HAS_VALUE_CLASS;
    }
    return void 0;
  };
  const mergedTheme = { ...themeTextArea, ...theme };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Label,
      {
        text: labelText,
        supporting,
        optional: !!optional,
        theme,
        size,
        hideLabel,
        htmlFor: textAreaId,
        children: [
          error && /* @__PURE__ */ jsx("div", { css: inlineMessageMargin$1, children: /* @__PURE__ */ jsx(
            InlineError,
            {
              id: descriptionId(textAreaId),
              theme,
              size,
              children: error
            }
          ) }),
          !error && success && /* @__PURE__ */ jsx("div", { css: inlineMessageMargin$1, children: /* @__PURE__ */ jsx(
            InlineSuccess,
            {
              id: descriptionId(textAreaId),
              theme,
              size,
              children: success
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        css: [
          widthFluid$1,
          textArea(mergedTheme, size),
          supporting ? supportingTextMargin$1 : labelMargin$1,
          error ? errorInput$1(mergedTheme) : "",
          !error && success ? successInput$1(mergedTheme) : "",
          cssOverrides
        ],
        id: textAreaId,
        "aria-required": !optional,
        "aria-invalid": !!error,
        "aria-describedby": error ?? success ? descriptionId(textAreaId) : "",
        required: !optional,
        rows,
        className: getClassName(),
        value,
        ...props
      }
    )
  ] });
};

const inputSizeMedium = css`
	${textSans.medium()};
	height: ${size.medium}px;
`;
const inputSizeSmall = css`
	${textSans.xsmall()};
	height: ${size.small}px;
`;
const inputSize = {
  medium: inputSizeMedium,
  small: inputSizeSmall
};
const errorInput = (textInput2) => css`
	border: 2px solid ${textInput2.borderError};
	border-radius: 4px;
	color: ${textInput2.textError};
	margin-top: 0;
`;
const successInput = (textInput2) => css`
	border: 2px solid ${textInput2.borderSuccess};
	border-radius: 4px;
	color: ${textInput2.textSuccess};
	margin-top: 0;
`;
const textInput = (textInput2, size2) => css`
	box-sizing: border-box;
	${inputSize[size2]};
	color: ${textInput2.textUserInput};
	background-color: ${textInput2.backgroundInput};
	border: 1px solid ${textInput2.border};
	border-radius: 4px;
	padding: 0 ${space[2]}px;

	&:focus {
		${focusHalo}
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
		&[value]:not([value='']) {
			${errorInput(textInput2)};
		}
	}
`;
const labelMargin = css`
	margin-top: ${space[1]}px;
`;
const supportingTextMargin = css`
	margin-top: 6px;
`;
const inlineMessageMargin = css`
	margin-top: 2px;
`;
const widthFluid = css`
	width: 100%;
`;
const width30 = css`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`;
const width10 = css`
	width: 18ex;
`;
const width4 = css`
	width: 9ex;
`;

const widths = {
  30: width30,
  10: width10,
  4: width4
};
const TextInput = ({
  id,
  label: labelText,
  optional = false,
  hideLabel = false,
  supporting,
  size = "medium",
  width,
  error,
  success,
  theme,
  cssOverrides,
  ...props
}) => {
  const textInputId = id ?? generateSourceId();
  const mergedTheme = (providerTheme) => mergeThemes(
    themeTextInput,
    theme,
    providerTheme.textInput
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Label,
      {
        text: labelText,
        optional: !!optional,
        hideLabel,
        supporting,
        theme,
        size,
        htmlFor: textInputId,
        children: [
          error && /* @__PURE__ */ jsx("div", { css: inlineMessageMargin, children: /* @__PURE__ */ jsx(
            InlineError,
            {
              id: descriptionId(textInputId),
              theme,
              size,
              children: error
            }
          ) }),
          !error && success && /* @__PURE__ */ jsx("div", { css: inlineMessageMargin, children: /* @__PURE__ */ jsx(
            InlineSuccess,
            {
              id: descriptionId(textInputId),
              theme,
              size,
              children: success
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        css: (providerTheme) => [
          width ? widths[width] : widthFluid,
          textInput(mergedTheme(providerTheme), size),
          supporting ? supportingTextMargin : labelMargin,
          error ? errorInput(mergedTheme(providerTheme)) : "",
          !error && success ? successInput(mergedTheme(providerTheme)) : "",
          cssOverrides
        ],
        type: "text",
        id: textInputId,
        "aria-required": !optional,
        "aria-invalid": !!error,
        "aria-describedby": error ?? success ? descriptionId(textInputId) : "",
        required: !optional,
        ...props
      }
    )
  ] });
};

export { Accordion, AccordionRow, BackToTop, Button, ButtonLink, Checkbox, CheckboxGroup, ChoiceCard, ChoiceCardGroup, Column, Columns, Container, Footer, Hide, Inline, InlineError, InlineSuccess, Label, Legend, Link, LinkButton, Option, Radio, RadioGroup, Select, Stack, SvgAlert, SvgAlertPhone, SvgAlertRound, SvgAlertTriangle, SvgAppleBrand, SvgArrowContract, SvgArrowDownStraight, SvgArrowExpand, SvgArrowLeftStraight, SvgArrowOutdent, SvgArrowPopOut, SvgArrowRightStraight, SvgArrowScroll, SvgArrowUpAndDownSmall, SvgArrowUpStraight, SvgArrowUpStraightSmall, SvgAsterisk, SvgAudio, SvgAudioMute, SvgBookMark, SvgBookMarkCross, SvgCalendar, SvgCamera, SvgCheckmark, SvgChevronDownDouble, SvgChevronDownSingle, SvgChevronDownSingleXsmall, SvgChevronLeftDouble, SvgChevronLeftSingle, SvgChevronRightDouble, SvgChevronRightSingle, SvgChevronUpDouble, SvgChevronUpSingle, SvgClock, SvgClockBaselineSmall, SvgCreditCard, SvgCross, SvgCrossRound, SvgCrossedOutCloud, SvgCrosswords, SvgDirectDebit, SvgDirectDebitWide, SvgDocument, SvgDownload, SvgDragHandle, SvgEdit, SvgEllipsis, SvgEnvelope, SvgExclamation, SvgExternal, SvgEye, SvgEyeStrike, SvgFacebook, SvgFacebookBrand, SvgFacebookMessenger, SvgFilter, SvgGift, SvgGlobe, SvgGoogleBrand, SvgGps, SvgGuardianBestWebsiteLogo, SvgGuardianLiveLogo, SvgGuardianLogo, SvgHandPointed, SvgHouse, SvgHouseCross, SvgHousePlus, SvgHouseSetting, SvgIndent, SvgInfo, SvgInfoRound, SvgLinkedIn, SvgLocationMarker, SvgMagnifyingGlass, SvgMagnifyingGlassMinus, SvgMagnifyingGlassPlus, SvgMagnifyingGlassSadFace, SvgMediaControlsBack, SvgMediaControlsForward, SvgMediaControlsPause, SvgMediaControlsPlay, SvgMediaControlsStop, SvgMenu, SvgMessage, SvgMessageRound, SvgMessenger, SvgMinus, SvgMoon, SvgNewsletter, SvgNotificationsOff, SvgNotificationsOn, SvgOfflineCloud, SvgPadlock, SvgPartyOfThree, SvgPayPal, SvgPayPalBrand, SvgPerson, SvgPersonCross, SvgPersonPlus, SvgPersonRound, SvgPersonTick, SvgPhone, SvgPinned, SvgPinterest, SvgPlay, SvgPlus, SvgQuote, SvgReload, SvgRoundelBrand, SvgRoundelBrandInverse, SvgRoundelDefault, SvgRoundelInverse, SvgSettings, SvgShare, SvgShareCallout, SvgSignalBrand, SvgSpeechBubble, SvgSpeechBubbleCross, SvgSpeechBubblePlus, SvgSpinner, SvgStar, SvgStarOutline, SvgTelegramBrand, SvgTextLarge, SvgTextSize, SvgTextSmall, SvgTickRound, SvgTwitter, SvgUpload, SvgVideo, SvgWhatsApp, SvgWhatsAppBrand, TextArea, TextInput, Tiles, accordionThemeDefault, buttonThemeBrand, buttonThemeBrandAlt, buttonThemeDefault, buttonThemeReaderRevenue, buttonThemeReaderRevenueBrand, buttonThemeReaderRevenueBrandAlt, checkboxThemeBrand, checkboxThemeDefault, choiceCardThemeDefault, footerThemeBrand, labelThemeBrand, labelThemeDefault, linkThemeBrand, linkThemeBrandAlt, linkThemeDefault, radioThemeBrand, radioThemeDefault, selectThemeDefault, textInputThemeDefault, themeAccordion, themeButton, themeButtonBrand, themeButtonBrandAlt, themeButtonReaderRevenue, themeButtonReaderRevenueBrand, themeButtonReaderRevenueBrandAlt, themeCheckbox, themeCheckboxBrand, themeCheckboxGroup, themeCheckboxGroupBrand, themeChoiceCard, themeChoiceCardGroup, themeLabel, themeLabelBrand, themeLink, themeLinkBrand, themeLinkBrandAlt, themeRadio, themeRadioBrand, themeRadioGroup, themeRadioGroupBrand, themeSelect, themeTextArea, themeTextInput, themeUserFeedback, themeUserFeedbackBrand, userFeedbackThemeBrand, userFeedbackThemeDefault };
