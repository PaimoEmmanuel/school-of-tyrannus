import { request } from ".";

export const saveEmail = (email: string) => {
  return request.post(`/Subscriber/Save`, { email });
};
