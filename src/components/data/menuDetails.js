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
import CocoShakeImg from "../../images/coco-milk.jpg";

const menuData = [
  {
    category: "Juices",
    items: [
      {
        name: "ABC Elixir",
        ingredients: "Apple, Beetroot, Carrot",
        img: ABCImg,
        price: "₹59",
        nutrients: "Vitamin C, Vitamin K, Manganese, Bromelain",
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
        nutrients: "Vitamin A(60%), Vitamin C(22%), Iron(6%), Antioxidants",
        benefits: "Skin glow, Heart Health",
      },
      {
        name: "Glorious Green",
        ingredients: "Cucumber, Celery",
        img: CucumberImg,
        price: "₹49",
        nutrients: "Vitamin K(45%), Potassium, VitaB9(11%)",
        benefits: "Cooling, hydration, skin health, alkalizing",
      },
      {
        name: "Golden Harvest",
        ingredients: "Orange, Carrot",
        img: OrangeImg,
        price: "₹59",
        nutrients: "Vitamin C(60%), Vitamin A(35%), Thiamine",
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
        nutrients: "Cal(220), Protein(11g), Fiber(8g), Carb(30g), Vitamin C(20mg)",
        benefits: "Digestive health, muscle repair, blood sugar control",
      },
      {
        name: "Cashew Creamy",
        ingredients: "Cashew Cream, Vegetables",
        img: CreCasImg,
        price: "₹109",
        nutrients: "Cal(150), Protein(7g), Fiber(5g), Calcium, Carbs(15g)",
        benefits: "Brain health, satiety, bone strength",
      },
      {
        name: "Waldorf Charm",
        ingredients: "Apple, Walnuts, Celery, Grapes",
        img: WaldorfImg,
        price: "₹129",
        nutrients: "Cal(240), Protein(13g), Vitamin C, Carb(29g)",
        benefits: "Heart health, metabolism boost, cognitive function",
      },
      {
        name: "Corn & Paneer",
        ingredients: "Sweet Corn, Paneer, Spices",
        img: CorPanImg,
        price: "₹129",
        nutrients: "Cal(300), Protein(22g), Calcium(260mg), Carb(25g), Fiber(6g)",
        benefits: "Muscle building, eye health, energy",
      },
      {
        name: "Fruit & Nut Bliss",
        ingredients: "Mixed Fruits, Nuts",
        img: FruNutImg,
        price: "₹139",
        nutrients: "Cal(270), Protein(6g), Healthy Fats, Fiber(7g), Carb(28g)",
        benefits: "Antioxidants, heart health, natural sweetness",
      },
      {
        name: "Purple-Green Spicy",
        ingredients: "Beetroot, Greens, Spices",
        img: PurGreImg,
        price: "₹99",
        nutrients: "Cal(260), Protein(12g), Carb(30g), Sulforaphane",
        benefits: "Anti-inflammatory, detoxification, gut health",
      },
      {
        name: "Fresh-Veggies",
        ingredients: "Mixed Vegetables, Spices",
        img: FreVegImg,
        price: "₹109",
        nutrients: "Cal(220), Protein(5g), Fiber(6g), Carb(16g), Calcium(60mg)",
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
        nutrients: "Cal(200), Potassium(400mg), Protein(5g), Vitamin E, Magnesium(40mg)",
        benefits: "Bone Strength, Brain&Nerve Function",
      },
      {
        name: "Mango Magic",
        ingredients: "Mango, Milk",
        img: ManLasiImg,
        price: "₹89",
        nutrients: "Cal(210), Protein(7g), Calcium(200mg), Vitamin C(40mg)",
        benefits: "Gut health, Muscle Recovery, Boost Immunity",
      },
      {
        name: "Pineapple Splash",
        ingredients: "Pineapple, Milk/Nut Milk",
        img: PineShaImg,
        price: "₹79",
        nutrients: "Cal(190), Protein(5g), BCAAs, Magnesium, Phosphorus",
        benefits: "Muscle growth, Healthy Skin, Satiety",
      },
      {
        name: "Chikku Chill",
        ingredients: "Chikku (Sapodilla), Almond Milk, Dates, Cinnamon",
        img: ChicShImg,
        price: "₹79",
        nutrients: "Cal(240), Iron, Calcium(150mg), Fiber, Potassium",
        benefits: "Digestive health, Weight Gain",
      },
      // {
      //   name: "BlueBerry Blast",
      //   ingredients: "Blueberries, Milk",
      //   img: BlueBeShImg,
      //   price: "₹89",
      //   nutrients: "Antioxidants, Vitamin K, Probiotics, Omega-3s",
      //   benefits: "Brain health, immunity boost, skin glow",
      // },
      {
        name: "Coco Crush",
        ingredients: "Coconut, Milk, Dates",
        img: CocoShakeImg,
        price: "₹89",
        nutrients: "Cal(205), Healthy Fat, Dietry Fiber",
        benefits: "Antioxidants, Fiber-rich, Hydration-support",
      },
      {
        name: "Power Dry Fruit",
        ingredients: "Mixed Dry Fruits, Banana, Milk",
        img: DryFruShImg,
        price: "₹89",
        nutrients: "Cal(290), Vitamin E(4mg), Protein(10g), Omega3(370mg), Complex Carbs",
        benefits: "Brain Health, Hair Grow, Heart health",
      },
      {
        name: "Apple Crunch",
        ingredients: "Apple, Almond Milk",
        img: AppleCrunImg,
        price: "₹79",
        nutrients: "Cal(215), Dietry Fiber, Protein(6g), Magnesium(60mg)",
        benefits: "Gut health, Metabolism boost, Antioxidants protection",
      },
    ],
  },
];

export default menuData;
