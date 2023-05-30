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
    const [dataUser, setDataUser] = useState(user);

    return(
        <UserContext.Provider value={{
                                    dataUser, 
                                    setDataUser
                                    }}>
            {children}
        </UserContext.Provider>
    )
}