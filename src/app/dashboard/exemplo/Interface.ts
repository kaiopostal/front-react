export interface Form {
    usu_nome: string;
    usu_login: string;
    usu_email: string;
}

export interface Usuario {
  usu_nome: string;
  usu_login: string;
  usu_email: string;
}

export interface UsuariosList extends Array<Usuario> {
}
