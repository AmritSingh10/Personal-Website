import SocialLinks from "@/components/SocialLinks";
import coryLevyPhoto from "@/assets/cory-levy.jpg";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-3xl">
        {/* Header with photo */}
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-8 fade-in">
          <div className="flex-1 space-y-4">
            <h1 className="display-name whitespace-nowrap">
              <span className="display-name-italic">Amrit</span> Singh
            </h1>
            <p className="body-text text-muted-foreground max-w-md">
              I'm a 17 year old at TJHSST.
            </p>
            
            {/* Work section */}
            <div className="pt-4">
              <span className="section-label mb-3 block">My Work</span>
              <ul className="body-text space-y-2 text-foreground/90 list-disc list-inside text-sm">
                <li>Research Intern @ Stanford University Engineering</li>
                <li>Mentor at <a href="https://jlevy44.github.io/EDIT_AI_Virtual_Conference_25/presenter_articles/transformer.html" target="_blank" rel="noopener noreferrer" className="subtle-link">Dartmouth's EDIT</a> Lab</li>
                <li><a href="https://qlab.sites.tjhsst.edu/projects/detail/129/" target="_blank" rel="noopener noreferrer" className="subtle-link">Quantum ML model</a> integrated with VaR and CVaR to execute optimal trades under uncertainty.</li>
                <li>Optimized Wildfire Evacuations using a Agent-Based Modeling and ML approach.</li>
              </ul>
              <p className="body-text text-foreground/90 mt-4 text-sm">
                I'm always exploring new ideas and looking to learn more. Feel free to reach out.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0 md:ml-8">
            <div className="w-60 h-[22rem] md:w-72 md:h-[26rem] overflow-hidden rounded-lg border border-border shadow-sm">
              <img
                src={coryLevyPhoto}
                alt="With Cory Levy, founder of ZFellows"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 max-w-[14rem] leading-relaxed">
              With <a href="https://x.com/cory" target="_blank" rel="noopener noreferrer" className="subtle-link">Cory Levy</a>—founder, ZFellows.
            </p>
          </div>
        </header>

        {/* Social links */}
        <section className="fade-in-delay-1">
          <span className="section-label mb-4 block">Connect</span>
          <SocialLinks />
        </section>
      </div>
    </main>
  );
};

export default Index;
