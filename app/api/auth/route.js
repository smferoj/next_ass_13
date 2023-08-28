import { NextResponse } from "next/server";

export function authHandler(req) {
  const incomingAuthHeader = req.headers["authorization"];

  if (incomingAuthHeader) {
    const token = incomingAuthHeader.replace("Bearer ", "");

    req.headers["authorization"] = `Bearer ${token}`;
  }

  return NextResponse.next();
}
