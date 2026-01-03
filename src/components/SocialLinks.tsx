import { Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: <Twitter size={20} />,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    href: "#",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    href: "#",
  },
  {
    name: "Email",
    icon: <Mail size={20} />,
    href: "mailto:hello@example.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
