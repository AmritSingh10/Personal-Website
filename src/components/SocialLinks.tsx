const links = [
  { name: "amritrs2 [at] illinois.edu", href: "mailto:amritrs2@illinois.edu" },
  { name: "X", href: "https://x.com/amritrsingh26" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amritrsingh/" },
  { name: "GitHub", href: "https://github.com/AmritSingh10" },
  { name: "Resume", href: "/resume.pdf" },
];

const SocialLinks = () => {
  return (
    <div className="pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 pt-4 text-sm font-light tracking-wide text-foreground/70">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="subtle-link"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
