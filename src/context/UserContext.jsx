import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext"; // Importa tu contexto de autenticación si ya lo tienes

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const apiUrl = process.env.REACT_APP_API_URL ;
    const { user} = useContext(AuthContext); // Obtiene los datos del usuario autenticado
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        if (user) {
            fetch(`${apiUrl}Postulant/GetDataPostulant?id=${user.posId}`)
                .then(response => response.json())
                .then(result => {
                    console.log("Datos obtenidos GetDataPostulant: ", result.data);
                    setUserData(result.data);
                })
                .catch(error => console.log("Error al obtener los datos:", error));
       
        }
       
    }, [user]);
    
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};
