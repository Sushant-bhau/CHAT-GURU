import axios from "axios";

export const checkAuthStatus = async () => {
  const res = await axios.get("/auth/status");
  if (res.status !== 200) {
    throw new Error("Unable to check auth status");
  }
  const data = await res.data;
  return data;
};

export const loginUser = async (email, password) => {
  const res = await axios.post("/auth/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (name, email, password) => {
  const res = await axios.post("/auth/signup", { name, email, password });
  if (res.status !== 200) {
    throw new Error("Unable to signup");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/auth/logout");
  if (res.status !== 200) {
    throw new Error("Unable to logout");
  }
  const data = await res.data;
  return data;
};

export const deleteUserChats = async () => {
  const res = await axios.delete("/chat/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
