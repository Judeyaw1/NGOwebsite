import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import work1 from "../../assets/work-1.jpg";
import work10 from "../../assets/work-10.jpg";
import work11 from "../../assets/work-11.jpg";
import work12 from "../../assets/work-12.jpg";
import work13 from "../../assets/work-13.jpg";
import work2 from "../../assets/work-2.jpg";
import work3 from "../../assets/work-3.jpg";
import work4 from "../../assets/work-4.jpg";
import work5 from "../../assets/work-5.jpg";
import work8 from "../../assets/work-8.jpg";
import work9 from "../../assets/work-9.jpg";


const memberGallery = [work8, work9, work10, work11, work12, work13];

const attainmentGallery = [
  {
    title: "Motherless Babies' Home Support",
    image: work1,
    description:
      "Renovation and construction support for Mother of Christ Motherless Babies' Home in Enugu, with shelter and essential care support.",
  },
  {
    title: "University Scholarship Awards",
    image: work2,
    description:
      "Scholarships awarded to 17 university students in need with strong academic records from UNN and ESUT.",
  },
  {
    title: "Medical Mission Support",
    image: work3,
    description:
      "With National Board and EnuguUSA collaboration, OELOESA supports medical outreach through surgeons, supplies, diagnosis, and treatment support.",
  },
  {
    title: "Operation Help the Villagers",
    image: work4,
    description:
      "Financial aid for widows, school fee support, school supplies, hospital bill assistance, and support for less privileged families.",
  },
  {
    title: "Annual Giving & Partnerships",
    image: work5,
    description:
      "Donations to St. Jude Children's Hospital, yearly support to EnuguUSA, and support for Bowie Interfaith and Emergency Aid Fund.",
  },
];

export function AboutGallery() {
  const [activeMemberSlide, setActiveMemberSlide] = useState(0);
  const totalMemberSlides = memberGallery.length;
  const currentMemberSlide = memberGallery[activeMemberSlide];

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = attainmentGallery.length;
  const currentSlide = attainmentGallery[activeSlide];

  const showPrevMember = () => {
    setActiveMemberSlide((prev) => (prev === 0 ? totalMemberSlides - 1 : prev - 1));
  };

  const showNextMember = () => {
    setActiveMemberSlide((prev) => (prev === totalMemberSlides - 1 ? 0 : prev + 1));
  };

  const showPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const memberInterval = setInterval(() => {
      setActiveMemberSlide((prev) => (prev === totalMemberSlides - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(memberInterval);
  }, [totalMemberSlides]);

  useEffect(() => {
    const workInterval = setInterval(() => {
      setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(workInterval);
  }, [totalSlides]);

  return (
    <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-amber-900 text-white p-6 sm:p-8 md:p-12 mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-4">About Gallery</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Members and Attainments So Far
          </h2>
          <p className="text-amber-50 max-w-3xl text-base sm:text-lg leading-relaxed">
            A visual snapshot of OELOESA community fellowship and the key works we have
            accomplished through service, partnerships, and outreach.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Members Gallery</h3>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <motion.div
              key={`member-${activeMemberSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={currentMemberSlide}
                alt={`OELOESA member gallery ${activeMemberSlide + 1}`}
                className="w-full h-72 sm:h-[26rem] lg:h-[34rem] object-contain bg-gray-100"
              />
            </motion.div>

            <div className="border-t border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between bg-gray-50">
              <div className="flex items-center gap-2 flex-wrap">
                {memberGallery.map((_, index) => (
                  <button
                    key={`member-dot-${index}`}
                    onClick={() => setActiveMemberSlide(index)}
                    aria-label={`Show member slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeMemberSlide === index ? "w-8 bg-blue-700" : "w-2.5 bg-gray-300"
                    }`}
                  />
                ))}
                <p className="text-sm text-gray-500 ml-2">
                  {activeMemberSlide + 1} / {totalMemberSlides}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <button
                  onClick={showPrevMember}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  onClick={showNextMember}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Work Done So Far</h3>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <motion.article
              key={currentSlide.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-2"
            >
              <div className="relative">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-64 sm:h-80 lg:h-full object-contain bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent lg:hidden" />
                <h4 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold lg:hidden">
                  {currentSlide.title}
                </h4>
              </div>

              <div className="p-6 sm:p-8 flex flex-col">
                <p className="hidden lg:block text-2xl font-bold text-gray-900 mb-4">
                  {currentSlide.title}
                </p>
                <p className="text-gray-600 leading-relaxed">{currentSlide.description}</p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {attainmentGallery.map((item, index) => (
                      <button
                        key={item.title}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show slide ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          activeSlide === index ? "w-8 bg-blue-700" : "w-2.5 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {activeSlide + 1} / {totalSlides}
                  </p>
                </div>
              </div>
            </motion.article>

            <div className="border-t border-gray-200 p-4 sm:p-5 flex items-center justify-between bg-gray-50">
              <button
                onClick={showPrev}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={showNext}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
