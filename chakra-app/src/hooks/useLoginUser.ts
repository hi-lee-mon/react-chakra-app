import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

// コンテキストのカスタムフック
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
