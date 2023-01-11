import React, { createContext, useState } from "react";
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [footer, setFooter] = useState([]);

    return (
        <AuthContext.Provider value={{footer, setFooter}}>
            {children}
        </AuthContext.Provider>
    )

}