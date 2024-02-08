import Navbar from "@/components/Navbar";
import Accueille from "@/components/Accueille";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Accueille />
      <Services />
      <Clients />
      <Contact />
    </div>
  );
}
