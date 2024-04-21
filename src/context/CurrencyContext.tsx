import React, { createContext, ReactNode, useState } from "react";

export interface CurrencyContextType {
    fromCurrency: string;
    setFromCurrency: (currency: string) => void;
    toCurrency: string;
    setToCurrency: (currency: string) => void;
    firstAmount: number;
    setFirstAmount: (amount: number) => void
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [fromCurrency, setFromCurrency] = useState<string>("EURO - Euro");
    const [toCurrency, setToCurrency] = useState<string>("SGD - Singapore Dollar");
    const [firstAmount, setFirstAmount] = useState<string>("");

    const value: CurrencyContextType = {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

export { CurrencyProvider, CurrencyContext };
