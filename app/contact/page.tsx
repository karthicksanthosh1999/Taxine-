import ContactSection from '../_components/ContactSection'
import GoogleMap from '../_components/GoogleMap'
import SeconHeader from '../_components/SeconHeader'

const page = () => {
  return (
   <>
   <SeconHeader 
      title='Visit Our Location'
      description='Visit our office in Bangalore for professional tax, accounting, GST and compliance services.'
   />
    <GoogleMap />
    <ContactSection/>
   </>
  )
}

export default page