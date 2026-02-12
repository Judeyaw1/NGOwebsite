import { motion } from "motion/react";
import { Quote, CheckCircle2 } from "lucide-react";

type StoriesProps = {
  mode?: "home" | "page";
};

export function Stories({ mode = "home" }: StoriesProps) {
  const testimonials = [
    {
      name: "Chidinma Okafor",
      role: "Medical Student",
      image:
        "https://images.unsplash.com/photo-1670422602252-3e2d7d71d663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwc3R1ZGVudCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzA4NzEwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "The scholarship from OELOFSA changed my life completely. As the first in my family to attend university, I'm now studying medicine and will return to serve my community as a doctor.",
    },
    {
      name: "Amara Nwosu",
      role: "Teacher & Alumna",
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzA4NzEwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "I received a scholarship in 2018, graduated with honors, and now I teach at the same school where I grew up. I want to inspire the next generation just like OELOFSA inspired me.",
    },
    {
      name: "Ngozi Adeyemi",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1670422602252-3e2d7d71d663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwc3R1ZGVudCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzA4NzEwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Thanks to the vocational training program, I learned to code and now work remotely for an international tech company. I'm supporting my entire family and giving back to the organization.",
    },
  ];

  const isPage = mode === "page";
  const featuredStory = testimonials[0];
  const otherStories = testimonials.slice(1);

  const outcomes = [
    "Students complete secondary and tertiary education at higher rates",
    "Young women gain confidence, leadership exposure, and career clarity",
    "Families experience stronger financial resilience through skilled graduates",
    "Beneficiaries return value by mentoring younger students in their communities",
  ];

  return (
    <section id="stories" className="py-14 sm:py-20 bg-gray-50 border-t border-gray-100">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Stories of Transformation
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Meet some of the incredible individuals whose lives have been changed
                through our programs and support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
                >
                  <Quote className="w-10 h-10 text-yellow-400 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
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
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white p-6 sm:p-8 md:p-12 mb-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-4">Stories</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Real People, Real Progress
              </h2>
              <p className="text-amber-50 max-w-3xl text-base sm:text-lg leading-relaxed">
                Behind every number is a person whose opportunities expanded through
                education, support, and community partnership.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.name}
                  className="w-full h-60 sm:h-72 object-cover"
                />
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold text-amber-700 mb-2">Featured Story</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{featuredStory.name}</h3>
                  <p className="text-gray-500 mb-4">{featuredStory.role}</p>
                  <p className="text-gray-700 leading-relaxed text-lg">"{featuredStory.quote}"</p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-900 text-white rounded-2xl p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-bold mb-5">What These Stories Show</h4>
                <div className="space-y-4">
                  {outcomes.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5" />
                      <p className="text-gray-100">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {otherStories.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7"
                >
                  <Quote className="w-8 h-8 text-yellow-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-black to-yellow-700 rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Help Us Create More Success Stories
          </h3>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Your support can help transform the life of a student in Nigeria. Every
            contribution makes a difference.
          </p>
          <a
            href="/donate"
            className="inline-block w-full sm:w-auto px-8 py-4 bg-yellow-400 text-white hover:bg-yellow-500 font-semibold rounded-lg transition-colors"
          >
            Support A Student
          </a>
        </motion.div>
      </div>
    </section>
  );
}
