import { cookies } from "next/headers";

const ADMIN_COOKIE = "skillwave_admin";

export function getAdminSession() {
  const cookieStore = cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === "authenticated";
}

export function adminCookieName() {
  return ADMIN_COOKIE;
}
