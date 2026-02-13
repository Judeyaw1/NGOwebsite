import { motion } from "motion/react";
import { Copy, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { useState } from "react";

const ZELLE_EMAIL = "oeloesainc@gmail.com";

export function Donate() {
  const [copied, setCopied] = useState(false);

  const copyZelleEmail = async () => {
    try {
      await navigator.clipboard.writeText(ZELLE_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback if clipboard permissions are unavailable.
      window.prompt("Copy Zelle email:", ZELLE_EMAIL);
    }
  };

  const givingTiers = [
    { amount: "$25", impact: "Supports learning materials for a student" },
    { amount: "$100", impact: "Helps fund a monthly student support package" },
    { amount: "$250", impact: "Contributes to scholarship and mentorship costs" },
    { amount: "$500+", impact: "Supports multi-student or emergency aid interventions" },
  ];

  const notes = [
    "In your Zelle memo, include: Donation + your full name.",
    "For sponsorship or institutional support, contact us after transfer.",
    "Request a donation acknowledgment via our contact page.",
  ];

  return (
    <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white p-6 sm:p-8 md:p-12 mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-4">Donate</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Support OELOESA Through Zelle
          </h2>
          <p className="text-amber-50 max-w-3xl text-base sm:text-lg leading-relaxed">
            Your donation helps fund scholarships, humanitarian outreach,
            medical mission support, and community assistance for the less privileged.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">How To Donate (Zelle)</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">1</div>
                <p className="text-gray-700">Open your bank app and choose Zelle.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">2</div>
                <p className="text-gray-700">
                  Send to this email: <span className="font-semibold break-all">{ZELLE_EMAIL}</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">3</div>
                <p className="text-gray-700">Enter your amount and complete the transfer.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={copyZelleEmail}
                className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copied" : "Copy Zelle Email"}
              </button>
              <a
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-3 bg-yellow-400 text-white rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Contact for Large Donation
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
            <h4 className="text-xl sm:text-2xl font-bold mb-5">Donation Guidance</h4>
            <div className="space-y-4">
              {notes.map((note) => (
                <div key={note} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5" />
                  <p className="text-slate-100">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-slate-100">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span className="text-sm">Secure transfer via your banking app</span>
              </div>
              <div className="flex items-center gap-2 text-slate-100">
                <HeartHandshake className="w-5 h-5 text-emerald-300" />
                <span className="text-sm">Every gift directly supports community programs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Giving Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {givingTiers.map((tier) => (
              <div key={tier.amount} className="rounded-xl border border-gray-200 p-5 bg-gray-50">
                <p className="text-2xl font-bold text-gray-900 mb-2">{tier.amount}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{tier.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
