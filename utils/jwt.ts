const jwtDecode = require('jwt-decode');


interface JwtPayload {
    exp: number;
    iat: number;
    id: string;
    email: string;
}

export const isTokenExpired = (token: string): boolean => {
    try {
        const decoded = jwtDecode(token) as JwtPayload;
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        console.error('Invalid token:', error);
        return true;
    }
};