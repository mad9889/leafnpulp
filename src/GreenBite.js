import React from "react";

export default function GreenBiteLandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-200 to-green-100 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Fresh. Clean. Nourishing – Delivered Daily.
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Cold-pressed juices, wholesome salads & power sprouts – made for your
          health.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow">
            📲 Order via WhatsApp
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50">
            📥 View Menu
          </button>
          <button className="text-green-700 hover:underline px-6 py-3">
            🧃 Subscribe Now
          </button>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Juices",
              desc: "Cold-pressed | No added sugar | Detox options",
            },
            {
              title: "Salads",
              desc: "Fiber-rich | Tasty dressings | Full meals",
            },
            {
              title: "Sprouts",
              desc: "Protein-packed | Chaat-style | Pure fuel",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Combo Plans */}
      <section className="py-16 bg-green-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Combo Plans</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Fit Individual", price: "₹149/day" },
            { title: "Gym Power Plan", price: "₹179/day" },
            { title: "Family Health Pack", price: "₹399/day" },
            { title: "Office Team Box", price: "₹129/person" },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-lg font-bold mb-4">{plan.price}</p>
              <button className="bg-green-600 text-white w-full py-2 rounded-xl hover:bg-green-700">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why GreenBite */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why GreenBite?</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-left text-lg">
          {[
            "✔ 100% Natural, Local Ingredients",
            "✔ No Preservatives or Refined Sugar",
            "✔ Affordable Plans for Every Lifestyle",
            "✔ Weekly Custom Menus",
            "✔ Eco-friendly Packaging",
          ].map((item, idx) => (
            <li key={idx} className="p-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-green-100 py-10 text-center text-sm text-gray-600">
        <p>© 2025 GreenBite. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:underline">
            Menu
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
