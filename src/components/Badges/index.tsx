import { ThemeProvider, createTheme } from "@mui/material";
import Chip from "@mui/material/Chip";

type BadgesProps = {
  text?: string;
  color: "primary" | "secondary" | "error" | "warning";
};

const Badges = ({ text, color }: BadgesProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F3F4F6",
        contrastText: "#4B5563",
      },
      secondary: {
        main: "#DEF7EC",
        contrastText: "#03543F",
      },
      error: {
        main: "#FBD5D5",
        contrastText: "#9B1C1C",
      },
      warning: {
        main: "#E1EFFE",
        contrastText: "#1E429F",
      },
    },
  });

  const textColor = theme.palette[color].text;

  return (
    <ThemeProvider theme={theme}>
      <Chip
        label={text}
        color={color}
        style={{ color: textColor }}
        variant="filled"
      />
    </ThemeProvider>
  );
};

export default Badges;
