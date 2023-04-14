import { createTheme } from "@mui/material/styles";
import { font_family } from "../variables";

const theme = createTheme({
  typography: {
    fontFamily: [font_family, "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1400,
      xl: 1536,
    },
  },
});

export default theme;
