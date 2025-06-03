import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const handleWhatsAppOrder = () => {
    const fullNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

    if (!fullNumber) {
      console.error("WhatsApp number not configured in environment variables");
      alert(
        "Ordering service is currently unavailable. Please call us instead."
      );
      return;
    }

    // Clean the number (remove all non-digits)
    const cleanedNumber = fullNumber.replace(/\D/g, "");

    if (!cleanedNumber) {
      console.error("Invalid WhatsApp number format");
      return;
    }

    const message = `Hey Leaf&Pulp Team! 🍃  
I'm exploring your juices & salads. I'm interested in your plans.`;

    const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Top Navbar with Brand */}
      <nav className="bg-white shadow-md py-4 px-6 sm:px-20 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-green-700 tracking-wider">
          🍃 Leaf<span className="text-black">&</span>Pulp
        </h1>

        {/* WhatsApp Order Button - Always Visible */}
        <button
          onClick={handleWhatsAppOrder}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all"
        >
          <FaWhatsapp className="text-xl" />
          <span className="hidden sm:inline">Order Now</span>
        </button>
      </nav>

      {/* Hero Section with CTA */}
      <section className="text-center py-16 sm:py-20 bg-gradient-to-r from-green-200 to-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Fresh. Clean. Nourishing – Delivered Daily.
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Cold-pressed juices, wholesome salads & power smoothies – made for
            your health.
          </p>

          {/* Primary CTA Button */}
          <button
            onClick={handleWhatsAppOrder}
            className="flex items-center justify-center gap-3 mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            Order via WhatsApp
          </button>

          {/* Secondary CTA */}
          <p className="mt-4 text-sm text-gray-600">
            Typically responds within 5 minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
