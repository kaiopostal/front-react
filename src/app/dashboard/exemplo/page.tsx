"use client";
import * as React from "react";
import { useState, useCallback } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../../components/uteis/copyright";
import { Form } from "./Interface";
import { api } from "../../../services/axios";
import CustomAccordion from "../../../components/accordion/customAccordion";
import { Box, TextField, Grid, Button } from "@mui/material";
import CustomTable from "../../../components/table/customTable";

const defaultTheme = createTheme();

export default function Exemplo() {

  const initialFormLogin: Form = {
    usu_nome: "",
    usu_login: "",
    usu_email: ""
  };

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
      search(formLogin);
    },
    [formLogin]
  );

  async function search(dadosForm: Form) {
    try {
      let { data } = await api.post("login", dadosForm);
      
    } catch (e) {
      console.log(e.request.reponse);
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box component="form" onSubmit={formHanlder()} noValidate sx={{ mt: 10 }}>
        <CustomAccordion label="Filtros">

          <Grid container spacing={1}>

          <Grid item xs>
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                margin="normal"
                label="Nome"
                variant="outlined"
                value={formLogin.usu_nome}
                onChange={updateLoginDataHandler("usu_nome")}
              />
            </Grid>

             <Grid item xs>
              <TextField
                id="usu_login"
                fullWidth
                size="small"
                margin="normal"
                label="Login"
                variant="outlined"
                value={formLogin.usu_login}
                onChange={updateLoginDataHandler("usu_login")}
              />
            </Grid>

            <Grid item xs>
              <TextField
                id="usu_email"
                fullWidth
                size="small"
                margin="normal"
                label="Email"
                variant="outlined"
                value={formLogin.usu_email}
                onChange={updateLoginDataHandler("usu_email")}
              />
            </Grid>
          </Grid>

          <Button
              type="submit"
              variant="contained"
              style={{float: "right"}}
              sx={{ mt: 3, mb: 2 }}
            >
              ENTRAR
            </Button>
        </CustomAccordion>

      <CustomTable/>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </ThemeProvider>
  );
}
