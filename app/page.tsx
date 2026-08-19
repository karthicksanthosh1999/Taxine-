
import AuthProvider from "@/providers/AuthProvider";
import HomeHero from "./_components/Hero";
import NumberCount from "./_components/NumberCount";
import ClientReview from "./_components/ClientReview";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <HomeHero/>
        <NumberCount/>
        <ClientReview />
      </AuthProvider>
    </>
  );
}
