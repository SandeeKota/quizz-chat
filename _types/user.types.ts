export interface UserModal {
    _id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    secretCode: string;
    normalizeCode: string;
    createdAt: string;
    updatedAt: string;
}

export interface SignupFormType {
    name: string;
    phone: string;
    email: string;
    password: string;
}