const links = [
  { name: "amritrs2 [at] illinois.edu", href: "mailto:amritrs2@illinois.edu" },
  { name: "X", href: "https://x.com/amritrsingh26" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amritrsingh/" },
  { name: "GitHub", href: "https://github.com/AmritSingh10" },
];

const SocialLinks = () => {
  return (
    <div className="pt-6 border-t border-border">
      <div className="flex flex-wrap justify-between gap-4 pt-4 text-sm text-foreground/80">
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
