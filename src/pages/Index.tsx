import ProfilePhoto from "@/components/ProfilePhoto";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        {/* Header with photo */}
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-12 fade-in">
          <div className="flex-1 space-y-4">
            <h1 className="display-name">
              <span className="display-name-italic">Your</span> Name
            </h1>
            <p className="body-text text-muted-foreground max-w-md">
              A brief tagline about yourself — what you do, what you care about, 
              or simply a thought that defines you.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <ProfilePhoto />
          </div>
        </header>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-10 fade-in-delay-1" />

        {/* Bio section */}
        <section className="mb-12 fade-in-delay-2">
          <span className="section-label mb-4 block">About</span>
          <div className="body-text space-y-4 text-foreground/90">
            <p>
              Welcome to my corner of the internet. I'm passionate about creating things 
              that matter and finding beauty in simplicity.
            </p>
            <p>
              Currently exploring new ideas and always open to interesting conversations. 
              Feel free to reach out.
            </p>
          </div>
        </section>

        {/* Social links */}
        <section className="fade-in-delay-3">
          <span className="section-label mb-4 block">Connect</span>
          <SocialLinks />
        </section>
      </div>
    </main>
  );
};

export default Index;
