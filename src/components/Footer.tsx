
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Copyright */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Jhonatan Steven Morales</h3>
            <p className="text-gray-400 mb-4">
              Data Engineer passionate about transforming data into insights
            </p>
            <p className="text-gray-500">
              © {currentYear} Jhonatan Steven Morales. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "projects", label: "Projects" },
                { id: "about", label: "About Me" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/jhonatan-morales" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/jmorales" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="mailto:jhonatan.morales@email.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
