const backgroundColor = "#FEFEFF";
const foregroundColor = "#969cbd";

const black = "#FEFEFF";
const blue = "#8ABACD";
const cyan = "#8ABACD";
const green = "#01DAB2";
const magenta = "#EB8394";
const red = "#ff2090";
const white = "#000000";
const yellow = "#FFD467";

const lightBlack = "#969cbd";
const lightBlue = "#0EBFFF";
const lightCyan = "#0EBFFF";
const lightGreen = "#01DAB2";
const lightMagenta = "#EB8394";
const lightRed = "#ff2090";
const lightWhite = "#000000";
const lightYellow = "#FFD467";

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

