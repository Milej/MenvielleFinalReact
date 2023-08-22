import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {

  const [logged, setLogged] = useState(false)

  return (
    <UserContext.Provider value={{ logged, setLogged }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider