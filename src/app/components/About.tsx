import { motion } from "motion/react";
import {
  Target,
  Users,
  Award,
  BookOpen,
  HandHeart,
  Briefcase,
  Building2,
  CheckCircle2,
} from "lucide-react";
import whoWeAreImage from "../../assets/work-7.jpg";

type AboutProps = {
  mode?: "home" | "page";
};

export function About({ mode = "home" }: AboutProps) {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To promote the social, cultural, educational, civic, and general well-being of indigenes of Enugu State, Nigeria, particularly disenfranchised groups within the state, Association members, and members of the Enugu state community in the Americas.",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "Members are daughters of Enugu by birth or by marriage to an Enugu man, united to educate, encourage, and empower our community.",
    },
    {
      icon: Award,
      title: "Our Impact",
      description:
        "Since 2000, OELOESA has brought indigenous women together to support the less privileged through sustained community service.",
    },
  ];

  const pillars = [
    {
      icon: BookOpen,
      title: "Education Access",
      description:
        "Scholarships, school supplies, reading programs, and support for students at risk of dropping out.",
    },
    {
      icon: HandHeart,
      title: "Humanitarian Support",
      description:
        "Emergency relief for vulnerable families, widows, and children through coordinated local response.",
    },
    {
      icon: Briefcase,
      title: "Women Empowerment",
      description:
        "Mentorship, leadership development, and vocational pathways that help women build lasting income.",
    },
    {
      icon: Building2,
      title: "Community Partnerships",
      description:
        "Collaboration with schools, local leaders, and volunteers to deliver programs that communities own.",
    },
  ];

  const process = [
    "We listen first: local stakeholders define the problem and priorities.",
    "We co-design practical interventions with measurable outcomes.",
    "We implement with local partners and clear accountability.",
    "We track impact, publish learnings, and improve each cycle.",
  ];

  const trustPoints = [
    "Programs are community-informed, not externally imposed.",
    "Resources are directed to high-need beneficiaries with transparent criteria.",
    "Volunteer and partner network spans educators, health workers, and community leaders.",
    "Long-term support model focused on dignity, sustainability, and measurable change.",
  ];

  const isPage = mode === "page";

  return (
    <section id="about" className="py-14 sm:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              The Original Exclusive Ladies of Enugu State Association, Mid-Atlantic
              (OELOESA), is a 501(c)(3) non-profit association that has been making a
              difference since 2000 and brings indigenous women together to help the
              less privileged.
            </p>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              Members are either daughters of Enugu by birth or by marriage to an
              Enugu man. We educate, encourage, and empower our community.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              We are very grateful for our husbands. They are our earthly "Solid Rock."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-xs text-gray-600">Scholarships</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">5+</p>
                <p className="text-xs text-gray-600">Schools Supported</p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">25+</p>
                <p className="text-xs text-gray-600">Years of Impact</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={whoWeAreImage}
              alt="Community support"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-yellow-500 text-white p-4 sm:p-6 rounded-xl shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold mb-1">25+</p>
              <p className="text-sm">Years of Impact</p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {isPage && (
          <>
            {/* Pillars */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">What We Do</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl border border-gray-200"
                  >
                    <pillar.icon className="w-6 h-6 text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process + Trust */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">How We Work</h3>
                <div className="space-y-4">
                  {process.map((item, idx) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-5">Why Communities Trust Us</h3>
                <div className="space-y-4">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5" />
                      <p className="text-blue-50 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-yellow-400 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Build Change With Us
              </h3>
              <p className="text-gray-800 max-w-3xl mb-6">
                Whether you are a donor, volunteer, school partner, or sponsor, your support
                helps us reach more children and families with education and opportunity.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="w-full sm:w-auto text-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors"
                >
                  Partner With OELOESA
                </a>
                <a
                  href="/about/gallery"
                  className="w-full sm:w-auto text-center px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition-colors"
                >
                  View Members & Work Gallery
                </a>
                <a
                  href="/#programs"
                  className="w-full sm:w-auto text-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
