function createGradient(color1, color2, direction = 'bottom') {
  return `linear-gradient(to ${direction}, ${color1}, ${color2})`;
}

const PRIMARY_COLOR = {
  main: "#CDBA65",
  disabled: "#9c8f50",
};

const SECONDARY_COLOR = {
  main: "#b9c9b5",
};

const TEXT_COLOR = {
  white: "#edefee",
  darker: '#99a79e',
  secondary: "#B9C9B5",
  disabled: "rgba(193,193,193,0.38)",
  hint: "#B9C9B5",
  accent: "#B9C9B5"
};

const BG_COLOR = {
  main: "#171c18",
  block: "#1b211d",
  light: "#1D2620",
  lighter: "#202D24",
};

const palette = {
  type: "dark",
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  text: TEXT_COLOR,
  bg: BG_COLOR,
  success: {
    main: "#4caf50",
  },
  divider: "rgba(205,186,101,0.27)",
  gradients: {
    heading: createGradient(BG_COLOR.lighter, BG_COLOR.light, 'right'),
  },
};

export default palette;
