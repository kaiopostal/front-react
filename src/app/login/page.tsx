"use client";
import * as React from "react";
import { useState, useCallback } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/uteis/copyright";
import { Form } from "./Interface";
import { api } from "../../services/axios";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useRouter } from 'next/navigation'
const defaultTheme = createTheme();

const initialFormLogin: Form = {
  cad_email: "",
  cad_senha: "",
  remember: true,
  id_planta: 1
};

export default function SignIn() {

  const router = useRouter();

  const [formLogin, setFormLogin] = useState<Form>(initialFormLogin);

  const updateLoginDataHandler = useCallback(
    (type) => (event) => {
      setFormLogin({ ...formLogin, [type]: event.target.value });
    },
    [formLogin]
  );

  const formHanlder = useCallback(
    () => (event) => {
      event.preventDefault();
      login(formLogin);
    },
    [formLogin]
  );
  
  function setInfoUser(data){
    localStorage.setItem("crm_token", data.token);
    localStorage.setItem("username", data.nome);
    router.push('/dashboard')
  };

  async function login(dadosForm: Form) {
    try {
      let { data } = await api.post("login", dadosForm);
      setInfoUser(data)
      
    } catch (e) {
      console.log(e.request.reponse);
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={formHanlder()}
            noValidate
            sx={{ mt: 5 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              autoFocus
              label="Email"
              value={formLogin.cad_email}
              onChange={updateLoginDataHandler("cad_email")}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              autoFocus
              label="Senha"
              value={formLogin.cad_senha}
              onChange={updateLoginDataHandler("cad_senha")}
            />

            <FormControlLabel
              control={<Checkbox value={formLogin.remember} onChange={updateLoginDataHandler("remember")} color="primary" />}
              label="Lembrar-me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ENTRAR
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
