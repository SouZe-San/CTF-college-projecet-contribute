"use server";
import { connection } from "./connection";
const host = connection.host;
import { cookies } from "next/headers";

// Get Cookie
const cookieStore = cookies();
const cookData = cookieStore.get("teamId");
const cookie = `${cookData?.name}=${cookData?.value}`;

export const flagSubmit = async (challengeId, flag) => {
  const response = await fetch(`${host}/submit`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: cookie,
    },
    credentials: "same-origin",
    body: JSON.stringify({ challengeId, flag }),
  });
  const resJson = await response.json();
  return resJson;
};

export const spawnCall = async (challengeId) => {
  const response = await fetch(`${host}/spawn`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: cookie,
    },
    credentials: "same-origin",
    body: JSON.stringify({ challengeId }),
  });
  const resJson = await response.json();
  return resJson;
};
