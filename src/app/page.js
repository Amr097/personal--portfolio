import Navbar from "./components/Navbar/Navbar";
import { About, Header, Skills, Work } from "./container";

export default function Home() {
  return (
    <main>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
      </div>
    </main>
  );
}
