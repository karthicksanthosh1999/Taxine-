
import AuthProvider from "@/providers/AuthProvider";
import HomeHero from "./home/_components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NumberCount from "./home/_components/NumberCount";
import FounderSection from "./home/_components/Founter";
import ProcessSection from "./home/_components/ProcessSection";
import ClientReview from "./home/_components/ClientReview";
import WhyChooseUs from "./home/_components/WhyChooseUs";
import ContactSection from "./home/_components/ContactSection";
import GoogleMap from "./home/_components/GoogleMap";
import ScrollBar from "@/components/ScrollBar";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Header/>
        <HomeHero/>
        <FounderSection/>
        <NumberCount/>
        <ProcessSection />
        <ClientReview />
        <WhyChooseUs />
        <ContactSection />
        <GoogleMap />
        <ScrollBar/>
        <Footer/>
      </AuthProvider>
    </>
  );
}
