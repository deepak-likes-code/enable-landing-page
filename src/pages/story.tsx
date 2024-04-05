import ParagraphWriter from "@/components/ParagraphWriter";

const html = `<div style="text-align: center; font-size: 0.9em;">
  <p>Our lives are digitally entangled, our information lies scattered everywhere on the vast web.</p>
  <p>The very same digital footprint is transformed into digital profiles that mirror your identity, simply to advertise to you better.</p>
  
  <p>But what if we could use that data for ourselves? To enrich and aid our life, automate all the boring tasks and gain personal insights that turn into actionables, inching towards your dream.</p>

  <p>After all, our years on this spec of dust we call home are limited, let us <strong>enable</strong> you in your journey.</p>
</div>

`;

export const Vision = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center min-h-screen mx-30">
      <h1 className="text-4xl text-bold mb-6">Our Story</h1>
      <ParagraphWriter htmlContent={html} />
    </div>
  );
};

export default Vision;
