import palette from "./palette";

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  };
}

const typography = {
  fontFamily: ["Montserrat", 'Arial', 'Helvetica', 'sans-serif'].join(','),
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: `clamp(22px, calc(16px + 2vw), 40px)`,
    fontWeight: 600,
    color: palette.primary.main
  },
  h2: {
    fontSize: `clamp(20px, calc(14px + 2vw), 36px)`,
    fontWeight: 500,
    color: palette.text.white
  },
  h3: {
    fontSize: `clamp(18px, calc(12px + 2vw), 30px)`,
    fontWeight: 500,
    color: palette.text.white
  },
  h4: {
    fontSize: `clamp(16px, calc(10px + 2vw), 26px)`,
    fontWeight: 500,
    color: palette.text.white,
    letterSpacing: 1.08
  },
  body1: {
    fontSize: `clamp(14px, calc(10px + 2vw), 20px)`,
    fontWeight: 400,
    color: palette.text.white
  },
  body2: {
    fontSize: `clamp(12px, calc(12px + 0.6vw), 18px)`,
    fontWeight: 400,
    lineHeight: '155%',
    color: palette.text.white
  },
  caption: {
    fontSize: `clamp(12px, calc(8px + 2vw), 16px)`,
    fontWeight: 400,
    color: palette.text.white
  },
  button: {
    fontWeight: 600,
    textTransform: 'none',
    fontSize: `clamp(12px, calc(8px + 2vw), 16px)`,
    color: palette.bg.light
  },
  smallButton: {
    fontWeight: 500,
    textTransform: 'none',
    fontSize: `clamp(12px, calc(6px + 0.5vw), 14px)`,
    color: palette.text.white
  }
}

export default typography;