import { Badge, createTheme, ThemeProvider } from "@mui/material";

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

const BadgesNumber = ({ badgeContent, color, className }) => {
  const textColor = theme.palette[color].contrastText;

  return (
    <ThemeProvider theme={theme}>
      <Badge
        badgeContent={badgeContent}
        color={color}
        className={className}
        style={{ color: textColor }}
      />
    </ThemeProvider>
  );
};

export default BadgesNumber;
