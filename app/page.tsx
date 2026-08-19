'use client'
import AuthProvider from "@/providers/AuthProvider";
import HomeHero from "./_components/Hero";
import NumberCount from "./_components/NumberCount";
import ClientReview from "./_components/ClientReview";
import HomePageServices from "./_components/HomePageService";
import NewsLetter from "./_components/NewsLetter";
import PaymentModal from "./_components/paymentModel";
import { useState } from "react";

export default function Home() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <AuthProvider>
        <HomeHero setOpen={setIsOpen}/>
        <HomePageServices />
        <NumberCount/>
        <ClientReview />
        <NewsLetter />
      <PaymentModal 
          qrCodeUrl="/payment-1.jpeg"
          isOpen={isOpen} 
          onClose={()=>setIsOpen(false)} 
          upiId="yokeshkr26@okaxis"  
        />
      </AuthProvider>
    </>
  );
}
