import React, { createContext, FC, useEffect, useState } from "react";
import { IContext } from "../../interfaces/IContext";

const AuthContext = createContext<IContext>({
  userId: null,
});

const AuthProvider: FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      setUserId(localStorage.getItem("user_id"));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
