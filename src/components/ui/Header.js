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
          <a href="#nutrition" className="hover:text-green-600">
            Nutrition
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-200 to-green-100">
        <h2 className="text-5xl font-bold mb-4">
          Fresh. Clean. Nourishing – Delivered Daily.
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Cold-pressed juices, wholesome salads & power sprouts – made for your
          health.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow"
            onClick={handleWhatsAppClick}
          >
            📲 Order via WhatsApp
          </button>
          <a
            href="#packages"
            className="px-6 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-50"
          >
            📥 View Packages
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
