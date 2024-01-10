import React, { createContext, useContext, useState } from "react";

type NameContextProviderProps = {
    children: React.ReactNode
}

type NameContext = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameContext = createContext<NameContext | undefined>(undefined);

export function useNameContext() {
    const context = useContext(NameContext);

    if (context === undefined) {
        throw new Error("Funkar inte")
    }
    return context;
}


export function NameProvider({ children }: NameContextProviderProps) {
    const [name, setName] = useState("Johannes");

    return (
        <>
            <NameContext.Provider value={{ name, setName }}>
                {children}
            </NameContext.Provider>
        </>
    )

}