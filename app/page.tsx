
import AuthProvider from "@/providers/AuthProvider";
import HomeHero from "./_components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NumberCount from "./_components/NumberCount";
import FounderSection from "./_components/Founter";
import ProcessSection from "./_components/ProcessSection";
import ClientReview from "./_components/ClientReview";
import WhyChooseUs from "./_components/WhyChooseUs";
import ContactSection from "./_components/ContactSection";
import GoogleMap from "./_components/GoogleMap";
import ScrollBar from "@/components/ScrollBar";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Header/>
        <HomeHero/>
        <FounderSection/>
        <Services />
        <WhyChooseUs />
        <NumberCount/>
        <ProcessSection />
        <ClientReview />
        <ContactSection />
        <GoogleMap />
        <ScrollBar/>
        <Footer/>
      </AuthProvider>
    </>
  );
}
