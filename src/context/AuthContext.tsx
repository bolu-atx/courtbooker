import { createContext } from "react";

export type User = {
  displayName: string | null;
  email: string | null;
  photo: string | null;
  uid: string;
};

type AuthContextValue = {
  user: null | User;
};

const AuthContext = createContext<AuthContextValue>({user:null});
export default AuthContext;