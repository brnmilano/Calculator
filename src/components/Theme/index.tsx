import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from "./styles.module.scss";
import { createContext, useContext, useMemo, useState } from 'react';
import { Home } from '../../screens/Home';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

function DarkMode() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Box className={styles.darkLightModeWrapper}>
        <Box className={styles.themeWrapper}>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            <DarkModeIcon />
          </IconButton>

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            <LightModeIcon />
          </IconButton>
        </Box>

        <Home />
      </Box>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <DarkMode />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}