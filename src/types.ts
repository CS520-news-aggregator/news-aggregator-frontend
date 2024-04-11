import { SetStateAction } from "react";

type userForm = {
  email: string
  password:string
  setEmail: React.Dispatch<SetStateAction<string>>
  setPassword: React.Dispatch<SetStateAction<string>>
}

type loginInfo = {
  setAuthToken: (token: string) => void;
  setLoginState: (loginState: boolean) => void;
};

type FormInfo = {
  toggleRegister: boolean 
  setToggleRegister: React.Dispatch<SetStateAction<boolean>>
} & userForm

type signInFormInfo = loginInfo& FormInfo;
type registerFormInfo = loginInfo &FormInfo;

export type {loginInfo, registerFormInfo, signInFormInfo}