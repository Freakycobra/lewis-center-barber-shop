import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Barbers from "../components/Barbers";
import Reviews from "../components/Reviews";
import BookingCTA from "../components/BookingCTA";
import HoursLocation from "../components/HoursLocation";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Services />
      <Barbers />
      <Reviews />
      <BookingCTA />
      <HoursLocation />
      <Footer />
    </div>
  );
}
