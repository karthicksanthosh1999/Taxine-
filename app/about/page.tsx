import FounderSection from '../_components/Founter';
import MiniServices from '../_components/MinServices';
import NewsLetter from '../_components/NewsLetter';
import ProcessSection from '../_components/ProcessSection';
import SeconHeader from '../_components/SeconHeader';
import WhyChooseUs from '../_components/WhyChooseUs';

const page = () => {
  return (
    <>
       <SeconHeader 
      title='About Us'
      description='Taxine is a professionally managed Chartered Accountant firm committed to providing high-quality financial and regulatory services.'
   />
    <WhyChooseUs />
    <FounderSection/>
    <ProcessSection/>
    <MiniServices/>
    <NewsLetter />
    </>
  )
}

export default page