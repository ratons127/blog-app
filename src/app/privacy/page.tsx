import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how SkillWave Academy handles and protects your data."
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-wide space-y-6">
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-white">Privacy Policy</h1>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>
            SkillWave Academy respects your privacy. We only collect the information needed to deliver learning
            experiences, communicate updates, and improve our services.
          </p>
          <p>
            We never sell personal information. Data is stored securely and shared only with trusted service providers
            that support platform operations.
          </p>
          <p>
            You can request access, correction, or removal of your data at any time by contacting
            privacy@skillwave.academy.
          </p>
        </div>
      </div>
    </section>
  );
}
