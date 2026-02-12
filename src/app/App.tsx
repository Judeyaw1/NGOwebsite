import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Impact } from "./components/Impact";
import { Stories } from "./components/Stories";
import { Contact } from "./components/Contact";
import { Donate } from "./components/Donate";
import { Footer } from "./components/Footer";

export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const isAboutPage = path === "/about";
  const isProgramsPage = path === "/programs";
  const isImpactPage = path === "/impact";
  const isStoriesPage = path === "/stories";
  const isContactPage = path === "/contact";
  const isDonatePage = path === "/donate";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {isAboutPage ? (
        <main className="pt-20">
          <About mode="page" />
        </main>
      ) : isProgramsPage ? (
        <main className="pt-20">
          <Programs mode="page" />
        </main>
      ) : isImpactPage ? (
        <main className="pt-20">
          <Impact mode="page" />
        </main>
      ) : isStoriesPage ? (
        <main className="pt-20">
          <Stories mode="page" />
        </main>
      ) : isContactPage ? (
        <main className="pt-20">
          <Contact mode="page" />
        </main>
      ) : isDonatePage ? (
        <main className="pt-20">
          <Donate />
        </main>
      ) : (
        <>
          <Hero />
          <About mode="home" />
          <Programs mode="home" />
          <Impact mode="home" />
          <Stories mode="home" />
          <Contact mode="home" />
        </>
      )}
      <Footer />
    </div>
  );
}
