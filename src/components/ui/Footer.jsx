import { useState } from "react";
import { SocialButton } from "../shared/SocialButton";

const footerLinks = {
  column1: [
    { title: "About", path: "/about" },
    { title: "Events", path: "/events" },
    { title: "Programs", path: "/programs" },
    { title: "Coaching", path: "/coaching" },
    { title: "Start now", path: "/start" },
  ],
  column2: [
    { title: "Documentary", path: "/documentary" },
    { title: "Podcast", path: "/podcast" },
    { title: "Blog", path: "/blog" },
    { title: "Free resources", path: "/resources" },
    { title: "Shop all", path: "/shop" },
  ],
  column3: [
    { title: "Community", path: "/community" },
    { title: "Assessments", path: "/assessments" },
    { title: "Careers", path: "/careers" },
    { title: "Giving", path: "/giving" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
  { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
  { name: "YouTube", icon: "youtube", url: "https://youtube.com" },
  { name: "Pinterest", icon: "pinterest", url: "https://pinterest.com" },
];

export const Footer = () => {
  const [language, setLanguage] = useState("English");
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <footer className="bg-transparent border-t border-primary/20">
      <div className="mx-auto px-4 md:px-8 xl:px-24 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left: Bio Section */}
          <div className="lg:col-span-4">
            <p className="text-primary/80 text-xs leading-relaxed mb-6">
              Pritha Mohinta is a global motivational speaker, award-winning author, 
              and purpose-driven entrepreneur dedicated to empowering individuals to 
              unlock their full potential and create lasting transformation.
            </p>
            
            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-wider text-primary/80 mb-3 font-semibold">
                Follow Pritha:
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <SocialButton
                    key={social.name}
                    name={social.name}
                    icon={social.icon}
                    url={social.url}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Navigation Columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <ul className="space-y-3">
                  {footerLinks.column1.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className="text-xs text-primary hover:text-primary/80 font-medium transition-colors uppercase tracking-wide"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  {footerLinks.column2.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className="text-xs text-primary hover:text-primary/80 font-medium transition-colors uppercase tracking-wide"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  {footerLinks.column3.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className="text-xs text-primary hover:text-primary/80 font-medium transition-colors uppercase tracking-wide"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Contact Section */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Customer Support */}
              <div>
                <h3 className="text-primary font-semibold text-xs mb-2 flex items-center gap-2 uppercase tracking-wide">
                  Customer Support
                  <span className="text-base">›</span>
                </h3>
                <p className="text-primary/80 text-xs leading-relaxed">
                  Contact Customer Support for questions on your products, coaching, or events.
                </p>
              </div>

              {/* Media Inquiries */}
              <div>
                <h3 className="text-primary font-semibold text-xs mb-2 flex items-center gap-2 uppercase tracking-wide">
                  Media Inquiries
                  <span className="text-base">›</span>
                </h3>
                <p className="text-primary/80 text-xs leading-relaxed">
                  Members of the press are welcome to contact us for media inquiries and interviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Left: Language & Legal Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium uppercase tracking-wider"
                >
                  {language}
                  <span className="text-xs">▼</span>
                </button>
                {isLangOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-black/90 backdrop-blur border border-primary/30 rounded-md shadow-lg py-2 min-w-[120px] z-10">
                    {["English", "Español", "Français", "Deutsch"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs hover:bg-primary/10 transition-colors text-primary/80 hover:text-primary"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="/privacy" className="text-primary/80 hover:text-primary transition-colors uppercase tracking-wider font-medium">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-primary/80 hover:text-primary transition-colors uppercase tracking-wider font-medium">
                  Terms
                </a>
                <a href="/credits" className="text-primary/80 hover:text-primary transition-colors uppercase tracking-wider font-medium">
                  Site Credits
                </a>
              </div>
            </div>

            {/* Right: Copyright & Address */}
            <div className="text-xs text-primary/80">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span>© 2026. All rights reserved.</span>
                <span className="hidden sm:inline text-primary/50">•</span>
                <span>San Diego, CA 92196</span>
              </div>
            </div>
          </div>
        </div>
      </div>
</footer> 

);
 };