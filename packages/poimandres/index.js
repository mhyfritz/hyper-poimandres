const backgroundColor = "#1b1e28";
const foregroundColor = "#a6accd";

const black = "#1b1e28";
const blue = "#89ddff";
const cyan = "#89ddff";
const green = "#5DE4c7";
const magenta = "#FCC5E9";
const red = "#d0679d";
const white = "#ffffff";
const yellow = "#fffac2";

const lightBlack = "#a6accd";
const lightBlue = "#ADD7FF";
const lightCyan = "#ADD7FF";
const lightGreen = "#5DE4c7";
const lightMagenta = "#FCC5E9";
const lightRed = "#d0679d";
const lightWhite = "#ffffff";
const lightYellow = "#fffac2";

const borderColor = "#00000000";

const cursorColor = foregroundColor;
const cursorAccentColor = backgroundColor;

const selectionColor = "#717cb425";

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
    css: `
    /* source: https://github.com/sindresorhus/hyper-snazzy */

    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }

    /* Fade the title of inactive tabs and the content of inactive panes */
    .tab_text,
    .term_term {
      opacity: 0.6;
      will-change: opacity;
    }
    .tab_active .tab_text,
    .term_active .term_term {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
    }

    /* Allow custom css / overrides */
    ${config.css}
  `,
  });

