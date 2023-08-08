export interface Form {
    cad_email: string;
    cad_senha: string;
    remember: boolean;
    id_planta: number
}


export interface TokenLogin {
  token_api?: string;
  name: string;
  cad_email: string;

}
