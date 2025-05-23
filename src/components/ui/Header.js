import React from "react";

const Header = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi! I'm interested in ordering from GreenBite."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* Top Navbar with Brand */}
      <nav className="bg-white shadow-md py-4 px-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700 tracking-wider">
          🍃 Leaf<span className="text-black">&</span>Pulp
        </h1>
        <div className="hidden sm:flex gap-4 text-sm text-gray-600">
          <a href="#packages" className="hover:text-green-600">
            Packages
          </a>
          <a href="#menu-nutrition" className="hover:text-green-600">
            Menu
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-200 to-green-100">
        <h2 className="text-5xl font-bold mb-4">
          Fresh. Clean. Nourishing – Delivered Daily.
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Cold-pressed juices, wholesome salads & power smoothies – made for
          your health.
        </p>
      </section>
    </div>
  );
};

export default Header;
