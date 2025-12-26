"use server";

import { contactSchema, type ContactFormValues } from "@/lib/validation";

export async function submitContact(values: ContactFormValues) {
  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors
    };
  }

  return {
    success: true,
    message: "Thanks for reaching out! We will be in touch within 24 hours."
  };
}
