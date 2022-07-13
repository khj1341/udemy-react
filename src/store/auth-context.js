import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// 1초에 한 번 정도 바뀌는 아주 자주 바뀌는 state에 대해서는 Context API 사용 안하는게 좋음.
// redux는 위의 단점을 극복시켜줄 수 있다.

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
    console.log("context test");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
