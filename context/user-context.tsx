import {createContext, useState} from "react"
import getUser from "../utils/get-user";

interface IUser {
  token: string;
  isLoggedIn: boolean;
  details: { Username: string, Id: number }
}

const defaultValue = {
  user: {token: "", isLoggedIn: false, details: {Username: "", Id: 0}},
  setUser: (user: IUser) => {
  }
}

export const UserContext = createContext(defaultValue);

const UserContextProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<IUser>(getUser())
  return <UserContext.Provider value={{user, setUser}}>
    {children}
  </UserContext.Provider>
}
export default UserContextProvider