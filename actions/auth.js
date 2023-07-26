"use server";
import { connection } from "./connection";
const host = connection.host;

export const authenticate = async (teamId, password) => {
  try {
    const response = await fetch(`${host}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamId, password }),
    });
    const isAuth = response.status;
    return isAuth;
  } catch (error) {
    console.log(error);
  }
};
