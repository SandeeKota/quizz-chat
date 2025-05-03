import { RootState } from "@/store"
import { useSelector } from "react-redux"

const useAuth = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const tocken = useSelector((state: RootState) => state.auth.token);

    return { isAuthenticated, tocken };
}

export default useAuth;