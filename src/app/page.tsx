import AchievementSection from "@/pages/AchievementSection";
import Footer from "@/pages/Footer";
import Projects from "@/pages/Projects";
import About from "@/pages/Home";
import { Spotlight } from "@/components/ui/spotlight";
import AboutMe from "@/pages/About";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <Spotlight className="left-96" fill="violet"/>
      <Spotlight className="right-60" fill="blue"/>
      <About/>
      <AboutMe/>
      <Projects/> 
      <AchievementSection/>
      <Footer/>
    </div>
  );
}
