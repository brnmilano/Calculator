import { Box } from "@mui/material"
import styles from "./styles.module.scss";
import ToggleColorMode from "../../components/Theme";

export function Home() {
  return (
    <Box className={styles.container}>
      <Box>Aqui é a home</Box>
    </Box>
  );
}