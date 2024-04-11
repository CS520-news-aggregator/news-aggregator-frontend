import { SetStateAction } from "react";

type userForm = {
  email: string;
  password: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
};

type baseInfo = {
  setAuthToken: (token: string) => void;
  setLoginState: (loginState: boolean) => void;
};

type PreferencesInfo = {
  authToken: string;
  setFirstTimeUser: (firstTimeUser: boolean) => void;
}

type loginInfo = {
  setFirstTimeUser: (firstTimeUser: boolean) => void;
} & baseInfo;

type FormInfo = {
  toggleRegister: boolean;
  setToggleRegister: React.Dispatch<SetStateAction<boolean>>;
} & userForm;

type signInFormInfo = baseInfo & FormInfo;
type registerFormInfo = loginInfo & FormInfo;

export type { loginInfo, registerFormInfo, signInFormInfo, PreferencesInfo };
