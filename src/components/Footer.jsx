const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3 text-primary">SkyGrid Studio</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Helping brands and businesses build high-performing, modern websites that deliver results.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#services" className="hover:text-primary transition">Services</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📧 hello@skygridstudio.com</li>
            <li>📞 +1 (000) 000-0000</li>
            <li>🌍 Remote & Global</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} SkyGrid Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
