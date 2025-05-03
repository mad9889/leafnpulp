import { useState, useEffect } from "react";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";
import { FaCheck, FaArrowUp } from "react-icons/fa";

import Header from "./components/ui/Header";

const pricingPackages = [
  {
    name: "Starter",
    price: "₹99",
    color: "bg-purple-500",
    features: ["Watermelon Juice", "Orange Juice", "Apple Juice"],
  },
  {
    name: "Business",
    price: "₹179",
    color: "bg-yellow-400",
    features: ["Beetroot Juice", "Spinach Juice", "Custom Plan"],
    highlight: true,
  },
  {
    name: "Professional",
    price: "₹299",
    color: "bg-blue-400",
    features: ["All Juices", "Priority Delivery", "Free Bottle"],
  },
  {
    name: "Premium",
    price: "₹399",
    color: "bg-pink-500",
    features: [
      "All Juices Daily",
      "Weekly Detox Combo",
      "Free Subscription Gift",
    ],
  },
];

export default function GreenBiteLandingPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      <Header />

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Packages</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl text-white shadow-lg p-6 ${
                pkg.color
              } relative ${pkg.highlight ? "scale-105 ring-4 ring-white" : ""}`}
            >
              <h3 className="text-xl font-bold mb-2">{pkg.name} Package</h3>
              <div className="text-3xl font-bold mb-4">{pkg.price}</div>
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="mr-2 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Juice Nutrition & Benefits
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-green-100">
                <th className="p-3 border">Juice</th>
                <th className="p-3 border">Key Nutrients</th>
                <th className="p-3 border">Benefits</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Amla",
                  nutrients: "Vitamin C, Calcium",
                  benefits: "Immunity boost, digestion",
                },
                {
                  name: "Beetroot",
                  nutrients: "Iron, Vitamin A",
                  benefits: "Blood pressure, stamina",
                },
                {
                  name: "Carrot",
                  nutrients: "Vitamin A, Beta-Carotene",
                  benefits: "Eye & skin health",
                },
                {
                  name: "Watermelon",
                  nutrients: "Lycopene, Hydration",
                  benefits: "Cooling, hydration",
                },
                {
                  name: "Spinach",
                  nutrients: "Iron, Magnesium",
                  benefits: "Energy, detox",
                },
                {
                  name: "Orange",
                  nutrients: "Vitamin C",
                  benefits: "Immunity, skin health",
                },
                {
                  name: "Apple",
                  nutrients: "Fiber, Vitamins",
                  benefits: "Gut health, weight mgmt",
                },
              ].map((juice, idx) => (
                <tr key={idx} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border font-medium">{juice.name}</td>
                  <td className="p-3 border">{juice.nutrients}</td>
                  <td className="p-3 border">{juice.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* QR Section */}
      <section className="text-center py-10">
        <h3 className="text-xl font-semibold mb-4">
          Scan to Order on WhatsApp
        </h3>
        <QRCodeSVG
          value="https://wa.me/919999999999"
          size={128}
          fgColor="#059669"
          className="mx-auto"
        />
      </section>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-green-100 py-6 text-center text-sm text-gray-600">
        <p>© 2025 GreenBite. All rights reserved.</p>
      </footer>
    </div>
  );
}
