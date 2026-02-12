import { motion } from "motion/react";
import { TrendingUp, CheckCircle2 } from "lucide-react";

type ImpactProps = {
  mode?: "home" | "page";
};

export function Impact({ mode = "home" }: ImpactProps) {
  const stats = [
    { number: "500+", label: "Scholarships Awarded", trend: "+120 this year" },
    { number: "50+", label: "Schools Supported", trend: "+8 this year" },
    { number: "10,000+", label: "Lives Impacted", trend: "+2,500 this year" },
    { number: "$2M+", label: "Aid Distributed", trend: "+$500K this year" },
  ];

  const isPage = mode === "page";

  const yearlyHighlights = [
    "Expanded scholarship coverage to additional rural communities",
    "Added digital learning support in schools with limited resources",
    "Strengthened mentorship outcomes for girls entering STEM pathways",
    "Increased rapid-response humanitarian support for vulnerable families",
  ];

  const measurementPrinciples = [
    "Track outputs and outcomes quarterly",
    "Use local partner verification for key numbers",
    "Prioritize impact per household, not only activity volume",
    "Publish transparent summaries for sponsors and communities",
  ];

  return (
    <section id="impact" className="py-14 sm:py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from our commitment to transforming lives through education
            and community support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-xl text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-blue-100 mb-3 text-base sm:text-lg">{stat.label}</p>
              <div className="flex items-center justify-center gap-1 text-sm text-yellow-300">
                <TrendingUp className="w-4 h-4" />
                <span>{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Building Sustainable Futures
              </h3>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                Every scholarship awarded, every school improved, and every family
                supported creates a ripple effect of positive change. Our graduates
                are now teachers, healthcare workers, engineers, and community
                leaders giving back to their communities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">92%</p>
                <p className="text-blue-100">
                  Scholarship recipients complete their studies
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">85%</p>
                <p className="text-blue-100">
                  Graduates secure employment within 6 months
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">70%</p>
                <p className="text-blue-100">
                  Alumni contribute back to their communities
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {isPage && (
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-5">This Year’s Highlights</h3>
              <div className="space-y-4">
                {yearlyHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400 text-gray-900 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-5">How We Measure Impact</h3>
              <div className="space-y-4">
                {measurementPrinciples.map((item, idx) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="/#contact"
                className="inline-block mt-8 w-full sm:w-auto text-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors"
              >
                Request Full Impact Report
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
