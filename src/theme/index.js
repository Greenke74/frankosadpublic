import { createTheme } from '@mui/material/styles'
import spacing from './spacing';
import typography from './typography';
import palette from './palette';
import lights from './lights';
import shadows from './shadows';

const muiTheme = createTheme({
  typography,
  palette,
  spacing,
  lights,
  shadows
})

export default muiTheme;