import * as React from "react";

export interface Email {
  email: string;
  message: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<Email>> = ({
  email,
  message,
  subject,
}) => (
  <div>
    <h1>Message from {email}</h1>
    <h2>{subject}</h2>
    <p>{message}</p>
  </div>
);
