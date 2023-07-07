export interface user{
    id: number,
    foto: string,
    usuario: string
}

export interface createUserDTO {
    email: string;
    username: string;
    password: string;
}