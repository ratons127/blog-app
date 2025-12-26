"use server";

import { cookies } from "next/headers";
import { adminCookieName } from "@/lib/auth";

export async function loginAdmin(password: string) {
  const expectedPassword = process.env.ADMIN_DEMO_PASSWORD ?? "";

  if (!expectedPassword || password !== expectedPassword) {
    return { success: false, message: "Invalid password. Try again." };
  }

  cookies().set(adminCookieName(), "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });

  return { success: true };
}

export async function logoutAdmin() {
  cookies().delete(adminCookieName());
}
