import jwt from "jwt-decode";

const getUser = () => {
  const isServer = typeof window === "undefined";

  interface IUser {
    token: string;
    isLoggedIn: boolean;
    details: { Username: string, Id: number }
  }

  if (!isServer) {
    const user: IUser = {
      token: localStorage.getItem("tyrannus-tk") || "",
      isLoggedIn: !!localStorage.getItem("tyrannus-tk"),
      details: !localStorage.getItem("tyrannus-tk") ? {
        Username: "",
        Id: 0
      } : jwt(localStorage.getItem("tyrannus-tk") || "")
    }
    return {...user}
  }
  return {token: "", isLoggedIn: false, details: {Username: "", Id: 0}}
}
export default getUser