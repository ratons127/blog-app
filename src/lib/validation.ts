import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  topic: z.string().min(2, "Select a topic."),
  message: z.string().min(10, "Tell us a bit more so we can help.")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
