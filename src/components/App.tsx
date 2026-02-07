import FloatingHearts from "./FloatingHearts";
import HeroIntro from "./HeroIntro";
import ChatReplay from "./ChatReplay";
import TimelineSection from "./TimelineSection";
import MapDistance from "./MapDistance";
import SpecialTraits from "./SpecialTraits";
import FinalReveal from "./FinalReveal";
import ProgressIndicator from "./ProgressIndicator";

export default function App() {
  return (
    <>
      <FloatingHearts />
      <ProgressIndicator />
      <main className="relative z-10">
        <HeroIntro />

        {/* Soft divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-300/20 to-transparent mx-12" />

        <ChatReplay />

        <div className="h-px bg-gradient-to-r from-transparent via-pink-300/20 to-transparent mx-12" />

        <TimelineSection />

        <div className="h-px bg-gradient-to-r from-transparent via-pink-300/20 to-transparent mx-12" />

        <MapDistance />

        <div className="h-px bg-gradient-to-r from-transparent via-pink-300/20 to-transparent mx-12" />

        <SpecialTraits />

        <div className="h-px bg-gradient-to-r from-transparent via-pink-300/20 to-transparent mx-12" />

        <FinalReveal />

        {/* Footer */}
        <footer className="text-center py-12 text-pink-300/20 text-xs tracking-widest">
          fatto con ❤️ per te
          <br />
          da Eduard, your lover
        </footer>
      </main>
    </>
  );
}
