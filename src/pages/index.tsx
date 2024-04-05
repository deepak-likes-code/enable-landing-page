import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ParagraphWriter from "@/components/ParagraphWriter";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const roles = ["designer", "artist", "researcher", "writer"];
  const html = `<div style="text-align: center; font-size: 0.9em;">
  <p>Our lives are digitally entangled, our information lies scattered everywhere on the vast web.</p>
  <p>The very same digital footprint is transformed into digital profiles that mirror your identity, simply to advertise to you better.</p>
  
  <p>But what if we could use that data for ourselves? To enrich and aid our life, automate all the boring tasks and gain personal insights that turn into actionables, inching towards your dream.</p>

  <p>After all, our years on this spec of dust we call home are limited, let us <strong>enable</strong> you in your journey.</p>
</div>

`;
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-6xl font-bold">Enable</h1>
        <div className="mt-3 text-xl">
          <ParagraphWriter htmlContent={html} />
        </div>
        <div className="">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
