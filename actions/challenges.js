"use server";
import { connection } from "./connection";
const host = connection.host;

export const flagSubmit = async (challengeId, flag) => {
  console.log("flagSubmit action called");

  const response = await fetch(`${host}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: "teamId=TNU2730",
    },
    body: JSON.stringify({ challengeId, flag }),
  });

  const resJson = await response.json();
  return resJson;
};

export const spawnCall = async (challengeId) => {
  console.log("spawnCall action called");

  const response = await fetch(`${host}/spawn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: "teamId=TNU2730",
    },
    body: JSON.stringify({ challengeId }),
  });

  const resJson = await response.json();
  return resJson;
};
