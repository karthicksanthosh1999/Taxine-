import NewsLetter from '../_components/NewsLetter'
import SeconHeader from '../_components/SeconHeader'
import Services from '../_components/Services'

const page = () => {
  return (
  <>
  <SeconHeader
    title='Comprehensive Tax & Financial Services'
    description='From individual income tax to complex corporate compliance — we cover everything your business needs to stay legally compliant and financially healthy.'
  />
    <Services />
    <NewsLetter />
  </>
)
}

export default page