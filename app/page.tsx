import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentiators } from "@/components/Differentiators";
import { NoShame } from "@/components/NoShame";
import { SocialProof } from "@/components/SocialProof";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

const APP_STORE_URL: string | null = null;

export default function Home() {
  return (
    <main style={{ backgroundColor: "#05080E", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Differentiators />
      <NoShame />
      <SocialProof />
      <EmailCapture />
      <Footer appStoreUrl={APP_STORE_URL} />
    </main>
  );
}
