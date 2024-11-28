import { POST } from "./axios";

type User = {
  id: number;
  name: string;
  email: string;
  phone: number;
  role: string;
};

const CreateUser = (data: User) => {
    return POST('/users', data)
}
