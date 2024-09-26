import { loginSchema, LoginSchema } from "@/schemas/login.schema";

const userData = {
  id: "1",
  email: "admin@gmail.com",
  name: "admin",
  password: "1234Pass",
};

export const login = (rawData: LoginSchema) => {
  const data = loginSchema.parse({
    email: rawData.email,
    password: rawData.password,
  });

  if (data.email !== userData.email || data.password !== userData.password) {
    throw new Error("CredentialsSignin");
  }

  return { id: userData.id, email: data.email, name: userData.name };
};
