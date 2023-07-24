"use server";
import { connection } from "./connection";
const host = connection.host;

export const authenticate = async (teamId, password) => {
  console.log("Auths called");

  const response = await fetch(`${host}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ teamId, password }),
  });

  console.log(response);
  const resJson = await response.json();
};
