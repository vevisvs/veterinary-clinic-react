import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const user = {
    name: "",
    lastName: "",
    address: "",
    contactNumber: "",
    email: "",
    password: ""
}

export const UserProvider = ({children}) => {
    const [dataUser, setDataUser] = useState(user); //Almacena info de usuario creado
    const [isLogged, setIsLogged] = useState(false); //Almacena un valor true or false, indica si el usuario ha iniciado sesión o no

    return(
        <UserContext.Provider value={{
                                    dataUser, 
                                    setDataUser,
                                    isLogged,
                                    setIsLogged
                                    }}>
            {children}
        </UserContext.Provider>
    )
}