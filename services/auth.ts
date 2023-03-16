import { request } from ".";
import { ILoginRequest, ISignUpRequest } from "./types";

export const signUp = (reqBody: ISignUpRequest) => {
  return request.post(`/User/Save`, reqBody);
};

export const signIn = (reqBody: ILoginRequest) => {
  return request.post(`/Auth/Login`, reqBody);
};

export const signOut = () => {
  return request.post(`/Auth/Logout`);
};

export const requestPasswordReset = (email: string) => {
  return request.get(`/Auth/RequestPasswordReset/${email}`);
};

export const validateEmailToken = (token: string) => {
  return request.get(`/Auth/ValidateEmailToken//${token}`);
};
