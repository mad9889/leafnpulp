import { useState, useEffect } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/ui/Header";
import menuData from "./components/data/menuDetails";
import {
  FaMapMarkerAlt,
  FaArrowUp,
  FaInstagram,
  FaLeaf,
  FaHeart,
  FaTimes,
  FaRecycle,
  FaShieldAlt,
  FaStar,
  FaTruck,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const packagesData = [
  {
    category: "3 Days",
    items: [
      {
        price: "₹159/person",
        name: "Juices",
        features: ["Hydration Elation", "CarriPine Bliss", "Glorious Green"],
        color: "bg-gradient-to-br from-purple-400 to-purple-300",
      },
      {
        price: "₹339/person",
        name: "Salads",
        features: ["Chickpea&Cucumber", "Waldorf", "Fresh Veggies"],
        color: "bg-gradient-to-br from-green-400 to-green-500",
      },
      {
        price: "₹239/person",
        name: "Shakes",
        features: ["Mango Bliss", "Apple Crunch", "Banana Buzz"],
        color: "bg-gradient-to-br from-blue-200 to-blue-500",
      },
    ],
  },
  {
    category: "7 Days",
    items: [
      {
        price: "₹349/person",
        name: "Juices",
        features: [
          "ABC Elixir",
          "CarriPine Bliss",
          "Hydration Elation",
          "Red Glow Tonic",
          "Glorious Green",
          "Golden Harvest",
          "Emerald",
        ],
        color: "bg-gradient-to-br from-purple-400 to-purple-300",
      },
      {
        price: "₹789/person",
        name: "Salads",
        color: "bg-gradient-to-br from-green-400 to-green-500",

        features: [
          "Chickpea&Cucumber",
          "Cashew Creamy",
          "Waldorf Charm",
          "Corn & Paneer",
          "Fruit & Nut Bliss",
          "Purple-Green Spicy",
          "Fresh Veggies",
        ],
      },
      {
        price: "₹559/person",
        name: "Shakes",
        color: "bg-gradient-to-br from-blue-200 to-blue-500",
        features: [
          "Banana Buzz",
          "Mango Magic",
          "Pineapple Splash",
          "Chikku Chill",
          "BlueBerry Blast",
          "Power Dry Fruit",
          "Apple Crunch",
        ],
      },
    ],
  },
  {
    category: "14 Days",
    items: [
      {
        price: "₹1099/person",
        name: "Juice&Salad",
        features: ["Same as 7 days Juices", "Same as 7 days Salads"],
        color: "bg-gradient-to-br from-purple-400 to-purple-300",
      },
      {
        price: "₹899/person",
        name: "Juice&Shake",
        features: ["Same as 7 days Juices", "Same as 7 days Shakes"],
        color: "bg-gradient-to-br from-green-400 to-green-500",
      },
      {
        price: "₹1299/person",
        name: "Shake&Salad",
        color: "bg-gradient-to-br from-blue-200 to-blue-500",
        features: ["Same as 7 days Salads", "Same as 7 days Shakes"],
      },
    ],
  },
];

// Features data (shared across all packages)
const packageFeatures = {
  Juices: ["Hydration Elation", "CarriPine Bliss", "Glorious Green"],
  Salads: ["Chickpea Cucumber", "Waldorf", "Fresh Veggies"],
  Shakes: ["Apple Crunch", "Banana Buzz", "Mango Magic"],
};

export default function GreenBiteLandingPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [hasScrolledHalf, setHasScrolledHalf] = useState(false);
  const [selectedCat, setSelectedCat] = useState(menuData[0].category);
  const [selectedPack, setSelectedPack] = useState(packagesData[0].category);
  const isMobile = useMediaQuery({ maxWidth: 568 });

  const currentItems = menuData.find((m) => m.category === selectedCat).items;
  const [showGreeting, setShowGreeting] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 4000);
    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowOfferPopup(true);
  }, 8000);

  return () => clearTimeout(timer);
}, []);


  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
  };

  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  const renderMobileCarousel = () => (
    <div className="px-4 pb-12">
      <Slider {...carouselSettings}>
        {currentItems.map((item) => (
          <div key={item.name} className="px-2">
            <div
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-green-50"
              onClick={() => handleItemClick(item.name)}
            >
              {/* Image */}
              <div className="h-52 sm:h-56 overflow-hidden rounded-t-xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Basic Info (Always Visible) */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-lg px-2 py-1 rounded-full">
                    {item.price || "₹149"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.ingredients}</p>
              </div>

              {/* Nutrition Overlay (Conditional) */}
              {expandedItem === item.name && (
                <div className="absolute inset-0 bg-white bg-opacity-95 p-6 flex flex-col justify-center animate-fadeIn animate-fadeIn">
                  <div className="mb-4">
                    <div className="flex items-center text-green-600 mb-2">
                      <FaLeaf className="mr-2" />
                      <h4 className="font-bold">Nutrients</h4>
                    </div>
                    <p className="text-sm">{item.nutrients}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-green-600 mb-2">
                      <FaHeart className="mr-2" />
                      <h4 className="font-bold">Benefits</h4>
                    </div>
                    <p className="text-sm">{item.benefits}</p>
                  </div>
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedItem(null);
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  const renderDesktopGrid = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {currentItems.map((item) => (
        <div
          key={item.name}
          className="group relative bg-white border border-green-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="h-52 overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {item.price || "₹149"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{item.ingredients}</p>
          </div>

          {/* Desktop Hover Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="mb-4">
              <div className="flex items-center text-green-600 mb-2">
                <FaLeaf className="mr-2" />
                <h4 className="font-bold">Nutrients</h4>
              </div>
              <p className="text-sm">{item.nutrients}</p>
            </div>
            <div>
              <div className="flex items-center text-green-600 mb-2">
                <FaHeart className="mr-2" />
                <h4 className="font-bold">Benefits</h4>
              </div>
              <p className="text-sm">{item.benefits}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white text-gray-800 xs:grid-cols-2 scroll-smooth">
      <Header />

      {/* Menu Section */}
      <section
        id="menu-nutrition"
        className="py-16 max-w-6xl mx-auto bg-green-50"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Our Menu & Nutritional Benefits
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-8 px-4 overflow-x-auto py-2">
          {menuData.map((m) => (
            <button
              key={m.category}
              onClick={() => setSelectedCat(m.category)}
              className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                m.category === selectedCat
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {m.category}
            </button>
          ))}
        </div>

        {/* Mobile Carousel or Desktop Grid */}
        {isMobile ? renderMobileCarousel() : renderDesktopGrid()}
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
            Our Packages
          </h2>

          {/* Packages Duration Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 px-4 py-2 max-w-3xl mx-auto">
            {packagesData.map((pkg) => (
              <button
                key={pkg.category}
                onClick={() => setSelectedPack(pkg.category)}
                className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                  pkg.category === selectedPack
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {pkg.category}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
            {packagesData
              .find((pkg) => pkg.category === selectedPack)
              ?.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl text-white shadow-lg p-6 ${item.color} 
              relative transform hover:scale-105 transition duration-300`}
                >
                  <div className="text-2xl font-bold mb-2">{item.name}</div>
                  <div className="text-xl font-bold mb-3">{item.price}</div>
                  <ul className="space-y-2">
                    {item.features?.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaLeaf className="mr-2 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced Health Benefits Banner */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Pure & Powerful Nutrition
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every ingredient carefully selected for maximum health benefits
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* No Sugar Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTimes className="text-red-500 text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-lg">Zero Added Sugar</h4>
              <p className="text-sm text-gray-600 mb-3">
                Naturally sweetened with fruits only
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Diabetes-friendly
              </span>
            </div>

            {/* 100% Natural Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-green-500 text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-lg">Farm to Bottle</h4>
              <p className="text-sm text-gray-600 mb-3">
                Cold-pressed within 4 hours of harvesting
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                48-hour freshness guarantee
              </span>
            </div>

            {/* Nutrition Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-blue-500 text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-lg">Nutrient Lock</h4>
              <p className="text-sm text-gray-600 mb-3">
                High-pressure processed to preserve 98% nutrients
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Lab-tested
              </span>
            </div>

            {/* Sustainability Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRecycle className="text-yellow-500 text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-lg">Eco-Conscious</h4>
              <p className="text-sm text-gray-600 mb-3">
                100% biodegradable packaging
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Carbon-neutral
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          {/* Replace current trust indicators with this */}
          <div className="mt-12">
            <h4 className="text-lg font-semibold mb-6 text-green-700">
              Why Customers Love Us
            </h4>

            <Slider
              {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: isMobile ? 1 : 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: !isMobile,
              }}
            >
              {[
                {
                  icon: <FaStar className="text-yellow-400 text-3xl mb-3" />,
                  title: "4.9/5 Stars",
                  text: "100+ happy customers",
                },
                {
                  icon: <FaTruck className="text-green-500 text-3xl mb-3" />,
                  title: "Free Delivery",
                  text: "Around 4km Range ",
                },
                {
                  icon: <FaShieldAlt className="text-blue-500 text-3xl mb-3" />,
                  title: "Certified Quality",
                  text: "FSSAI Approved",
                },
                {
                  icon: (
                    <FaRecycle className="text-emerald-500 text-3xl mb-3" />
                  ),
                  title: "Eco-Friendly",
                  text: "Sustainable packaging",
                },
                {
                  icon: <FaLeaf className="text-green-600 text-3xl mb-3" />,
                  title: "100% Natural",
                  text: "No artificial additives",
                },
              ].map((item, i) => (
                <div key={i} className="px-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center h-full">
                    <div className="mx-auto w-max">{item.icon}</div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Google Maps Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-700">
            Visit Us
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=sunspace%20apartment,%20adhmedabad+(Leaf%20%26%20Pulp)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Leaf & Pulp Location"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com?q=sunspace+apartment,+adhmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-800"
            >
              <FaMapMarkerAlt className="mr-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section> 
      <footer className="bg-green-100 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="font-bold mb-2 text-green-700">Location</h4>
            <address className="not-italic">
              1, Radhe Provision,
              <br />
              Sunspace Apartment, Ramdev Nagar,
              <br />
              Satellite, Ahmedabad Gujrat (380015)
            </address>
            <p className="mt-2">Open: 7AM - 10PM Daily</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              © 2025 Leaf&Pulp. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤️ for healthy living
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-green-700">Contact</h4>
            <p>hello@leafnpulp.com</p>
            <p>+91 9998258966</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaSquareXTwitter />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showOfferPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className=" relative bg-white p-6 rounded-xl max-w-md text-center shadow-lg">
          {/* ✕ Close Button */}
          <button
            onClick={() => setShowOfferPopup(false)}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            aria-label="Close"
          >
            ✕
          </button>
          <h3 className="text-2xl font-bold text-green-600 mb-4">🎁 Refer & Earn</h3>
          <p className="text-gray-700 mb-4">
            Invite 2 friends and get a juice or shake free!
          </p>
          <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Hey! 🍹 I found this awesome juice brand "Leaf & Pulp"! Get a free juice when you refer 2 friends. Try it here: https://leaf-pulp.vercel.app/`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full shadow-md transition-all"
            >
            Refer Now
          </a>
        </div>
      </div>
    )}

    </div>
  );
}
