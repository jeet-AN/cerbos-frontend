import { GET, POST } from "./axios";

export type LoginPayload = {
  id: string | number;
  password: string;
}

export const getProfileAPI = () => {
    return GET('/auth/profile')
}

export const LoginAPI = (data: LoginPayload) => {
  return POST('/auth/login', data)
}

