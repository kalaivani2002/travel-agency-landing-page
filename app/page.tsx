import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Destinations from "@/components/Destinations/Destinations";
import BookingSteps from "@/components/BookingSteps/BookingSteps";
import Testimonials from "@/components/Testimonials/Testimonials";
import Partners from "@/components/Partners/Partners";
import Subscribe from "@/components/Subscribe/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-section">
      <div className="background-color-main">
        <Image
          src="/images/hero-background-color.svg"
          alt="Plane"
          width={120}
          height={80}
        />
      </div>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Testimonials />
      <Partners />
      <Subscribe />
      <Footer />
    </main>
  );
}
