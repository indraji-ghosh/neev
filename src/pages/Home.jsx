import { Footer } from '../components/ui/Footer'
import Header from '../components/ui/Header'
import ComparisionSection from '../components/ui/home/comparisionSection/ComparisionSection'
import FeaturedSection from '../components/ui/home/featuredSection/FeaturedSection'
import FeaturesSection from '../components/ui/home/featuresSection/FeaturesSection'
import Slider from '../components/ui/Slider'
import WhatsAppButton from '../components/ui/WhatsappButton'
import ContactSection from '../components/ui/home/locationSection/ContactSection'
import TestRideBooking from '../components/ui/home/testRideSection/TestRideBookingSection'

function Home() { 
  return (
    <>
      <Header />
      <Slider/>
      <WhatsAppButton/>
      <FeaturedSection/>
      <FeaturesSection/>
      <ComparisionSection/>
      <TestRideBooking/>
      <ContactSection/>
      <Footer/>
    </> 
  )
}

export default Home