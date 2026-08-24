import { Brands } from "../components/Brands";
import { Capabilities } from "../components/Capabilities";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Reviews } from "../components/Reviews";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <Services />
      <Reviews />
      <Brands />
    </main>
  );
}
