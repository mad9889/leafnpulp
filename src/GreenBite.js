import { useState, useEffect } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/ui/Header";
// juices
import OrangeImg from "./images/orange.jpeg";
import BeetCarrotImg from "./images/beetcarrot.jpg";
import ABCImg from "./images/abc.jpg";
import PinepleImg from "./images/Pineapple.jpg";
import WaterBeetImg from "./images/watermelon-beet.jpg";
import AppSpiImg from "./images/app-spi.jpg";
import CucumberImg from "./images/cucumber.jpeg";
import { FaCheck, FaArrowUp, FaLeaf, FaHeart, FaBolt } from "react-icons/fa";

//Salad
import ChiCuImg from "./images/chicu.jpeg";
import CreCasImg from "./images/crecash.jpg";
import WaldorfImg from "./images/waldrof.jpg";
import CorPanImg from "./images/corpan.jpg";
import FruNutImg from "./images/frunut.jpg";
import PurGreImg from "./images/purgre.jpg";
import FreVegImg from "./images/freveg.jpeg";

//shakes
import ManLasiImg from "./images/manlasii.jpg";
import BanAlmImg from "./images/banalmond.jpg";
import PineShaImg from "./images/pineshake.jpg";
import ChicShImg from "./images/chicush.jpg";
import DryFruShImg from "./images/dryfruitsh.jpeg";
import AppleCrunImg from "./images/aplSh.jpeg";
import BlueBeShImg from "./images/bluebesh.jpg";

const pricingPackages = [
  {
    name: "3 days",
    price: "₹149/day",
    color: "bg-gradient-to-br from-purple-400 to-purple-300",
    features: ["Juice = ₹149", "Salad = ₹200", "Shake = ₹99"],
  },
  {
    name: "7 days",
    price: "₹179/day",
    color: "bg-gradient-to-br from-green-400 to-green-600",
    features: ["Beetroot Juice", "Spinach Juice", "Custom Plan"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "15 days",
    price: "₹199/day",
    color: "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-400",
    features: ["All Juices", "Priority Delivery", "Free Bottle"],
  },
  {
    name: "30 days",
    price: "₹159/day",
    color: "bg-gradient-to-br from-blue-200 to-blue-500",
    features: ["Full Menu Access", "Free Wellness Guide", "24/7 Support"],
  },
];

const menuData = [
  {
    category: "Juices",
    items: [
      {
        name: "ABC Elixir",
        ingredients: "Apple, Beetroot, Carrot",
        img: ABCImg,
        nutrients: "Vitamin C, Manganese, Bromelain",
        benefits: "Immunity boost, digestion, anti-inflammatory",
      },
      {
        name: "CarriPine Bliss",
        ingredients: "Pineapple, Carrot",
        img: PinepleImg,
        nutrients: "Vitamin C, Manganese, Bromelain",
        benefits: "Immunity boost, digestion, anti-inflammatory",
      },
      {
        name: "Hydration Elution",
        ingredients: "Watermelon, Beetroot",
        img: WaterBeetImg,
        nutrients: "Iron, Vitamin A, Lycopene, Citrulline",
        benefits: "Blood pressure, stamina, hydration, circulation",
      },
      {
        name: "Red Glow Tonic",
        ingredients: "Beetroot, Carrot",
        img: BeetCarrotImg,
        nutrients: "Vitamin A, Beta-Carotene, Nitrates, Antioxidants",
        benefits: "Eye health, skin glow, blood flow, detoxification",
      },
      {
        name: "Glorious Green",
        ingredients: "Cucumber, Celery",
        img: CucumberImg,
        nutrients: "Vitamin K, Potassium, Silica, Hydration",
        benefits: "Cooling, hydration, skin health, alkalizing",
      },
      {
        name: "Golden Harvest",
        ingredients: "Orange, Carrot",
        img: OrangeImg,
        nutrients: "Vitamin C, Folate, Thiamine",
        benefits: "Immunity boost, collagen production, heart health",
      },
      {
        name: "Emerald",
        ingredients: "Spinach, Apple",
        img: AppSpiImg,
        nutrients: "Iron, Vitamin K, Fiber, Polyphenols",
        benefits: "Gut health, weight management, blood health",
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        name: "Chickpea & Cucumber",
        ingredients: "Chickpeas, Cucumber, Spices",
        img: ChiCuImg,
        nutrients: "Protein, Fiber, Vitamin K, Phytonutrients",
        benefits: "Digestive health, muscle repair, blood sugar control",
      },
      {
        name: "Cashew Cheesy",
        ingredients: "Cashew Cream, Vegetables",
        img: CreCasImg,
        nutrients: "Healthy Fats, Protein, Calcium, Magnesium",
        benefits: "Brain health, satiety, bone strength",
      },
      {
        name: "Waldorf Charm",
        ingredients: "Apple, Walnuts, Celery, Grapes",
        img: WaldorfImg,
        nutrients: "Omega-3s, Fiber, Vitamin C, Antioxidants",
        benefits: "Heart health, metabolism boost, cognitive function",
      },
      {
        name: "Corn & Paneer",
        ingredients: "Sweet Corn, Paneer, Spices",
        img: CorPanImg,
        nutrients: "Protein, Calcium, Zeaxanthin, Fiber",
        benefits: "Muscle building, eye health, energy",
      },
      {
        name: "Fruit & Nut Bliss",
        ingredients: "Mixed Fruits, Nuts",
        img: FruNutImg,
        nutrients: "Vitamins A-C, Healthy Fats, Fiber",
        benefits: "Antioxidants, heart health, natural sweetness",
      },
      {
        name: "Purple-Green Spicy",
        ingredients: "Beetroot, Greens, Spices",
        img: PurGreImg,
        nutrients: "Anthocyanins, Vitamin K, Sulforaphane",
        benefits: "Anti-inflammatory, detoxification, gut health",
      },
      {
        name: "Fresh-Veggies",
        ingredients: "Mixed Vegetables, Spices",
        img: FreVegImg,
        nutrients: "Fiber, Vitamin C, Phytonutrients",
        benefits: "Digestion, immunity, low-calorie nutrition",
      },
    ],
  },
  {
    category: "Shakes",
    items: [
      {
        name: "Banana Buzz",
        ingredients: "Banana, Date , Milk",
        img: BanAlmImg,
        nutrients: "Potassium, Protein, Vitamin E, Magnesium",
        benefits: "Muscle recovery, heart health, natural energy",
      },
      {
        name: "Mango Magic",
        ingredients: "Mango, Milk",
        img: ManLasiImg,
        nutrients: "Vitamin A, Calcium, Probiotics, Vitamin C",
        benefits: "Gut health, hydration, skin glow",
      },
      {
        name: "Pineapple Splash",
        ingredients: "Pineapple, Milk/Nut Milk",
        img: PineShaImg,
        nutrients: "Complete Protein, BCAAs, Calcium",
        benefits: "Muscle growth, recovery, satiety",
      },
      {
        name: "Chikku Chill",
        ingredients: "Chikku (Sapodilla), Almond Milk, Dates, Cinnamon",
        img: ChicShImg,
        nutrients: "Iron, Calcium, Fiber, Vitamin C",
        benefits: "Digestive health, natural sweetness, energy boost",
      },
      {
        name: "BlueBerry Blast",
        ingredients: "Blueberries, Greek Yogurt, Honey, Chia Seeds",
        img: BlueBeShImg,
        nutrients: "Antioxidants, Vitamin K, Probiotics, Omega-3s",
        benefits: "Brain health, immunity boost, skin glow",
      },
      {
        name: "Power Dry Fruit",
        ingredients: "Mixed Dry Fruits, Banana, Oats, Milk",
        img: DryFruShImg,
        nutrients: "Healthy Fats, Protein, Potassium, Complex Carbs",
        benefits: "Sustained energy, muscle recovery, heart health",
      },
      {
        name: "Apple Crunch",
        ingredients: "Apple, Peanut Butter, Flaxseeds, Almond Milk",
        img: AppleCrunImg,
        nutrients: "Fiber, Vitamin E, Magnesium, Plant Protein",
        benefits: "Gut health, metabolism boost, natural energy",
      },
    ],
  },
];

export default function GreenBiteLandingPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedCat, setSelectedCat] = useState(menuData[0].category);
  const isMobile = useMediaQuery({ maxWidth: 568 });

  const currentItems = menuData.find((m) => m.category === selectedCat).items;

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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
  };

  const renderMobileCarousel = () => (
    <div className="px-4 pb-12">
      <Slider {...carouselSettings}>
        {currentItems.map((item) => (
          <div key={item.name} className="px-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-50">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {item.price || "₹149"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{item.ingredients}</p>

                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center text-sm mb-1">
                    <FaLeaf className="text-green-500 mr-2" />
                    <span className="font-medium">Nutrients:</span>
                    <span className="ml-1 mt-1">{item.nutrients}</span>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <FaHeart className="text-green-500 mr-2" />
                    <span className="font-medium">Benefits:</span>
                    <span className="ml-1 mt-1">{item.benefits}</span>
                  </div>
                </div>
              </div>
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
          <div className="h-48 overflow-hidden">
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
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white text-gray-800 xs:grid-cols-2 scroll-smooth">
      <Header />

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
          Our Packages
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl text-white shadow-lg p-6 ${
                pkg.color
              } relative transform hover:scale-105 transition duration-300 ${
                pkg.highlight ? "scale-105 ring-4 ring-white z-10" : ""
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
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

      {/* Menu Section */}
      <section id="menu-nutrition" className="py-16 max-w-6xl mx-auto">
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

      {/* Health Benefits Banner */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Why Choose Leaf&Pulp?
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FaLeaf className="text-green-500 text-3xl mx-auto mb-3" />
              <h4 className="font-bold mb-2">100% Natural</h4>
              <p className="text-sm text-gray-600">
                No artificial preservatives or additives
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FaHeart className="text-green-500 text-3xl mx-auto mb-3" />
              <h4 className="font-bold mb-2">Health First</h4>
              <p className="text-sm text-gray-600">
                Scientifically balanced nutrition
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FaBolt className="text-green-500 text-3xl mx-auto mb-3" />
              <h4 className="font-bold mb-2">Instant Energy</h4>
              <p className="text-sm text-gray-600">
                Feel the difference with every sip
              </p>
            </div>
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

      {/* Footer */}
      <footer className="bg-green-100 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-600 mb-2">
            © 2025 Leaf&Pulp. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ for healthy living
          </p>
        </div>
      </footer>
    </div>
  );
}
