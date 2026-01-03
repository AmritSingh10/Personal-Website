import SocialLinks from "@/components/SocialLinks";
import eagleScoutPhoto from "@/assets/eagle-scout.jpeg";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        {/* Header with photo */}
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-8 fade-in">
          <div className="flex-1 space-y-4">
            <h1 className="display-name">
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
                <li>Mentor at Dartmouth's EDIT Lab</li>
                <li>Quantum ML model integrated with VaR and CVaR to execute optimal trades under uncertainty.</li>
                <li>Optimized Wildfire Evacuations using a Agent-Based Modeling and ML approach.</li>
              </ul>
              <p className="body-text text-foreground/90 mt-4 text-sm">
                I'm always exploring new ideas and looking to learn more. Feel free to reach out.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg border border-border shadow-sm">
              <img
                src={eagleScoutPhoto}
                alt="Me at my Eagle Scout Board of Review"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 max-w-[16rem] leading-relaxed">
              Me at my Eagle Scout Board of Review with Ambassador Reuben Brigety and Jack Hannon
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
