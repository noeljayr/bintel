    import Image from "next/image";
import banner from "@/public/banner.jpg";

function HeroImage() {
  return (
    <Image priority src={banner} alt="hero image" className="hero-image" />
  );
}

export default HeroImage;
