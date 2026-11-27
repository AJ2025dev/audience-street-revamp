import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Products />
      <HowWeWork />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
