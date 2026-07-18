import { createContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const history = useHistory();

  function logIn(user) {
    console.log("Login", user);
    setUser(user);
    history.push("/home");
  }

  function logOut() {
    console.log("Logout");
    setUser(null);
    history.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
