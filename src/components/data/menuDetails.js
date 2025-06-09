// juices
import OrangeImg from "../../images/goldenHar.jpg";
import BeetCarrotImg from "../../images/beetcarrot.jpg";
import ABCImg from "../../images/apbc.jpg";
import PinepleImg from "../../images/Pineapple.jpg";
import WaterBeetImg from "../../images/hydrela.jpg";
import AppSpiImg from "../../images/app-spi.jpg";
import CucumberImg from "../../images/glori.jpg";

//Salad
import ChiCuImg from "../../images/chicsal.jpg";
import CreCasImg from "../../images/crecash.jpg";
import WaldorfImg from "../../images/waldrof.jpg";
import CorPanImg from "../../images/corpan.jpg";
import FruNutImg from "../../images/frunut.jpg";
import PurGreImg from "../../images/purpg.jpg";
import FreVegImg from "../../images/freshveg.jpg";

//shakes
import ManLasiImg from "../../images/mngsh.jpg";
import BanAlmImg from "../../images/banalmond.jpg";
import PineShaImg from "../../images/pinshake.jpg";
import ChicShImg from "../../images/chikku.jpg";
import DryFruShImg from "../../images/powerdry.jpg";
import AppleCrunImg from "../../images/applcru.jpg";
import BlueBeShImg from "../../images/blueber.jpg";

const menuData = [
  {
    category: "Juices",
    items: [
      {
        name: "ABC Elixir",
        ingredients: "Apple, Beetroot, Carrot",
        img: ABCImg,
        price: "₹59",
        nutrients: "Vitamin C, Manganese, Bromelain",
        benefits: "Immunity boost, digestion, anti-inflammatory",
      },
      {
        name: "CarriPine Bliss",
        ingredients: "Pineapple, Carrot",
        img: PinepleImg,
        price: "₹59",
        nutrients: "Vitamin C, Manganese, Bromelain",
        benefits: "Immunity boost, digestion, anti-inflammatory",
      },
      {
        name: "Hydration Elation",
        ingredients: "Watermelon, Beetroot",
        img: WaterBeetImg,
        price: "₹49",
        nutrients: "Iron, Vitamin A, Lycopene, Citrulline",
        benefits: "Blood pressure, stamina, hydration, circulation",
      },
      {
        name: "Red Glow Tonic",
        ingredients: "Beetroot, Carrot",
        img: BeetCarrotImg,
        price: "₹49",
        nutrients: "Vitamin A, Beta-Carotene, Nitrates, Antioxidants",
        benefits: "Eye health, skin glow, blood flow, detoxification",
      },
      {
        name: "Glorious Green",
        ingredients: "Cucumber, Celery",
        img: CucumberImg,
        price: "₹49",
        nutrients: "Vitamin K, Potassium, Silica, Hydration",
        benefits: "Cooling, hydration, skin health, alkalizing",
      },
      {
        name: "Golden Harvest",
        ingredients: "Orange, Carrot",
        img: OrangeImg,
        price: "₹59",
        nutrients: "Vitamin C, Folate, Thiamine",
        benefits: "Immunity boost, collagen production, heart health",
      },
      {
        name: "Emerald",
        ingredients: "Spinach, Apple",
        img: AppSpiImg,
        price: "₹59",
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
        price: "₹99",
        nutrients: "Protein, Fiber, Vitamin K, Phytonutrients",
        benefits: "Digestive health, muscle repair, blood sugar control",
      },
      {
        name: "Cashew Creamy",
        ingredients: "Cashew Cream, Vegetables",
        img: CreCasImg,
        price: "₹109",
        nutrients: "Healthy Fats, Protein, Calcium, Magnesium",
        benefits: "Brain health, satiety, bone strength",
      },
      {
        name: "Waldorf Charm",
        ingredients: "Apple, Walnuts, Celery, Grapes",
        img: WaldorfImg,
        price: "₹129",
        nutrients: "Omega-3s, Fiber, Vitamin C, Antioxidants",
        benefits: "Heart health, metabolism boost, cognitive function",
      },
      {
        name: "Corn & Paneer",
        ingredients: "Sweet Corn, Paneer, Spices",
        img: CorPanImg,
        price: "₹129",
        nutrients: "Protein, Calcium, Zeaxanthin, Fiber",
        benefits: "Muscle building, eye health, energy",
      },
      {
        name: "Fruit & Nut Bliss",
        ingredients: "Mixed Fruits, Nuts",
        img: FruNutImg,
        price: "₹139",
        nutrients: "Vitamins A-C, Healthy Fats, Fiber",
        benefits: "Antioxidants, heart health, natural sweetness",
      },
      {
        name: "Purple-Green Spicy",
        ingredients: "Beetroot, Greens, Spices",
        img: PurGreImg,
        price: "₹99",
        nutrients: "Anthocyanins, Vitamin K, Sulforaphane",
        benefits: "Anti-inflammatory, detoxification, gut health",
      },
      {
        name: "Fresh-Veggies",
        ingredients: "Mixed Vegetables, Spices",
        img: FreVegImg,
        price: "₹109",
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
        price: "₹69",
        nutrients: "Potassium, Protein, Vitamin E, Magnesium",
        benefits: "Muscle recovery, heart health, natural energy",
      },
      {
        name: "Mango Magic",
        ingredients: "Mango, Milk",
        img: ManLasiImg,
        price: "₹89",
        nutrients: "Vitamin A, Calcium, Probiotics, Vitamin C",
        benefits: "Gut health, hydration, skin glow",
      },
      {
        name: "Pineapple Splash",
        ingredients: "Pineapple, Milk/Nut Milk",
        img: PineShaImg,
        price: "₹79",
        nutrients: "Complete Protein, BCAAs, Calcium",
        benefits: "Muscle growth, recovery, satiety",
      },
      {
        name: "Chikku Chill",
        ingredients: "Chikku (Sapodilla), Almond Milk, Dates, Cinnamon",
        img: ChicShImg,
        price: "₹79",
        nutrients: "Iron, Calcium, Fiber, Vitamin C",
        benefits: "Digestive health, natural sweetness, energy boost",
      },
      {
        name: "BlueBerry Blast",
        ingredients: "Blueberries, Greek Yogurt, Honey, Chia Seeds",
        img: BlueBeShImg,
        price: "₹89",
        nutrients: "Antioxidants, Vitamin K, Probiotics, Omega-3s",
        benefits: "Brain health, immunity boost, skin glow",
      },
      {
        name: "Power Dry Fruit",
        ingredients: "Mixed Dry Fruits, Banana, Oats, Milk",
        img: DryFruShImg,
        price: "₹89",
        nutrients: "Healthy Fats, Protein, Potassium, Complex Carbs",
        benefits: "Sustained energy, muscle recovery, heart health",
      },
      {
        name: "Apple Crunch",
        ingredients: "Apple, Peanut Butter, Flaxseeds, Almond Milk",
        img: AppleCrunImg,
        price: "₹79",
        nutrients: "Fiber, Vitamin E, Magnesium, Plant Protein",
        benefits: "Gut health, metabolism boost, natural energy",
      },
    ],
  },
];

export default menuData;
