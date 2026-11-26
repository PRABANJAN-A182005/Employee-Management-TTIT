
import { useState } from "react";

import AuthContext from "./AuthContext.jsx";

const DEMO_EMAIL = "hr@example.com";
const DEMO_PASSWORD = "hr@123";

function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(sessionStorage.getItem("user"));
        } catch {
            return null;
        }
    });
    const login = (email, password) => {
        if (
            email.trim().toLowerCase() === DEMO_EMAIL &&
            password === DEMO_PASSWORD
        ) {
            const userData = {
                email: DEMO_EMAIL,
                role: "hr"
            };
            sessionStorage.setItem(
                "user",
                JSON.stringify(userData)
            );
            setUser(userData);
            return { success: true };
        }
        return {
            success: false,
            message: "Invalid email or password"
        };
    };
    const logout = () => {
        sessionStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: Boolean(user),
                login,
                logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
