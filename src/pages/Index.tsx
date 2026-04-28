import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        <header className="space-y-4 fade-in">
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Amrit Singh
          </h1>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            I'm currently a student at UIUC studying Computer Engineering. My interests span about everything from startups to AI and deep tech, and I'm always looking for the next hard problem worth solving.
          </p>

          <div className="pt-2">
            <span className="section-label mb-3 block">My Work</span>
            <ul className="text-sm md:text-base space-y-2 text-foreground/80 list-disc list-inside leading-relaxed">
              <li>Research Intern @ Stanford University Engineering</li>
              <li>Mentor at <a href="https://jlevy44.github.io/EDIT_AI_Virtual_Conference_25/presenter_articles/transformer.html" target="_blank" rel="noopener noreferrer" className="subtle-link">Dartmouth's EDIT</a> Lab</li>
              <li><a href="https://qlab.sites.tjhsst.edu/projects/detail/129/" target="_blank" rel="noopener noreferrer" className="subtle-link">Quantum ML model</a> integrated with VaR and CVaR to execute optimal trades under uncertainty.</li>
              <li>Optimized Wildfire Evacuations using a Agent-Based Modeling and ML approach.</li>
            </ul>
            <p className="text-sm md:text-base text-foreground/80 mt-4 leading-relaxed">
              I'm always exploring new ideas and looking to learn more. Feel free to reach out.
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
