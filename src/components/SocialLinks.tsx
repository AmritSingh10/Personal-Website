import { Twitter, Linkedin, Instagram, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: <Twitter size={20} />,
    href: "https://x.com/amritrsingh26",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/amritrsingh/",
  },
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/amritrsingh26/",
  },
];

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("amritrsingh26@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={handleCopyEmail}
        className="social-icon"
        aria-label="Copy email"
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
      </button>
    </div>
  );
};

export default SocialLinks;
