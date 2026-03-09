import { useParams } from 'react-router';
import FAQ from '../components/ui/home/faqSection/FaqSection';
import HeroSection from '../components/ui/details-page/HeroSection';
import ColorGallerySection from '../components/ui/details-page/ColorGallerySection';
import SpecificationsSection from '../components/ui/details-page/SpecificationsSection';
import CTASection from '../components/ui/details-page/CTASection';
import { getScooterById } from '../data/scooters';

const DetailsPage = () => {
  const { id } = useParams();
  const scooter = getScooterById(id);

  if (!scooter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Scooter not found.</p>
      </div>
    );
  }

  const product = {
    name: scooter.name,
    tagline: scooter.tagline,
    price: scooter.price,
    mainImage: scooter.mainImage,
    highlights: scooter.highlights,
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection product={product} />
      <ColorGallerySection colorVariants={scooter.colorVariants} />
      <SpecificationsSection specifications={scooter.specifications} />
      <CTASection />
      <FAQ />
    </div>
  );
};

export default DetailsPage;