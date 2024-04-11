export interface LoginResponse {
    id_user:  number | string;
    nameuser: string;
    password: string;
    image:    string;
    correo:   string;
    update:   Date | string;
}

export type RequestLogin = LoginResponse | false;