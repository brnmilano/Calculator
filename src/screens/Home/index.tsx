import { Box } from "@mui/material"
import styles from "./styles.module.scss";
import ToggleColorMode from "../../components/Theme";

export function Home() {
  return (
    <Box className={styles.container}>
      <Box>
        <ToggleColorMode />
      </Box>
      <Box>Home</Box>
    </Box>
  );
}