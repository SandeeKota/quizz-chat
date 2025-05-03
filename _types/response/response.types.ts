import { UserModal } from "../user.types"

export interface UserSignUpResponse {
    message: string,
    token: string,
    secretCode: string,
    user: UserModal
}

export interface UserLoginResponse {
    message: string,
    token: string,
    user: UserModal
}