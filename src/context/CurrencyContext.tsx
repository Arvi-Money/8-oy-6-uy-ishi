import React, { createContext, ReactNode } from "react";

interface CurrencyContextType {
    // Contextning o'zining ma'lumot strukturasini ko'rsating
    // Masalan:
    // user: User | null;
    // isLoggedIn: boolean;
}

// Context yaratish
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Provider komponenti
const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const value: CurrencyContextType = {
        // Context ma'lumotlari
        // Masalan:
        // user: { name: "John", age: 30 },
        // isLoggedIn: true,
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

export { CurrencyProvider, CurrencyContext };
