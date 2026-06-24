import AboutMeSection from '../components/home/AboutMeSection';
import HeroSection from '../components/home/HeroSection';
import MyWorkSection from '../components/home/MyWorkSection';
import StatsSection from '../components/home/StatsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutMeSection />
      <MyWorkSection />
    </>
  );
}