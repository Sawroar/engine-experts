import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";
import PopularProducts from "./components/PopularProducts";

export default function Home() {
  return (
<div>
  <Banner></Banner>
  <AboutUs></AboutUs>
    <ServicesSection></ServicesSection>
    <Info></Info>
    <PopularProducts></PopularProducts>
</div>
  
  );
}
