import { Footer } from '../components/ui/Footer'
import Header from '../components/ui/Header'
import ComparisionSection from '../components/ui/home/comparisionSection/ComparisionSection'
import FeaturedSection from '../components/ui/home/featuredSection/FeaturedSection'
import FeaturesSection from '../components/ui/home/featuresSection/FeaturesSection'
import Slider from '../components/ui/Slider'
import WhatsAppButton from '../components/ui/WhatsappButton'
import ContactSection from '../components/ui/home/locationSection/ContactSection'
import TestRideBooking from '../components/ui/home/testRideSection/TestRideBookingSection'
import FAQ from '../components/ui/home/faqSection/FaqSection'
import DetailsPage from './DetailsPage'

function Home() { 
  return (
    <>
      
      <Slider/>
      <WhatsAppButton/>
      <FeaturedSection/>
      <FeaturesSection/>
      <ComparisionSection/>
      <TestRideBooking/>
      <ContactSection/>
      <FAQ/>
    </> 
  )
}

export default Home