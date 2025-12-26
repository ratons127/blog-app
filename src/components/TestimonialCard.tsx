type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="gradient-card flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
      <div className="mt-auto">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
      </div>
    </div>
  );
}
