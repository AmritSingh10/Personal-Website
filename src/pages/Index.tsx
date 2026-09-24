import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        <header className="space-y-4 fade-in">
          <h1 className="font-display text-xl md:text-2xl text-white">
            Amrit Singh
          </h1>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            I'm currently a student at UIUC studying Computer Engineering. My interests span about everything from startups to AI and deep tech, and I'm always looking for the next hard problem worth solving.
          </p>

          <div className="pt-2">
            <span className="section-label mb-3 block">My Work</span>
              <ul className="text-sm md:text-base space-y-2 text-foreground/80 list-disc list-outside pl-6 leading-relaxed">
              <li>Building agent infrastructure at AgentPhone (YC P26), mostly around telephony APIs, event-driven workflows, and MCP tooling.</li>
              <li>Designing power distribution hardware and embedded monitoring for Illini Electric Motorsports, with Altium, STM32, and CAN.</li>
              <li>Previously worked on ML research at Dartmouth's EDIT Lab, working on transformers, spatial transcriptomics, and model optimization.</li>
              <li>Designed FPGA accelerators and custom PCBs for quantized neural network inference and for some of my recent hardware projects.</li>
              <li>4× AIME qualifier with 3 distinctions, 2× Cursor Hackathon category winner, and Congressional Award Gold Medal.</li>
            </ul>
            <p className="text-sm md:text-base text-foreground/80 mt-4 leading-relaxed">
              I'm always exploring new ideas and looking to learn more. Feel free to reach out!
            </p>
          </div>
        </header>

        <section className="fade-in-delay-1 mt-10">
          <SocialLinks />
        </section>
      </div>
    </main>
  );
};

export default Index;
