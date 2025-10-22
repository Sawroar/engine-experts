import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";

export default function Home() {
  return (
<div>
  <Banner></Banner>
  <AboutUs></AboutUs>
    <ServicesSection></ServicesSection>
    <Info></Info>
</div>
  
  );
}
