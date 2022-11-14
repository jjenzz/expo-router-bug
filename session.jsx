import { Children } from "expo-router";
import * as React from "react";

const SessionContext = React.createContext([false, () => {}]);

export const SessionProvider = ({ children }) => {
  const session = React.useState(false);
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export function useSession() {
  return React.useContext(SessionContext);
}
