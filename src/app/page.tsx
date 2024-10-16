import AchievementSection from "@/components/AchievementSection";
import Footer from "@/components/Footer";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
import { Spotlight } from "@/components/ui/spotlight";
import { WobbleCardDemo } from "@/components/WobbleCard";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <Spotlight className="left-96" fill="violet"/>
      <Spotlight className="right-60" fill="blue"/>
      <TextGenerateEffectDemo/>
      <WobbleCardDemo/>
      <AchievementSection/>
      <Footer/>
    </div>
  );
}
