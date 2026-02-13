import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  HandHeart,
  Users,
  Building,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

type ProgramsProps = {
  mode?: "home" | "page";
};

export function Programs({ mode = "home" }: ProgramsProps) {
  const programs = [
    {
      icon: GraduationCap,
      title: "Scholarship Program",
      description:
        "Scholarship support for deserving students with strong academic standards, including beneficiaries from UNN and ESUT.",
      color: "emerald",
      stats: "17 Students Awarded",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description:
        "Payment of school fees, provision of school supplies, and support for better learning environments in underserved areas.",
      color: "blue",
      stats: "Direct School Support",
    },
    {
      icon: HandHeart,
      title: "Humanitarian Aid",
      description:
        "Support for widows and less privileged families through financial aid, hospital bill payments, food, clothing, and shelter support.",
      color: "rose",
      stats: "Operation Help the Villagers",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description:
        "Community encouragement and guidance that helps young people and families stay connected to opportunities and hope.",
      color: "purple",
      stats: "Community-Centered Support",
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description:
        "Renovation and construction support, including work on the Mother of Christ Motherless Babies' Home in Enugu.",
      color: "orange",
      stats: "Shelter & Care Initiatives",
    },
    {
      icon: Briefcase,
      title: "Vocational Training",
      description:
        "Medical outreach support with surgeons and partners, treatment logistics, and essential supplies for people in need.",
      color: "indigo",
      stats: "Medical Mission Support",
    },
  ];

  const colorClasses = {
    emerald: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    rose: "bg-rose-100 text-rose-700",
    purple: "bg-violet-100 text-violet-700",
    orange: "bg-orange-100 text-orange-700",
    indigo: "bg-indigo-100 text-indigo-700",
  };

  const isPage = mode === "page";
  const featuredProgram = programs[0];
  const otherPrograms = programs.slice(1);

  const deliveryModel = [
    "Needs assessment with community leaders and schools",
    "Transparent beneficiary selection and onboarding",
    "Program execution with local partners and volunteers",
    "Quarterly monitoring and impact reporting",
  ];

  const outcomes = [
    "Improved school retention for scholarship recipients",
    "Safer and better-equipped learning environments",
    "Higher employability through practical skills training",
    "Stronger support systems for women and vulnerable families",
  ];

  return (
    <section id="programs" className="py-14 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Practical service tracks rooted in OELOESA's mission to promote social,
                cultural, educational, civic, and general well-being.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div
                    className={`w-14 h-14 ${
                      colorClasses[program.color as keyof typeof colorClasses]
                    } rounded-xl flex items-center justify-center mb-4`}
                  >
                    <program.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-blue-600">
                      {program.stats}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {isPage && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-white p-6 sm:p-8 md:p-12 mb-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-4">Programs</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Practical Programs That Move Communities Forward
              </h2>
              <p className="text-blue-100 max-w-3xl text-base sm:text-lg leading-relaxed">
                Each OELOESA program is community-focused, partnership-driven, and
                designed to improve life for disenfranchised groups in Enugu State and
                the broader Enugu community in the Americas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                <div className="rounded-xl bg-white/10 border border-white/20 p-4">
                  <p className="text-xl sm:text-2xl font-bold">6+</p>
                  <p className="text-xs text-blue-100">Scholarships</p>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/20 p-4">
                  <p className="text-xl sm:text-2xl font-bold">17+</p>
                  <p className="text-xs text-blue-100">Schools Supported</p>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/20 p-4">
                  <p className="text-xl sm:text-2xl font-bold">100+</p>
                  <p className="text-xs text-blue-100">Families Reached</p>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/20 p-4">
                  <p className="text-xl sm:text-2xl font-bold">1,000+</p>
                  <p className="text-xs text-blue-100">Youth Trained</p>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8"
              >
                <p className="text-emerald-700 text-sm font-semibold mb-3">Flagship Track</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{featuredProgram.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{featuredProgram.description}</p>
                <div className="inline-flex items-center rounded-full bg-white border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700">
                  {featuredProgram.stats}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-5">How Programs Are Delivered</h4>
                <div className="space-y-4">
                  {deliveryModel.map((item, idx) => (
                    <div key={item} className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">All Program Tracks</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {otherPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${
                        colorClasses[program.color as keyof typeof colorClasses]
                      } rounded-lg flex items-center justify-center`}
                    >
                      <program.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {program.stats}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-5">Expected Outcomes</h3>
                <div className="space-y-4">
                  {outcomes.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5" />
                      <p className="text-slate-100">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-yellow-400 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Support A Program Track</h3>
                <p className="text-gray-800 mb-6">
                  Sponsor a focused intervention and help us scale evidence-based programs
                  in underserved communities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    className="w-full sm:w-auto text-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors"
                  >
                    Become a Program Partner
                  </a>
                  <a
                    href="/about"
                    className="w-full sm:w-auto text-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Learn About OELOESA
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
