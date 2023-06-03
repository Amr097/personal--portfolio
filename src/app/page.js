import Navbar from "./components/Navbar/Navbar";
import { About, Footer, Header, Skills, Work, Testimonials } from "./container";

export default function Home() {
  return (
    <main>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
