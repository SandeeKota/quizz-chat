import { UserLoginResponse, UserSignUpResponse } from "@/_types/response/response.types";
import { SignupFormType, UserModal } from "@/_types/user.types";
import api from "@/lib/api";
import { logout } from "@/store/authSlice";
import { useDispatch } from "react-redux";

export const loginApi = async (email: string, password: string) => {
    const body = { email: email, password: password }
    try {
        const response = await api.post("/auth/login", body);
        console.log("response", response.data);

        if (response && response.data) {
            const data: UserLoginResponse = response.data;
            return data;
        }
        return false;
    } catch (error) {
        return false;
    }
}

export const signupApi = async (form: SignupFormType) => {
    try {
        const body = { email: form?.email || "", password: form?.password || "", phone: form?.phone || "", name: form?.name || "" };
        if (!form.name || !form.password || !form.phone || !form.email) {
            return false;
        }

        const response = await api.post(`/auth/signup`, body);
        if (response && response.data) {
            const data: UserSignUpResponse = response.data;
            return data;
        }
        return false;
    } catch (error) {
        return false;
    }
}