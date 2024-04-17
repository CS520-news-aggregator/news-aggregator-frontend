import { SetStateAction } from "react";

type UserForm = {
  email: string;
  password: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
};

type BaseInfo = {
  setAuthToken: (token: string) => void;
  setLoginState: (loginState: LoginState) => void;
};

type PreferencesInfo = {
  authToken: string;
  setFirstTimeUser: (firstTimeUser: boolean) => void;
};

type LoginInfo = {
  setFirstTimeUser: (firstTimeUser: boolean) => void;
} & BaseInfo;

type FormInfo = {
  toggleRegister: boolean;
  setToggleRegister: React.Dispatch<SetStateAction<boolean>>;
} & UserForm;

type LoginError = {
  setSignInFail: (state: boolean) => void;
  setRegisterFail: (state: boolean) => void;
};

type SignInFormInfo = {
  setSignInFail: LoginError["setSignInFail"];
} & BaseInfo &
  FormInfo;
type RegisterFormInfo = {
  setRegisterFail: LoginError["setRegisterFail"];
} & LoginInfo &
  FormInfo;

type PostInfo = {
  id: string;
  title: string;
  link: string;
  date: string;
  media: string;
  author: string;
  upvotes: number;
  downvotes: number;
};

type UserInfo = {
  email: string;
  username: string;
  avatarIndex: number;
};

type Comment = {
  id: string;
  content: string;
  upvotes: number;
  downvotes: number;
  author_id: string;
};

type HomeInfo = {
  authToken: string;
};

enum HomeView {
  Content,
  Post,
}

enum LoginState {
  LoggedIn,
  Loading,
  LoggedOut,
}

type MessageProp = {
  error: string;
  message: string;
};

type HomeProfileInfo = {
  side: "top" | "bottom" | "left" | "right" | null | undefined;
  avatarIndex: number;
};

export type {
  LoginInfo,
  RegisterFormInfo,
  SignInFormInfo,
  PreferencesInfo,
  PostInfo,
  HomeInfo,
  UserInfo,
  MessageProp,
  HomeProfileInfo,
  Comment,
};

export { HomeView, LoginState };
