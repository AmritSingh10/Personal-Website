import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        <header className="space-y-5 fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl text-foreground tracking-tight whitespace-nowrap">
              Amrit Singh
            </h1>
            <p className="text-xs text-muted-foreground mt-2 tracking-wide">
              Computer Engineering @ UIUC
            </p>
          </div>
          <div className="space-y-4 text-sm md:text-[15px] text-foreground/80 leading-relaxed font-light">
            <p>
              I'm a Computer Engineering student at UIUC interested in building things at the intersection of hardware, software, and deep tech. Most of my work has been around embedded systems, FPGA design, machine learning, and early-stage technology.
            </p>
            <p>
              I like working on technical problems where software eventually has to interact with the real world.
            </p>
          </div>
        </header>

        <section className="fade-in-delay-1 mt-14">
          <span className="section-label mb-4 block">Selected Work</span>
          <ul className="text-sm md:text-[15px] space-y-3 text-foreground/80 leading-relaxed font-light list-disc list-inside marker:text-muted-foreground">
            <li>Building FPGA hardware for quantized neural network inference, including an 8×8 systolic MAC architecture and fixed-point acceleration.</li>
            <li>Designed a custom 4-layer STM32 sensor and telemetry PCB with onboard sensors, USB-C power, embedded interfaces, and mixed-signal routing.</li>
            <li>Co-founded VertiGone, where I worked on ARM-based embedded systems, IMU sensor fusion, Kalman filtering, and real-time gait tracking for an assistive wearable.</li>
            <li>Researching machine learning at <a href="https://jlevy44.github.io/EDIT_AI_Virtual_Conference_25/presenter_articles/transformer.html" target="_blank" rel="noopener noreferrer" className="subtle-link">Dartmouth's EDIT Lab</a>, including transformer models for spatial transcriptomics and GPU-based model optimization.</li>
            <li>Built a hybrid <a href="https://qlab.sites.tjhsst.edu/projects/detail/129/" target="_blank" rel="noopener noreferrer" className="subtle-link">quantum-classical reinforcement learning system</a> for algorithmic trading using an LSTM and a 4-qubit variational quantum circuit.</li>
          </ul>
        </section>

        <section className="fade-in-delay-2 mt-14">
          <span className="section-label mb-4 block">Selected Recognition</span>
          <ul className="text-sm md:text-[15px] space-y-3 text-foreground/80 leading-relaxed font-light list-disc list-inside marker:text-muted-foreground">
            <li>4× AIME Qualifier, with 3 distinctions on the American Mathematics Competitions.</li>
            <li>2× Category Winner at the Cursor Hackathon.</li>
            <li>Eagle Scout with Gold, Silver, and Bronze Palms.</li>
            <li>2nd Place at the MATE Underwater ROV Competition after designing and piloting a competition ROV.</li>
            <li>Congressional Award Gold Medal recipient.</li>
            <li>Health & Nutrition Alternate Finalist at the Conrad Innovation Challenge, placing 7th overall and 2nd in the United States.</li>
          </ul>
        </section>

        <section className="fade-in-delay-3 mt-14">
          <SocialLinks />
        </section>
      </div>
    </main>
  );
};

export default Index;
