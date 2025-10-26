import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";
import PopularProducts from "./components/PopularProducts";
import OurTeam from "./components/OurTeam";
import CoreFeatures from "./components/CoreFeatures";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
<div>
  <Banner></Banner>
  <AboutUs></AboutUs>
    <ServicesSection></ServicesSection>
    <Info></Info>
    <PopularProducts></PopularProducts>
    <OurTeam></OurTeam>
    <CoreFeatures></CoreFeatures>
    <Testimonials></Testimonials>

</div>
  
  );
}
