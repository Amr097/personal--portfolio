"use client";
import Navbar from "./components/Navbar/Navbar";
import { About, Services, Header, Work, Footer } from "./container";

export default function Home() {
  return (
    <main>
      <div
        className="app"
        onClick={(e) => {
          e.target !== document.querySelector("#hamMenu") &&
          e.target !== document.querySelector(".visible") &&
          e.target !== document.querySelector("#checkbox")
            ? (document.querySelector("#checkbox").checked = false)
            : "";
        }}
      >
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
