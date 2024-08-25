import * as React from "react";
import { Button, TextField, Input } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useStyles from "./Signupstyle";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs=8">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
            paddingLeft: 0,
          }}
        >
          <Typography component="h1" variant="h5" justifyContent="flex-end">
            <p style={{ fontSize: "25px", color: "red" }}>SIGN UP.</p>
            <p style={{ fontSize: "15px" }}>Give us some of your information to get free access to SLP</p>
            <p style={{ fontSize: "10px" }}>Required file*</p>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <p style={{ mt: 0, mb: 0 }}>Full Name*</p>
                <TextField className={classes.TextField} variant="outlined" autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="enter your full name" autoFocus />
              </Grid>
              <Grid item xs={12}>
                <p style={{ mt: 0, mb: 0 }}>Email*</p>
                <TextField required fullWidth id="email" variant="outlined" label="enter your email adress" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12} style={{ mt: 0, mb: 0 }}>
                <p>Password*</p>
                <TextField required fullWidth variant="outlined" name="password" label="enter your password" type="password" id="password" autoComplete="new-password" />
                {/* <Input
                  className={classes.Input}
                  required
                  fullWidth
                  variant="outlined"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                /> */}
                <p style={{ fontSize: "10px" }}>Make sure it's at least 8 character</p>
              </Grid>
            </Grid>
            <Button className={classes.buttonSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
