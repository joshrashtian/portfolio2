"use server";
import React from "react";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen p-24">{children}</main>;
}
