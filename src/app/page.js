import Navbar from "./components/Navbar/Navbar";
import { About, Services, Header, Skills, Work, Footer } from "./container";

export default function Home() {
  return (
    <main>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Work />
        <Footer />
      </div>
    </main>
  );
}
