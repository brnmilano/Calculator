import clsx from 'clsx';
import styles from './styles.module.scss';
import {
  Button as ButtonMUI,
  ButtonProps as MaterialButtonProps,
  CircularProgress,
} from "@mui/material";

interface ButtonProps extends MaterialButtonProps {
  loading?: boolean;
  theme?: "primary";
}

export function Button({
  theme = "primary",
  children,
  color = "primary",
  size = "large",
  variant = "outlined",
  loading,
  disabled,
  ...rest
}: ButtonProps) {
  const outlinedButtonColor = clsx(
    color === "primary" && styles.buttonOutlined,
  );

  return (
    <ButtonMUI
      {...rest}
      className={`${styles.button} ${disabled && styles.buttonDisabled}`}
      classes={{
        ...rest.classes,
        outlined: clsx(outlinedButtonColor, rest.classes?.outlined),
        sizeLarge: clsx(styles.buttonSizeLarge, rest.classes?.sizeLarge),
        sizeMedium: clsx(styles.butonSizeMedium, rest.classes?.sizeMedium),
        text: clsx(styles.textButton, rest.classes?.text),
      }}
      color={color}
      size={size}
      sx={{ height: 45, whiteSpace: "nowrap", ...rest.sx }}
      variant={variant}
      disabled={disabled}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </ButtonMUI>
  );
}
