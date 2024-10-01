"use server"


import { Email } from "../emailtemplate";

export async function SubmitEmail({ email, message, subject } : Email) {
  let res = await fetch("https://www.jrtechscv.com/api/send", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message, subject })
  })
  
  let response = await res.json();
  return response;

}