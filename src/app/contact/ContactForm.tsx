"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { submitContact } from "@/app/contact/actions";

export default function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: ""
    }
  });

  const onSubmit = (values: ContactFormValues) => {
    setServerMessage(null);
    startTransition(async () => {
      const result = await submitContact(values);
      if (result.success) {
        setServerMessage(result.message);
        reset();
      } else {
        setServerMessage("Please review the highlighted fields.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          Full name
          <input
            {...register("name")}
            type="text"
            className="focus-ring w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          />
          {errors.name ? (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          ) : null}
        </label>
        <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          Email address
          <input
            {...register("email")}
            type="email"
            className="focus-ring w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          />
          {errors.email ? (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          ) : null}
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        Topic
        <select
          {...register("topic")}
          className="focus-ring w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
        >
          <option value="">Select a topic</option>
          <option value="Course guidance">Course guidance</option>
          <option value="Partnerships">Partnerships</option>
          <option value="Support">Support</option>
        </select>
        {errors.topic ? (
          <span className="text-xs text-red-500">{errors.topic.message}</span>
        ) : null}
      </label>
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        Message
        <textarea
          {...register("message")}
          rows={5}
          className="focus-ring w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
        />
        {errors.message ? (
          <span className="text-xs text-red-500">{errors.message.message}</span>
        ) : null}
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="focus-ring inline-flex items-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-soft disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send message"}
      </button>
      {serverMessage ? (
        <p className="rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
